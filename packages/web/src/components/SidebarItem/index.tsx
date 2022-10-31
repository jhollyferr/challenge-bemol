import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({
  children,
  title,
  description,
  path,
  active,
}: Props) => {
  return (
    <S.Container>
      <Link to={path}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
        <S.IconArea active={active}>{children}</S.IconArea>
        <S.Point active={active}></S.Point>
      </Link>
    </S.Container>
  );
};
