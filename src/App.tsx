import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import LangingPage from "./pages/LandingPage";
import theme from "./theme";
import { Container } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LangingPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
