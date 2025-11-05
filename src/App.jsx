import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router"; // ✅ fixed to use react-router-dom
import { AppBar, Toolbar, Button } from "@mui/material";

import Home from "./components/projects/Home";
import About from "./components/About";
import QuadraticFlashcards from "./components/projects/Cards";
import MotionPath from "./components/projects/Rocket";
import Portfolio from "./components/Portfolio"; // ✅ new
import ShowTangent from "./components/projects/ShowTangent";
import Lorenz from "./components/projects/Lorenz";


// ✅ Layout wrapper that hides nav on specific routes
function Layout({ children }) {
  const location = useLocation();
  const hideNavOn = ["/cards", "/rocket", "/lorenz"]; // list of routes that should NOT show nav
  const showNav = !hideNavOn.includes(location.pathname);

  return (
    <>
      {showNav && (
      <AppBar
  position="sticky"
  elevation={0}
  sx={{
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "black",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  }}
>
  <Toolbar sx={{ gap: 3, justifyContent: "center" }}>
    {[
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Portfolio", to: "/portfolio" },
    ].map(link => (
      <Button
        key={link.to}
        component={Link}
        to={link.to}
        sx={{
          fontWeight: 500,
          textTransform: "none",
          color: "text.primary",
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            color: "primary.main",
          },
        }}
      >
        {link.label}
      </Button>
    ))}
  </Toolbar>
</AppBar>

      )}
      {children}
    </>
  );
}

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} /> {/* ✅ new */}
          <Route path="/cards" element={<QuadraticFlashcards />} />
          <Route path="/rocket" element={<MotionPath />} />
          <Route path="/tangent" element={<ShowTangent />} />
           <Route path="/lorenz" element={<Lorenz />} />


      {/* Using path="*"" means "match anything" */}
      <Route path="*" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}
