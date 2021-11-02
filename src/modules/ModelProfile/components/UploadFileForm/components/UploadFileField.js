import React from 'react';
import { Field } from 'formik';

const UploadFileField = (props) => {
  const { submitForm, name, children = 'Загрузить файл', setFieldValue } = props;

  const handleSubmitForm = (e) => {
    const { files } = e.target;
    const data = new FormData();
    if (files && files.length) {
      for (let i = 0; i < files.length; i += 1) {
        data.append(`${name}[]`, files[i]);
      }
      setFieldValue(name, data);
      submitForm();
    }
  };
  return (
    <Field {...props}>
      {({ field }) => (
        <>
          <input
            {...field}
            accept="image/*"
            className="uploadFile__input"
            name={name}
            id={name}
            value=""
            onChange={handleSubmitForm}
            multiple
            type="file"
          />
          <label htmlFor={name} className="uploadFile__label">
            {children}
          </label>
        </>
      )}
    </Field>
  );
};

export default UploadFileField;
