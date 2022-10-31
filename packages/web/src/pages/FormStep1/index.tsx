import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Theme } from "../../components/Theme";
import { Toast } from "../../components/Toast";
import { useForm, FormActions } from "../../contexts/FormContext";
import { toast } from "react-toastify";
import * as S from "./styles";

export const FormStep1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if ([state.name, state.email, state.github].includes("")) {
      toast.warning("Todos os campos devem ser preenchidos!");
      return;
    }

    navigate("/step2");
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const inputList = [
    {
      name: "name",
      label: "Seu Nome",
      type: "text",
      autoFocus: false,
      value: state.name,
      action: FormActions.setName,
      placeholder: "João André",
    },

    {
      name: "email",
      label: "Seu e-mail",
      type: "email",
      autoFocus: false,
      value: state.email,
      action: FormActions.setEmail,
      placeholder: "nickname@mail.com",
    },

    {
      name: "github",
      label: "Link do GitHub",
      type: "url",
      autoFocus: false,
      value: state.github,
      action: FormActions.setGithub,
      placeholder: "https://github.com/username",
    },
  ];

  return (
    <Theme>
      <S.Container>
        <p>Passo 1/3</p>
        <h1>Opa! Vamos começar ?</h1>
        <p>Preencha os campos com os dados abaixo</p>
        <hr />

        {inputList.map((item) => (
          <Input
            name={item.name}
            action={item.action}
            autoFocus={item.autoFocus}
            label={item.label}
            type={item.type}
            value={item.value}
            placeholder={item.placeholder}
            key={item.type}
          />
        ))}

        <S.ButtonContainer>
          <button onClick={handleNextStep}>Próximo</button>
        </S.ButtonContainer>
        <Toast />
      </S.Container>
    </Theme>
  );
};
