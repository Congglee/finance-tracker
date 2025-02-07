import { useState, useEffect } from "react";

/**
 * A custom hook that synchronizes a Zustand store's state with React's state management.
 * This hook fixes hydration when using persist to save hook data to localStorage
 *
 * @template T - The type of the store's state
 * @template F - The return type of the callback function
 *
 * @param store - A Zustand store selector function
 * @param callback - Optional selector function to transform the store state
 * @returns The selected store state synchronized with React's state management
 *
 * @example
 * ```typescript
 * const count = useStore(useCountStore, (state) => state.count);
 * ```
 */
export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F = (state: T) => state as unknown as F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
