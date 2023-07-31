import { useContext } from "react";
import { ContactContext } from "../../providers/ContactProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TUpdateContact, schemaUpdateContact } from "./validatorUpdateContact";

function ModalUpdateContact() {
  const { setmodalUpdateContact, modalUpdateContact, updateContact } =
    useContext(ContactContext);

  const { register, handleSubmit } = useForm<TUpdateContact>({
    resolver: zodResolver(schemaUpdateContact),
  });

  return modalUpdateContact ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setmodalUpdateContact(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
          <div className="flex items-center justify-between p-4 border-b">
            <h4 className="text-lg font-medium text-gray-800">
              Preencha os dados para atualizar Contato
            </h4>
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setmodalUpdateContact(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <form
            onSubmit={handleSubmit(updateContact)}
            className="space-y-5 m-2"
          >
            <div>
              <label className="font-medium">Nome</label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...register("contactName")}
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...register("contactEmail")}
              />
            </div>

            <div>
              <label className="font-medium">Telefone</label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                {...register("contactPhone")}
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
            >
              Atualizar
            </button>
            <button
              className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
              onClick={() => setmodalUpdateContact(false)}
            >
              Voltar
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ModalUpdateContact;
