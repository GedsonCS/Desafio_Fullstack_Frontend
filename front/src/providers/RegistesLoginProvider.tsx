import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "../pages/Register/validatorRegister";
import { TUptadeUser } from "../components/ModalUpdateUser/validatorUpdateUser";

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
  Logout: () => Promise<void>;
  setmodalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  modalUpdateUser: boolean;
  setmodalDeleteUser: React.Dispatch<React.SetStateAction<boolean>>;
  modalDeleteUser: boolean;
  updateUser: (data: TUptadeUser) => Promise<void>;
  deleteUser: () => Promise<void>;
  modalRegisterContact: boolean;
  setmodalRegisterContact: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterLoginContext = createContext({} as IRegisterloginContext);

export const RegisterLoginProvider = ({
  children,
}: IRegisterloginProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [modalUpdateUser, setmodalUpdateUser] = useState(false);
  const [modalDeleteUser, setmodalDeleteUser] = useState(false);
  const [modalRegisterContact, setmodalRegisterContact] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const autoLogin = async () => {
        try {
          const responseGet = await api.get("/users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(responseGet.data);
          api.defaults.headers.common.authorization = `Bearer ${token}`;

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

  const Logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("UserData");
    navigate("/");
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

  const updateUser = async (data: TUptadeUser) => {
    const token = localStorage.getItem("token");

    try {
      const response = await api.patch(`/users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await api.delete(`/users/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      localStorage.removeItem("token");
      localStorage.removeItem("UserData");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterLoginContext.Provider
      value={{
        login,
        registerUser,
        user,
        setUser,
        Logout,
        setmodalUpdateUser,
        modalUpdateUser,
        modalDeleteUser,
        setmodalDeleteUser,
        updateUser,
        deleteUser,
        modalRegisterContact,
        setmodalRegisterContact,
      }}
    >
      {children}
    </RegisterLoginContext.Provider>
  );
};
