import * as React from "react";
import Joi from "joi";

type useFormType = {
  onChange: (name: unknown, value: unknown) => void;
  onFocus: (name: React.SetStateAction<string>) => () => void;
  onBlur: () => void;
  focusAt: string;
  validate: () => {
    errors: Joi.ValidationError;
    values: { key?: string };
  };
  values: { key?: string };
  validatedValues: { key?: string };
  errors: Joi.ValidationErrorItem[] | never[];
  isDirty: boolean;
  isValid: boolean;
};

const useForm = (
  initialValues: { key: string },
  schema: Joi.ObjectSchema
): useFormType => {
  const [values, setValues] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);
  const [errors, setErrors] = React.useState<
    Joi.ValidationErrorItem[] | never[]
  >([]);
  const [validatedValues, setValidatedValues] = React.useState({});
  const [focusAt, setFocusAt] = React.useState("");

  React.useEffect(() => {
    setValues({ ...initialValues });
  }, [Object.values(initialValues).join(",")]);

  React.useEffect(() => {
    if (!schema) {
      return;
    }

    if (!isDirty) {
      return;
    }

    const { error, value } = schema.validate(values, {
      abortEarly: false,
      allowUnknown: true,
    });

    setValidatedValues(value);
    setErrors(error.details);
    setIsValid(!error);
  }, [schema, values]);

  const validate = React.useCallback(() => {
    if (!schema) {
      throw Error("No schema for validate");
    }
    const { error, value } = schema.validate(values, {
      abortEarly: false,
      allowUnknown: true,
    });

    setValidatedValues(value);
    setErrors(error.details);
    setIsValid(!error);

    return { errors: error, values: value };
  }, [schema, values]);

  const onChange = React.useCallback(
    (name, value) => {
      setIsDirty(true);
      setValues({ ...values, [name]: value });
    },
    [values]
  );

  const onFocus = (name: React.SetStateAction<string>) => () => {
    setFocusAt(name);
  };

  const onBlur = () => {
    setFocusAt("");
  };

  return {
    onChange,
    onFocus,
    onBlur,
    focusAt,
    validate,
    values,
    validatedValues,
    errors,
    isDirty,
    isValid,
  };
};

export default useForm;
