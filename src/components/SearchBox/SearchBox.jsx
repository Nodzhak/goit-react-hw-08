import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilteredContacts } from "../../redux/contacts/filtersSlice";
import { selectNameFilter } from "../../redux/contacts/selectors";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";

export default function SearchContact() {
  const searchBoxId = useId();
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectNameFilter);

  const valueChange = (e) => {
    dispatch(changeFilteredContacts(e.target.value));
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundColor: "#f2f1f0",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <label htmlFor={searchBoxId}>
        <Typography
          variant="h6"
          sx={{
            color: "#524f4e",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          Find contacts by name:
        </Typography>
      </label>
      <Input
        type="text"
        name="searchbox"
        id={searchBoxId}
        value={valueFilter}
        onChange={valueChange}
        startAdornment={
          <InputAdornment position="start">
            <PersonSearchOutlinedIcon />
          </InputAdornment>
        }
      />
    </Box>
  );
}