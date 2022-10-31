import styled from "styled-components";

export const Container = styled.div<{ error: boolean }>`
  margin: 1rem 0;
  padding: 0 1rem;

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 20px 10px;
    border: 2px solid ${(props) => (props.error ? "red" : "#25cd89")};
    border-radius: 10px;
    color: #fff;
    outline: 0;
    font-size: 15px;
    background: #02044a;
  }

  span {
    display: block;
    color: red;
    margin-top: 0.5rem;
  }

  @media (max-width: 660px) {

    input {
      width: 100%;
    }
  }
`;
