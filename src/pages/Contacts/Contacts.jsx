import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import Error from "../../components/Error/Error";
import { selectError } from "../../redux/contacts/selectors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <Typography
        sx={{
          color: "#524f4e",
          fontSize: "22px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          textTransform: "uppercase",
        }}
      >
        Phonebook
      </Typography>
      {loading && <Loader />}
      <ContactForm />

      <SearchBox />

      {error ? <Error>Error! </Error> : <ContactList />}
    </Box>
  );
}