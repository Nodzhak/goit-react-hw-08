import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string()
    .email("Please, enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Password is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const mailId = useId();
  const nameId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Registration was successful!");
      })
      .catch(() => {
        toast.error("Registration was failed!");
      });
    actions.resetForm();
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
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
            }}
          >
            <label htmlFor={nameId}>Username</label>
            <Field name="name" type="name">
              {({ field }) => (
                <OutlinedInput
                  id={nameId}
                  {...field}
                  placeholder="Enter your name"
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
              color: "#524f4e",
            }}
          >
            <label htmlFor={mailId}>Email</label>
            <Field type="email" name="email">
              {({ field }) => (
                <OutlinedInput
                  id={mailId}
                  {...field}
                  placeholder="Enter your email"
                />
              )}
            </Field>
            <ErrorMessage name="email" component="span" className={css.error} />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
              color: "#524f4e",
            }}
          >
            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password">
              {({ field }) => (
                <OutlinedInput
                  id={passwordId}
                  {...field}
                  placeholder="Enter password"
                />
              )}
            </Field>
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </Box>
          <Button
            variant="outlined"
            type="submit"
            sx={{ backgroundColor: "#d4eafc", 
            border: "1px solid #2a78bd " }}
          >
            Register
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}