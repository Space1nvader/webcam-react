export const generateFieldNames = (obj, prefix) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = `${prefix}-${[key]}`;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};
