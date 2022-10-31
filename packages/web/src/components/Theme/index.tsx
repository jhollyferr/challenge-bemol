import { ReactNode } from "react";
import { Header } from "../Header";
import { SidebarItem } from "../SidebarItem";
import { FaUserAstronaut, FaGraduationCap, FaHome } from "react-icons/fa";
import {} from "react-icons/fc";
import * as S from "./styles";
import { useForm } from "../../contexts/FormContext";

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <S.Container>
      <S.Area>
        <Header />
        <S.Steps>
          <S.Sidebar>
            <SidebarItem
              title="Pessoal"
              description="Se identifique"
              path="/"
              active={state.currentStep === 1}
            >
              <FaUserAstronaut />
            </SidebarItem>

            <SidebarItem
              title="Endereço"
              description="Onde você mora"
              path="/step2"
              active={state.currentStep === 2}
            >
              <FaHome />
            </SidebarItem>

            <SidebarItem
              title="Profissonal"
              description="Seu nível"
              path="/step3"
              active={state.currentStep === 3}
            >
              <FaGraduationCap />
            </SidebarItem>
          </S.Sidebar>
          <S.Page>{children}</S.Page>
        </S.Steps>
      </S.Area>
    </S.Container>
  );
};
