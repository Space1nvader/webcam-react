export const filterChangesValues = (values, initialValues) =>
  Object.entries(values)
    .filter(([key, value]) => value !== initialValues[key])
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
