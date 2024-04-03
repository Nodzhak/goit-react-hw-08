import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import useId from "@mui/material/utils/useId";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const mailId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Login was successful!");
      })
      .catch(() => {
        toast.error("Login was failed!");
      });

    actions.resetForm();
  };
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <label htmlFor={mailId}>Email</label>
            <Field type="email" name="email">
              {({ field }) => (
                <OutlinedInput
                  {...field}
                  id={mailId}
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
              gap: "6px",
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
            sx={{ backgroundColor: "#d4eafc", border: "1px solid #2a78bd " }}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}