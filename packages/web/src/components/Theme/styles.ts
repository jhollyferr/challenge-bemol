import styled from "styled-components";

export const Container = styled.div`
  background: #02044a;
  color: #fff;
  min-height: 100vh;
  padding: 0 1.5rem;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 61.25rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 660px) {
    width: 100%;
    flex-direction: column;
  }
  
`;

export const Sidebar = styled.div`
  max-width: 15.5rem;
  border-right: 1px solid #16195c;

  @media (max-width: 660px) {
    display: none;
  }


`;

export const Page = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding-left: 40px;

  @media (max-width: 660px) {
    width: 90%;
    padding: 0 1rem;
  }
`;
