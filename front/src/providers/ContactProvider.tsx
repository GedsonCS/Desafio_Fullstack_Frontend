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
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
  const { setmodalRegisterContact } = useContext(RegisterLoginContext);
  const token = localStorage.getItem("token");
  const [ListContactsUser, setListContactsUser] = useState<null | IContact[]>(
    null
  );
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

  const updateContact = async (data: TUpdateContact) => {
    const token = localStorage.getItem("token");

    try {
      await api.patch(`/contact/${card?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async () => {
    const token = localStorage.getItem("token");

    try {
      await api.delete(`/contact/${card?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
