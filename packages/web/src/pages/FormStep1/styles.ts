import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 1rem;
    color: #b8b8d4;
  }

  h1 {
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background: #16195c;
    margin: 30px 0;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;

  button {
    background: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
  }
`;