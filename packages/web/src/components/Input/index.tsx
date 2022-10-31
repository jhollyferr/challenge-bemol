import { ChangeEvent, useState, KeyboardEvent } from "react";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as S from "./styles";

type Props = {
  name: string;
  label: string;
  type: string;
  autoFocus: boolean;
  value: string;
  action?: FormActions;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

export const Input = ({
  name,
  label,
  type,
  autoFocus,
  value,
  action,
  placeholder,
  onChange,
  maxLength,
}: Props) => {
  const { dispatch } = useForm();

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const validators = [
    {
      expression: (type: string) => type === "email",
      action: (value: string) =>
        validate(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, value),
      message: "Este campo deve ser um e-mail",
    },

    {
      expression: (type: string) => type === "url",
      action: (value: string) =>
        validate(
          /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/,
          value
        ),
      message: "Este campo deve ser uma url",
    },

    {
      expression: (type: string) => type === "text",
      action: (value: string) =>
        validate(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, value),
      message: "Este campo deve ser texto",
    },

    {
      expression: (type: string) => type === "number",
      action: (value: string) => validate(/[^0-9]/g, value),
      message: "Este campo deve ser um número",
    },
  ];

  const validate = (regex: RegExp, value: string) =>
    regex.test(value) ? setError(false) : setError(true);

  const handleInputValue = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    for (const validator of validators) {
      if (validator.expression(type)) {
        validator.action(value);
        setMessage(validator.message);
      }
    }

    dispatch({
      type: action as FormActions,
      payload: value,
    });
  };

  return (
    <S.Container error={error}>
      <label>{label}</label>
      <input
        maxLength={maxLength}
        name={name}
        type={!(type === "number") ? type : "text"}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange ? onChange : handleInputValue}
        placeholder={placeholder}
      />
      {error && <span>{message}</span>}
    </S.Container>
  );
};
