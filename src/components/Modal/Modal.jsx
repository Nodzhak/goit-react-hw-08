import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export default function ModalContact({ contact, close }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact was deleted");
  };

  return (
    <Box>
      <Box>
        <Box
          sx={{
            fontSize: 16,
            color: "#524f4e",
            textAlign: "center",
            padding: "6px",
            marginBottom: "30px",
          }}
        >
          Are you sure you want to delete the contact
          <Typography
            sx={{
              fontSize: 18,
              color: "#524f4e",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {contact.name} ?
          </Typography>
        </Box>

        <Box
          sx={{
            display: " flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#e36f71",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
                backgroundColor: "red",
              },
            }}
            onClick={handleDelete}
          >
            Yes
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              paddingInline: "30px",
              backgroundColor: "primary.light",
              width: "100px",
              transition: "transform 600ms",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
            onClick={close}
          >
            No
          </Button>
        </Box>
      </Box>
    </Box>
  );
}