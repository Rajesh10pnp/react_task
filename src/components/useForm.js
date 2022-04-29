import React, { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.persist();
    let name = e.target.name;
    let val = e.target.value;
  };

  const validate =(e, name, val);
    setValues({
        ...values, [name]:val,
    })
  return <div>
      values,
      errors,
      handleChange
  </div>;
};

export default useForm;
