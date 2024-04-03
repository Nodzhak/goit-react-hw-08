import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import css from "./EditForm.module.css";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .phone("IN", "Please, enter valid number!")
    .required("Required"),
});

export default function EditForm({ contact, onSubmit, close }) {
  const initialValues = {
    name: contact.name,
    number: contact.number,
  };

  const handleSubmit = (values) => {
    onSubmit(values);
    close();
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form
          style={{
            width: "280px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            fontWeight: "600",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              color: "primary.main",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Please, make any necessary changes to the contact
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            <Field name="name">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Enter valid name"
                />
              )}
            </Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            <Field name="number">
              {({ field }) => (
                <TextField
                  {...field}
                  label="Enter valid number"
                />
              )}
            </Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </Box>

          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#cce6f0" }}
          >
            Save
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}