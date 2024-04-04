import { Suspense } from "react";
import AppBar from "../AppBar/AppBar"; 
import { Box } from "@mui/material";

export default function Layout({ children }) { 
  return (
    <Box sx={{ backgroundColor: "white", padding: "30px" }}>
      <AppBar />
      <Suspense fallback={null}>
        {children} 
      </Suspense>
    </Box>
  );
}