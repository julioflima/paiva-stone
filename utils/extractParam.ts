import { ReadonlyURLSearchParams } from "next/navigation";

export const extractParam = (
    searchParams: ReadonlyURLSearchParams,
    key: string,
    defaultValue: unknown
) => {
    try {
        const param = searchParams.get(key);
        return param;
    } catch (error) {
        console.error(error);
        return defaultValue;
    }
};