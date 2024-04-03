import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export default function ModalLogOut({ user, close }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
            fontFamily: "",
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              color: "#524f4e",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {user}
          </Typography>
          are you sure you want to logout?
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
            onClick={handleLogout}
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