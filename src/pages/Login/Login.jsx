import LoginForm from "../../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../../components/Loader/Loader";

export default function Login() {
  const loading = useSelector(selectIsLoading);

  return (
    <Box>
      <LoginForm />
      <Box
        sx={{
          marginTop: "10px",
          padding: "15px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
        >
          Don`t have account?
        </Typography>
        <Link
          component="button"
          variant="body1"
          underline="none"
          to="/register"
          style={{
            display: "flex",
            gap: "10px",
            textDecoration: "none",
            textTransform: "uppercase",
            color: "#2a8ac9",
          }}
        >
          <ArrowCircleRightSharpIcon />
          Register
        </Link>
      </Box>
      {loading && <Loader />}
    </Box>
  );
}