import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AuthNav() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <NavLink
        to="/register"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: "#737270",
            fontWeight: "600",
            transitionDuration: "600ms",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          Register
        </Typography>
      </NavLink>
      <Typography
        sx={{
          fontSize: 20,
          color: "#9e9d99",
        }}
      >
        |
      </Typography>
      <NavLink
        to="/login"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: "#737270",
            fontWeight: "600",
            transitionDuration: "600ms",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          LogIn
        </Typography>
      </NavLink>
    </Box>
  );
}

