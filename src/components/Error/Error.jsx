import { Box, Typography } from "@mui/material";

export default function Error({ children }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginY: "20px",
        textTransform: "uppercase",
        fontSize: "18px",
      }}
    >
      <Typography sx={{ margin: "0", color: "orangered" }}>
        <b>{children}</b>
      </Typography>
    </Box>
  );
}