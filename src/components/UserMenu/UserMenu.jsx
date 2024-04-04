import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "react-modal";
import { useState } from "react";
import ModalLogOut from "../Modal/ModalLogOut";
import { logout } from "../../redux/auth/operations";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    width: "400px",
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

export default function UserMenu() {
  const userName = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch(); 

  const [modalLogoutIsOpen, setModalLogoutIsOpen] = useState(false);

  const openModalLogout = () => {
    setModalLogoutIsOpen(true);
  };

  const closeModalLogout = () => {
    setModalLogoutIsOpen(false);
  };

  const handleLogout = () => {
    openModalLogout();
  };

  const confirmLogout = () => {
    dispatch(logout()); 
    closeModalLogout();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{ color: "#4f4e4d", marginRight: "5px", fontSize: "16px" }}
      >
        Welcome,
      </Typography>
      <Typography
        sx={{
          color: "#4f4e4d",
          fontWeight: "500",
          marginRight: "10px",
          textDecorationLine: "underline",
          fontSize: "16px",
        }}
      >
        {userName}
      </Typography>

      <Button
        sx={{
          fontSize: "14px",
          border: "1px solid #2a8ac9",
          transitionDuration: "600ms",
          "&:hover": {
            backgroundColor: "primary.main",
            color: "white",
          },
        }}
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <Modal
        isOpen={modalLogoutIsOpen}
        onRequestClose={closeModalLogout}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalLogOut user={userName} close={closeModalLogout} confirmLogout={confirmLogout} /> {/* Додано передачу confirmLogout */}
      </Modal>
    </Box>
  );
}