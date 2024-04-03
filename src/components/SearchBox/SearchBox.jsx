import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilteredContacts } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        width: "290px",
        margin: "auto",
        marginTop: "10px",
        padding: "15px",
        border: "1.5px solid #a2a3a3",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "20px",
        marginBottom: "6px",
      }}
    >
      <label htmlFor={searchBoxId}>
        <Typography
          variant="h6"
          sx={{
            color: "#524f4e",
            fontSize: "12px",
            textAlign: "center",
          }}
        >
          Contact name/number:
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
          </InputAdornment>
        }
      />
    </Box>
  );
}