import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Theme } from "../../components/Theme";
import { Toast } from "../../components/Toast";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as addressService from "../../services/Cep";
import * as S from "./styles";
import { toast } from "react-toastify";

export const FormStep2 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    console.log(state);

    if ([state.cep, state.city, state.district, state.road].includes("")) {
      toast.warning("É necessário preencher todos os campos");
      return;
    }

    navigate("/step3");
  };

  const handleCep = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value.length < 9) {
      value = value.replace(/[^0-9]/g, "");

      value = value.replace(/(\..*?)\..*/g, "$1");

      dispatch({
        payload: {
          cep: value,
        },
        type: FormActions.setAddress,
      });

      if (value.length === 8) setAddress(value);

      return value;
    }
  };

  const setAddress = async (cep: string) => {
    try {
      const { data, status } = await addressService.getAddress(
        cep.replace(/(\d{5})(\d{3})/, "$1-$2")
      );

      if (data?.erro) throw new Error("Por favor, informe um CEP válido");

      const city = data.localidade
        ? String(data.localidade) + (data.uf ? `, ${data.uf}` : "")
        : "";
      const district = data.bairro ? String(data.bairro) : "";
      const road = data.logradouro ? String(data.logradouro) : "";

      dispatch({
        payload: {
          city,
          district,
          road,
          cep,
        },
        type: FormActions.setAddress,
      });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if ([state.name, state.email, state.github].includes("")) {
      navigate("/");
      return;
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const inputList = [
    {
      name: "road",
      label: "Sua Rua",
      type: "text",
      autoFocus: false,
      action: FormActions.setRoad,
      value: state.road || "",
      placeholder: "Rua Nossa Senhora do Rosário",
    },

    {
      name: "district",
      label: "Bairro",
      type: "text",
      autoFocus: false,
      value: state.district || "",
      action: FormActions.setDistrict,
      placeholder: "Santa Luzia",
    },

    {
      name: "city",
      label: "Sua Cidade",
      type: "text",
      autoFocus: false,
      value: state.city || "",
      action: FormActions.setCity,
      placeholder: "Itacoatiara, AM",
    },
  ];

  return (
    <Theme>
      <S.Container>
        <p>Passo 2/3</p>
        <h1>Certo {state.name}, agora informe seu endereço</h1>
        <p>Preencha os campos com os dados abaixo</p>
        <hr />

        <Input
          name="cep"
          autoFocus={false}
          label="Seu CEP"
          type="number"
          value={state.cep}
          placeholder="0000000"
          maxLength={8}
          onChange={handleCep}
        />

        {inputList.map((item) => (
          <Input
            name={item.name}
            autoFocus={item.autoFocus}
            label={item.label}
            type={item.type}
            value={item.value}
            placeholder={item.placeholder}
            key={item.name}
            action={item.action}
          />
        ))}

        <S.ButtonContainer>
          <Link to="/" className="prevButton">
            Voltar
          </Link>
          <button onClick={handleNextStep}>Próximo</button>
        </S.ButtonContainer>

        <Toast />
      </S.Container>
    </Theme>
  );
};
