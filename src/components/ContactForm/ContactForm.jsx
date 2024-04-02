import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import toast, { Toaster } from "react-hot-toast";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .phone("IN", "Please, enter valid number!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    toast.success("Contact was added!");
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        {({ isValid, dirty }) => (
          <Form
            style={{
              border: "1.5px solid #a2a3a3",
              borderRadius: "5px",
              width: "280px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
              color: "#524f4e",
              fontWeight: "600",
              backgroundColor: "#d5d9db",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "100%",
              }}
            >
              <label htmlFor={nameId}>Name</label>
              <Field name="name">
                {({ field }) => (
                  <TextField
                    sx={{
                      backgroundColor: "#e8eced",
                      border: "1px solid #edf9fc",
                      borderRadius: "5px",
                    }}
                    {...field}
                    id={nameId}
                    label="Enter valid name"
                    value={field.value}
                  />
                )}
              </Field>
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "100%",
              }}
            >
              <label htmlFor={phoneId}>Number</label>
              <Field name="number">
                {({ field }) => (
                  <TextField
                    sx={{
                      backgroundColor: "#e8eced",
                      border: "1px solid #edf9fc",
                      borderRadius: "5px",
                    }}
                    {...field}
                    id={phoneId}
                    label={"Enter valid number"}
                    value={field.value}
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
              disabled={!dirty || !isValid}
            >
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </Box>
  );
}