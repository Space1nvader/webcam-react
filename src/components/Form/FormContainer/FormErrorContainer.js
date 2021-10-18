import { useEffect } from 'react';

export const FormErrorContainer = ({ setErrors, serverErrors, children }) => {
  useEffect(() => {
    setErrors(serverErrors);
  }, [serverErrors, setErrors]);

  return children;
};
