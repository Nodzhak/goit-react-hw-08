import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import toast, { Toaster } from "react-hot-toast";

export default function ModalContact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact was deleted");
  };

  return (
    <div>
      <p>Delete?</p>
      <button type="submit" onClick={handleDelete}>
        Delete {contact.name}
      </button>
      <Toaster />
    </div>
  );
}