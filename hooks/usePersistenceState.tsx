import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type PersistentContext<T> = [T | undefined, (newValue: T) => void];

export default function usePersistentContext<T>(key: string): PersistentContext<T> {
  const queryClient = useQueryClient();

  const { data } = useQuery<T>({
    queryKey: [key],
    queryFn: () => {
      try {
        return JSON.parse(localStorage.getItem(key) ?? '');
      } catch (error) {
        return localStorage.getItem(key);
      }
    }
  }
  );

  const { mutateAsync: setValue } = useMutation(
    {
      mutationFn: async (value) => {
        if (!value) return localStorage.removeItem(key);

        if (typeof value === 'object') return localStorage.setItem(key, JSON.stringify(value));

        if (typeof value !== 'string') return localStorage.setItem(key, String(value));

        return localStorage.setItem(key, value);
      },
      onMutate: (mutatedData: T) => {
        const current = data;
        queryClient.setQueryData([key], mutatedData);
        return current;
      },
      onError: (_, __, rollback) => {
        queryClient.setQueryData([key], rollback);
      }
    }
  );

  const result =
    data ??
    (typeof window !== 'undefined' ? (localStorage.getItem(key) as T) || undefined : undefined);

  return [result, setValue];
}
