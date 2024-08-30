import { Cacheable, CacheConnector } from '..'

export default class MemoryConnector implements CacheConnector {
  #cacheables: Record<string, Cacheable<any>> = {}

  get(key: string): Cacheable<any> | undefined {
    return this.#cacheables[key]
  }

  set(key: string, data: Cacheable<any>): void {
    this.#cacheables[key] = data
  }

  delete(key: string): void {
    delete this.#cacheables[key]
  }

  clear(): void {
    this.#cacheables = {}
  }

  keys(): string[] {
    return Object.keys(this.#cacheables)
  }
}
