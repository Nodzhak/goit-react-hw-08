import Box from "@mui/material/Box";
import { Backdrop } from "@mui/material";

export default function Loader() {
  return (
    <Backdrop open={true} style={{ zIndex: 9999, color: "#fff" }}>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1",
        }}
      >
      </Box>
    </Backdrop>
  );
}