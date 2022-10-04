import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import LangingPage from "./pages/LandingPage";
import theme from "./theme";
import { Container } from "@mui/material";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";
import EventProvider from "./context/EventContext";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <EventProvider>
        <Container>
          <Router>
            <Routes>
              <Route path="/" element={<LangingPage />} />
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/event" element={<EventPage />} />
            </Routes>
          </Router>
        </Container>
      </EventProvider>
    </ThemeProvider>
  );
}

export default App;
