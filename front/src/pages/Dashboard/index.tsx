import { HeaderDashboard } from "../../components/HeaderDashboard";
import ModalUpdateUser from "../../components/ModalUpdateUser";
import CardsContacts from "../../components/cards";
import ModalDeletePerfil from "../../components/modalDeletarPerfil";
import ModalDeleteContact from "../../components/modalDeleteContact";
import ModalRegisterContact from "../../components/modalResterContact";
import ModalUpdateContact from "../../components/modalUpdateContact";

export const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <ModalRegisterContact />
      <ModalUpdateUser />
      <ModalDeletePerfil />
      <CardsContacts />
      <ModalUpdateContact />
      <ModalDeleteContact />
    </>
  );
};
