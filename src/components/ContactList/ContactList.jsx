import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {contacts.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            marginY: "20px",
            textTransform: "uppercase",
            fontSize: "16px",
            color: "orangered",
            fontWeight: "600",
          }}
        >
          We did not find any contact ...
        </Typography>
      ) : (
        <List>
          {contacts.map((contact) => (
            <ListItem key={contact.id}>
              <Contact contact={contact} />
            </ListItem>
          ))}
        </List>
      )}
    </Grid>
  );
}