const setSubmitForm = (id, data) => {
  if (modelData) {
    const newData = {
      ...data,
      addressId: modelData.personal.addressId,
      passportId: modelData.personal.passportId,
      descriptionId: modelData.description.descriptionId
    };
    dispatch(
      UpdateModelAction({
        id: modelData.id,
        data: newData
      })
    );
  } else {
    dispatch(CreateModelAction({ data }));
  }
};
