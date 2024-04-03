import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";

export default function Register() {
  const loading = useSelector(selectIsLoading);

  return (
    <Box>
      {loading && <Loader />}
      <RegistrationForm />
    </Box>
  );
}