import React, { useContext } from "react";
import { RegisterLoginContext } from "../../providers/RegistesLoginProvider";

function ModalDeletePerfil() {
  const { modalDeleteUser, setmodalDeleteUser, deleteUser } =
    useContext(RegisterLoginContext);

  return modalDeleteUser ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setmodalDeleteUser(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3">
            <div className="mt-2 text-center">
              <h4 className="text-lg font-medium text-gray-800">
                Deseja Realmente Deletar o perfil ?
              </h4>
            </div>
          </div>
          <div className="items-center gap-2 mt-3 sm:flex">
            <button
              className="w-full mt-2 p-2.5 flex-1 text-white  bg-red-700 rounded-md outline-none ring-offset-2 hover:bg-red-500 focus:ring-2"
              onClick={() => {
                setmodalDeleteUser(false), deleteUser();
              }}
            >
              Deletar
            </button>
            <button
              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2  hover:opacity-50"
              onClick={() => {
                setmodalDeleteUser(false);
              }}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ModalDeletePerfil;
