/**
 * LocalStorage에서 JSON.parse하여 조회
 * @param key
 */
export function getItem(key) {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) return null;
  try {
    return rawValue
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('storageUtil.getItem()', key, rawValue, error);
    return null;
  }
}

/**
 * LocalStorage에 JSON.stringify하여 저장
 * @param key
 * @param value
 */
export function setItem(key, value) {
  localStorage.setItem(key, value);
}

export function removeItem(key) {
  localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
