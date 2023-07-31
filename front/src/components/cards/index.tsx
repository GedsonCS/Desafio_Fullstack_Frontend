import { useContext } from "react";
import { ContactContext } from "../../providers/ContactProvider";

function CardsContacts() {
  const {
    ListContactsUser,
    setcard,
    setmodalUpdateContact,
    setmodalDeleteContact,
  } = useContext(ContactContext);

  return (
    <div className="relative mt-12">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ListContactsUser?.map((contact) => (
          <li
            key={contact.id}
            className="bg-white space-y-3 p-4 border rounded-lg"
          >
            <h4 className="text-lg text-gray-800 font-semibold">
              {contact.contactName}
            </h4>
            <p>{contact.contactEmail}</p>
            <p>{contact.contactPhone}</p>
            <div className=" flex">
              <p
                className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm m-1"
                onClick={() => {
                  setcard(contact), setmodalUpdateContact(true);
                }}
              >
                Editar Contato
              </p>
              <p
                className=" cursor-pointer block px-4 py-2 text-center text-white duration-150 font-medium bg-red-700 rounded-lg hover:bg-red-500 active:bg-red-500 md:text-sm m-1"
                onClick={() => {
                  setmodalDeleteContact(true), setcard(contact);
                }}
              >
                Deletar Contato
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardsContacts;
