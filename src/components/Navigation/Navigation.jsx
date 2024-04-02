import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <NavLink
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            flexGrow: 2,
            color: "#4f4e4d",
            fontWeight: "600",
            "&:hover": {
              color: "#55a8d9",
            },
          }}
        >
          Home
        </Typography>
      </NavLink>

      {isLoggedIn && (
        <>
          <Typography
            sx={{
              fontSize: 24,
              color: "#9e9d99",
            }}
          >
            |
          </Typography>
          <NavLink
            to="/contacts"
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                fontSize: 22,
                flexGrow: 2,
                color: "#4f4e4d",
                fontWeight: "600",
                "&:hover": {
                  color: "#55a8d9",
                },
              }}
            >
              Contacts
            </Typography>
          </NavLink>
        </>
      )}
    </Box>
  );
}