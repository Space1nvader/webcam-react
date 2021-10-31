export const removeFieldPrefix = (obj, prefix) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = `${[key.replace(prefix, '')]}`;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};

export const generateFieldPrefix = (obj, prefix) => {
  const keyValues = Object.keys(obj).map((key) => {
    const newKey = `${prefix}${[key]}`;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
};
