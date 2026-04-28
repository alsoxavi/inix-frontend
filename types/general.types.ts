export type ParamsType<K extends string> = {
    params: Promise<Record<K, string>>
}