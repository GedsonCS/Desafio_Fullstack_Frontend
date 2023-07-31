import { useContext } from "react";
import { ContactContext } from "../../providers/ContactProvider";

function CardsContacts() {
  const { ListContactsUser } = useContext(ContactContext);

  return (
    <div className="relative mt-12">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ListContactsUser?.map((item) => (
          <li
            key={item.id}
            className="bg-white space-y-3 p-4 border rounded-lg"
          >
            <h4 className="text-lg text-gray-800 font-semibold">
              {item.contactName}
            </h4>
            <p>{item.contactEmail}</p>
            <p>{item.contactPhone}</p>
            <p
              className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm m-1"
              onClick={() => {}}
            >
              Editar Contato
            </p>
            <p
              className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-red-700 rounded-lg hover:bg-red-500 active:bg-red-500 md:text-sm m-1"
              onClick={() => {}}
            >
              Deletar Contato
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardsContacts;
