import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import * as motion from "motion/react-client";
import { Link } from "react-router";

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: "center",
        py: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
          Edwin Torres
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", mb: 4, maxWidth: 650, mx: "auto" }}
        >
          Mathematics Instructor · EdTech Developer · Data Science Enthusiast
        </Typography>

        <Typography variant="body1" sx={{ mb: 5, color: "text.secondary" }}>
          I design interactive learning experiences that make mathematics visual,
          intuitive, and engaging. My work blends technology, pedagogy, and data
          to help learners explore ideas dynamically.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/portfolio"
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/about"
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            About Me
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
}
