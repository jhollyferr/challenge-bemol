import { useNavigate, Link } from "react-router-dom";
import * as S from "./styles";
import { useForm, FormActions } from "../../contexts/FormContext";
import { Theme } from "../../components/Theme";
import { useEffect, useState } from "react";
import { SelectOption } from "../../components/SelectOption";
import * as userServices from "../../services/User";
import { Toast } from "../../components/Toast";
import { toast } from "react-toastify";

export const FormStep3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if ([state.name, state.email, state.github].includes("")) {
      navigate("/");
      return;
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const createUser = async () => {
    try {
      const { cep, city, district, email, github, level, name, road } = state;

      const payload = {
        name,
        email,
        github,
        level: level === 0 ? "Iniciante" : "Programador",
        address: {
          zip_code: cep,
          road,
          district,
          city,
        },
      };

      const { data, status } = await userServices.createUser(payload);

      if (status === 201) {
        toast.success("Informações enviadas com sucesso");

        setTimeout(() => {
          dispatch({
            type: FormActions.resetData,
            payload: null,
          });
          navigate("/");
        }, 5000);
      }

      console.log(data);
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <S.Container>
        <p>Passo 3/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <S.ButtonContainer>
          <Link to="/step2" className="prevButton">
            Voltar
          </Link>
          <button onClick={createUser}>Finalizar Cadastro</button>
        </S.ButtonContainer>
        <Toast />
      </S.Container>
    </Theme>
  );
};
