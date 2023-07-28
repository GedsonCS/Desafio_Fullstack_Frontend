import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../pages/Register/validatorRegister";

interface IRegisterloginProviderProps {
  children: ReactNode;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  phone: number;
  createdAt: Date;
}

interface IRegisterloginContext {
  login: (data: TLoginData) => Promise<void>;
  registerUser: (data: TRegisterData) => Promise<void>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const RegisterLoginContext = createContext({} as IRegisterloginContext);

export const RegisterLoginProvider = ({
  children,
}: IRegisterloginProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      };
      autoLogin();
    }
  }, []);

  const login = async (data: TLoginData) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("token", token);

      const responseGet = await api.get("/users");
      setUser(responseGet.data);
      const userDataString = JSON.stringify(responseGet.data);
      localStorage.setItem("UserData", userDataString);

      navigate("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (data: TRegisterData) => {
    try {
      const response = await api.post("/users", data);

      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterLoginContext.Provider
      value={{ login, registerUser, user, setUser }}
    >
      {children}
    </RegisterLoginContext.Provider>
  );
};
