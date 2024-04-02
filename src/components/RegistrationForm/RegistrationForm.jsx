import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useId } from "react";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const mailId = useId();
  const nameId = useId();
  const passwordId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        marginTop: "10px",
        // backgroundColor: "#f2f1f0",

        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
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
              gap: "4px",
              width: "100%",
            }}
          >
            <label
              htmlFor={nameId}
            >
              Username
            </label>
            <Field name="name">
              {({ field }) => (
                <TextField
                  id={nameId}
                  sx={{
                  }}
                  {...field}

                  label="Enter your name"
                  defaultValue="Default Value"
                />
              )}
            </Field>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            <label
              htmlFor={mailId}
            >
              Email
            </label>
            <Field type="email" name="email">
              {({ field }) => (
                <TextField
                  id={mailId}
                  sx={{
                  }}
                  {...field}

                  label="Enter your email"
                  defaultValue="Default Value"
                />
              )}
            </Field>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              width: "100%",
            }}
          >
            <label
              htmlFor={passwordId}
            >
              Password
            </label>
            <Field type="password" name="password">
              {({ field }) => (
                <TextField
                  id={passwordId}
                  sx={{
                  }}
                  {...field}
                  label="Enter password"
                  defaultValue="Default Value"
                />
              )}
            </Field>
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