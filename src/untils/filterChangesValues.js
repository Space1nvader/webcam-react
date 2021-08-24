export const filterChangesValues = (values, initialValues) => {
  const filtredValues = { ...values };
  Object.keys(filtredValues).forEach((value) => {
    if (filtredValues[value] === initialValues[value]) {
      delete filtredValues[value];
    }
  });
};
