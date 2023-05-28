import { JsonSerializable } from "../types";

const get = <T extends JsonSerializable>(
  keys: [string, ...string[]]
): T | null => {
  const serializedValue = localStorage.getItem(joinKeys(keys));
  if (serializedValue === null) return null;
  return JSON.parse(serializedValue);
};

const set = (keys: [string, ...string[]], value: JsonSerializable): void => {
  localStorage.setItem(joinKeys(keys), JSON.stringify(value));
};

const joinKeys = (keys: [string, ...string[]]) => {
  return keys.join("-");
};

const JsonStorage = { get, set };

export default JsonStorage;
