import { ReactNode, createContext } from "react";
import { TRegisterContact } from "../components/modalResterContact/validatorRegistercontact";
import { api } from "../services/api";

interface IContactProviderProps {
  children: ReactNode;
}

// interface IContact {
//   id: number;
//   name: string;
//   email: string;
//   phone: number;
//   createdAt: Date;
// }

interface IContactContext {
  registerContact: (data: TRegisterContact) => Promise<void>;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const token = localStorage.getItem("token");

  const registerContact = async (data: TRegisterContact) => {
    console.log(data);
    try {
      const response = await api.post("/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider value={{ registerContact }}>
      {children}
    </ContactContext.Provider>
  );
};
