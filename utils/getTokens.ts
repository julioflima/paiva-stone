import { Tiktoken } from "tiktoken/lite";
import { load } from "tiktoken/load";
import models from "tiktoken/model_to_encoding.json";
import registry from "tiktoken/registry.json";

export async function getTokens(prompt: string) {
    const modelId = models['gpt-4'] as keyof typeof registry
    const registryId = registry[modelId]
    const model = await load(registryId);
    const encoder = new Tiktoken(
        model.bpe_ranks,
        model.special_tokens,
        model.pat_str
    );
    const tokens = encoder.encode(prompt);
    encoder.free();
    return tokens
}


