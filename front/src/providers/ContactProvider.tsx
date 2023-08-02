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
import { TUpdateContact } from "../components/modalUpdateContact/validatorUpdateContact";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
  modalUpdateContact: boolean;
  setmodalUpdateContact: React.Dispatch<React.SetStateAction<boolean>>;
  updateContact: (data: TUpdateContact) => Promise<void>;
  card: IContact | null;
  setcard: React.Dispatch<React.SetStateAction<IContact | null>>;
  modalDeleteContact: boolean;
  setmodalDeleteContact: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContact: () => Promise<void>;
  setListContactsUser: React.Dispatch<React.SetStateAction<IContact[] | null>>;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const { setmodalRegisterContact, ListContactsUser, setListContactsUser } =
    useContext(RegisterLoginContext);
  const token = localStorage.getItem("token");

  const [modalUpdateContact, setmodalUpdateContact] = useState(false);
  const [card, setcard] = useState<null | IContact>(null);
  const [modalDeleteContact, setmodalDeleteContact] = useState(false);

  const registerContact = async (data: TRegisterContact) => {
    try {
      await api.post("/contact", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setmodalRegisterContact(false);

      const responseGet = await api.get("/contact", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setListContactsUser(responseGet.data);
      toast.success(`Contato Criado com Sucesso`);
    } catch (error) {
      toast.error(`${error}`);
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
          toast.error(`${error}`);
        }
      };
      ListContacts();
    }
  }, []);

  const updateContact = async (data: TUpdateContact) => {
    const token = localStorage.getItem("token");

    try {
      await api.patch(`/contact/${card?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setmodalUpdateContact(false);
      toast.success(`Contato Atualizado com Sucesso`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const deleteContact = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await api.delete(`/contact/${card?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success(`Contato Deletado com Sucesso`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        registerContact,
        ListContactsUser,
        setmodalUpdateContact,
        modalUpdateContact,
        updateContact,
        setcard,
        card,
        setmodalDeleteContact,
        modalDeleteContact,
        deleteContact,
        setListContactsUser,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
