import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);
// 在一个函数中，改变传入对象本身是不推荐的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
// 用自定义的hook 代替ueseffect
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
// 减少 change 发送请求
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次value变化后，设置一个timeout
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 负责清理上一次的定时任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
