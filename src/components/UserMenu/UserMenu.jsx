import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="h7" sx={{ color: "#4f4e4d", marginRight: "5px" }}>
        Welcome,
      </Typography>
      <Typography
        variant="h7"
        sx={{ color: "#4f4e4d", fontWeight: "500", marginRight: "10px" }}
      >
        {user.name}
      </Typography>

      <Button
        type="button"
        startIcon={<LogoutIcon fontSize="small" />}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Box>
  );
}