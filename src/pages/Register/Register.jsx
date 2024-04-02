import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Register() {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          color: "#524f4e",
          fontSize: "20px",
          marginBottom: "10px",
        }}
      >
        Register your account
      </Typography>
      <RegistrationForm />
    </Box>
  );
}
