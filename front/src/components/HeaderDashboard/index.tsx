import { useContext } from "react";
import { RegisterLoginContext } from "../../providers/RegistesLoginProvider";

export const HeaderDashboard = () => {
  const { Logout, user, setmodalUpdateUser, setmodalDeleteUser } =
    useContext(RegisterLoginContext);

  const { setmodalRegisterContact } = useContext(RegisterLoginContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between py-4 border-b md:flex">
        <div>
          <h3 className="text-gray-800 text-2xl font-bold">{user?.name}</h3>
        </div>
        <div>
          <h3 className="text-gray-800 text-2xl font-bold">
            Tel.: {user?.phone}
          </h3>
        </div>
        <div>
          <h3 className="text-gray-800 text-2xl font-bold">
            Email: {user?.email}
          </h3>
        </div>
        <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
          <p
            className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium  bg-green-600 rounded-lg hover:bg-green-400 active:bg-indigo-700 md:text-sm m-1"
            onClick={() => {
              setmodalRegisterContact(true), console.log("clicou");
            }}
          >
            Cadastrar contato
          </p>
          <p
            className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm m-1"
            onClick={() => setmodalUpdateUser(true)}
          >
            Editar Perfil
          </p>
          <p
            className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-red-700 rounded-lg hover:bg-red-500 active:bg-red-500 md:text-sm m-1"
            onClick={() => setmodalDeleteUser(true)}
          >
            Deletar Perfil
          </p>
          <p
            className="block px-4 py-2 mt-3 text-center text-gray-700 duration-150 font-medium rounded-lg border hover:bg-gray-50 active:bg-gray-100 sm:mt-0 md:text-sm cursor-pointer"
            onClick={Logout}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};
