import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{ backgroundColor: "white", padding: "30px" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
}