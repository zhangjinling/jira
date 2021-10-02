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
