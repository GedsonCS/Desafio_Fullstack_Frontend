import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TRegisterContact } from "../components/modalResterContact/validatorRegistercontact";
import { api } from "../services/api";
import { RegisterLoginContext } from "./RegistesLoginProvider";

interface IContactProviderProps {
  children: ReactNode;
}

interface IContact {
  id: number;
  contactName: string;
  contactEmail: string;
  contactPhone: number;
  createdAt: Date;
}

interface IContactContext {
  registerContact: (data: TRegisterContact) => Promise<void>;
  ListContactsUser: IContact[] | null;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const { setmodalRegisterContact } = useContext(RegisterLoginContext);
  const token = localStorage.getItem("token");
  const [ListContactsUser, setListContactsUser] = useState<null | IContact[]>(
    null
  );

  const registerContact = async (data: TRegisterContact) => {
    try {
      await api.post("/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setmodalRegisterContact(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const ListContacts = async () => {
        try {
          const responseGet = await api.get("/contact", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setListContactsUser(responseGet.data);

          api.defaults.headers.common.authorization = `Bearer ${token}`;
        } catch (error) {
          console.log(error);
        }
      };
      ListContacts();
    }
  }, [ListContactsUser]);
  return (
    <ContactContext.Provider value={{ registerContact, ListContactsUser }}>
      {children}
    </ContactContext.Provider>
  );
};
