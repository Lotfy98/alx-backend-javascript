export const weakMap = new WeakMap();


const MAX_ENDPOINT_CALLS = 5;
/**
 * Increments the call count for the given endpoint in the weakMap and throws an error if the call count exceeds the MAX_ENDPOINT_CALLS limit.
 *
 * @param {string} endpoint - The endpoint for which to increment the call count.
 * @throws {Error} If the call count exceeds the MAX_ENDPOINT_CALLS limit.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
