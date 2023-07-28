//import React, { useContext } from "react";
import Logo from "../../assets/Logo.svg";
import { StyledFormLogin } from "./styled";
import { StyledButtonLogin2 } from "./styled";
import { StyledButtonLogin1 } from "./styled";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loguinFormSchema } from "./loguinformSchema";
import InputLogin from "../InputLogin";
//import { LoginFormContext } from "../../Providers/LoginFormContext";

export const FormLogin = () => {
  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loguinFormSchema) });

  //const { LoginUser2 } = useContext(LoginFormContext);

  return (
    <>
      <StyledFormLogin>
        <div>
          <img src={Logo} alt="" />
        </div>
        <form noValidate>
          <h2>Login</h2>
          <InputLogin
            label="Email"
            type="email"
            placeholder="Digite aqui seu Email"
            register={register("email")}
            error={errors.email}
          />

          <InputLogin
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            register={register("password")}
            error={errors.password}
          />

          <StyledButtonLogin1 type="submit">Entrar</StyledButtonLogin1>
          <span>Ainda não possui uma conta?</span>

          <Link to="/register">
            <StyledButtonLogin2>Cadastre-se</StyledButtonLogin2>
          </Link>
        </form>
      </StyledFormLogin>
    </>
  );
};
