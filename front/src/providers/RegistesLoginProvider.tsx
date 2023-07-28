import { ReactNode, createContext, useEffect } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IRegisterloginProviderProps {
  children: ReactNode;
}

interface IRegisterloginContext {
  login: (data: TLoginData) => Promise<void>;
}

export const RegisterLoginContext = createContext({} as IRegisterloginContext);

export const RegisterLoginProvider = ({
  children,
}: IRegisterloginProviderProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token:token");
    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }, []);

  const login = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);

      const responseGet = await api.get("/users");
      const userDataString = JSON.stringify(responseGet.data);
      localStorage.setItem("UserData", userDataString);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <RegisterLoginContext.Provider value={{ login }}>
      {children}
    </RegisterLoginContext.Provider>
  );
};
