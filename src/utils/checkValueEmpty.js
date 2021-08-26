export const checkValueEmpty = (values = {}, initial) =>
  Object.keys(values).length ? values : initial;
