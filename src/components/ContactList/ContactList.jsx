import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id}>
            <Contact contact={contact} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
}