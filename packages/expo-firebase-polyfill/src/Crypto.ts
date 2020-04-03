type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Uint8ClampedArray;

/**
 * A simple Crypto.getRandomValues implementation using Math.random().
 * https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues
 * @param typedArray
 */
export function getRandomValues<T extends TypedArray>(typedArray: T): T {
  if (
    !(
      typedArray instanceof Int8Array ||
      typedArray instanceof Uint8Array ||
      typedArray instanceof Int16Array ||
      typedArray instanceof Uint16Array ||
      typedArray instanceof Int32Array ||
      typedArray instanceof Uint32Array ||
      typedArray instanceof Uint8ClampedArray
    )
  ) {
    throw new Error('Expected an integer typed-array');
  }

  const writeArray = new Uint8Array(typedArray.buffer);
  for (let i = 0; i < writeArray.length; i++) {
    writeArray[i] = Math.floor(Math.random() * 256) % 256;
  }
  return typedArray;
}
