import ModalContact from "../../components/Modal/Modal";
import Modal from "react-modal";
import { useState } from "react";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import EditForm from "../EditForm/EditForm";

const theme = createTheme({
  palette: {
    ochre: {
      main: "#e36f71",
    },
    edit: {
      main: "#188c25",
    },
  },
});

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "400px",
    heigth: "400px",
    borderRadius: "15px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
Modal.setAppElement("#root");

export default function Contact({ contact }) {
  const [modalContactIsOpen, setModalContactIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [values, setValues] = useState({});
  const dispatch = useDispatch();

  const openModalContact = () => {
    setModalContactIsOpen(true);
  };

  const openModalEdit = () => {
    setModalEditIsOpen(true);
  };

  const closeModalContact = () => {
    setModalContactIsOpen(false);
  };

  const closeModalEdit = () => {
    setModalEditIsOpen(false);
  };

  const handleDelete = () => {
    openModalContact();
  };

  const handleSubmit = (values) => {
    setValues(values);
    dispatch(
      updateContact({
        ...values,
        id: contact.id,
      })
    )
      .unwrap()
      .then(onClose);
  };

  const onClose = () => {
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #a2a3a3",
        width: "300px",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ width: "200px" }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#524f4e",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
            }}
          >
            <PersonIcon />
            {contact.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#524f4e",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <PhoneIcon />
            {contact.number}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          type="button"
          onClick={() => {
            setIsEditing(true);
            setIsVisible(false);

            openModalEdit();
          }}
          color="edit"
          sx={{
            height: "35px",
            alignItems: "stretch",
            marginRight: "10px",
          }}
        >
          Edit
        </Button>

        <Button
          variant="outlined"
          type="button"
          onClick={handleDelete}
          color="ochre"
          sx={{
            height: "35px",
            alignItems: "stretch",
          }}
        >
          Delete
        </Button>

        <Modal
          isOpen={modalContactIsOpen}
          onRequestClose={closeModalContact}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {<ModalContact contact={contact} close={closeModalContact} />}
        </Modal>

        <Modal
          isOpen={modalEditIsOpen}
          onRequestClose={closeModalEdit}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <EditForm
            contact={contact}
            onSubmit={handleSubmit}
            close={closeModalEdit}
          />
        </Modal>
      </ThemeProvider>
    </Box>
  );
}