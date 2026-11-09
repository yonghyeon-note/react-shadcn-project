import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

import RootLayout from "./pages/layout.tsx";
import App from "./pages";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import CreateTopic from "./pages/topics/create.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="topics/create" element={<CreateTopic />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
