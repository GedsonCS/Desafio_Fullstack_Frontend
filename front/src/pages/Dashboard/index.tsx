import { HeaderDashboard } from "../../components/HeaderDashboard";
import ModalUpdateUser from "../../components/ModalUpdateUser";
import ModalDeletePerfil from "../../components/modalDeletarPerfil";
import ModalRegisterContact from "../../components/modalResterContact";

export const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <ModalRegisterContact />
      <ModalUpdateUser />
      <ModalDeletePerfil />
    </>
  );
};
