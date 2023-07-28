import styled from "styled-components";

export const StyledFormLogin = styled.section`
  font-family: "Inter", sans-serif;
  width: 369px;
  height: 502px;
  max-width: 95%;
  margin: 0 auto;
  padding: 5% 0 0 0;

  div {
    display: flex;
    justify-content: center;
  }

  form {
    background-color: #212529;
    display: flex;
    flex-direction: column;
    margin: 2rem 0 0 0;
    border-radius: 5px;
    padding: 1rem 0 0 0;

    h2 {
      color: #f8f9fa;
      text-align: center;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    fieldset {
      border: none;
      display: flex;
      flex-direction: column;
    }

    label {
      color: #f8f9fa;
      margin: 0 0 0.5rem 0;
      font-size: 0.75rem;
    }

    input {
      padding: 10px;
      background-color: #343b41;
      color: #f8f9fa;
      border: none;
    }
  }

  span {
    color: #868e96;
    align-self: center;
  }
`;
export const StyledButtonLogin1 = styled.button`
  background-color: #ff577f;
  font-family: "Inter", sans-serif;

  width: 341px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #f8f9fa;
  align-self: center;
  margin: 1rem 0 2rem 0;
  max-width: 92%;
  cursor: pointer;
`;

export const StyledButtonLogin2 = styled.button`
  background-color: #868e96;
  font-family: "Inter", sans-serif;

  width: 341px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #f8f9fa;
  align-self: center;
  margin: 1rem 0 3rem 1rem;
  max-width: 92%;
  cursor: pointer;
`;
