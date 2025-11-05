import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import * as motion from "motion/react-client";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "🧩 Parabolic Rocket Motion",
      description:
        "An interactive visualization that animates a rocket following a quadratic path, built using Framer Motion and SVG. Demonstrates the geometric beauty of parabolas through motion and trajectory.",
      path: "/rocket",
    },
    {
      id: 2,
      title: "🧩 Quadratic Flashcards",
      description:
        "A set of swipeable, interactive flashcards that help learners review the properties of quadratic functions and vertex form through animations and active recall.",
      path: "/cards",
    },
    {
      id: 3,
      title: "🧩 Tangent Line Visualization",
      description:
        "A dynamic React-Three-Fiber visualization showing a point moving along a cubic curve. A slider lets users adjust the x-coordinate and see how the tangent line changes, making derivatives visually intuitive.",
      path: "/tangent",
    },
    {
  id: 4,
  title: "🧩 Lorenz Attractor Simulation",
  description:
    "A 3D React-Three-Fiber simulation of the Lorenz Attractor. Two particles trace diverging trajectories under nearly identical initial conditions, illustrating the 'butterfly effect.' Built with React Three Fiber, Drei, and Three.js.",
  path: "/lorenz",
},
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 600, mb: 4 }}
        >
          My Interactive Projects
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid
              key={project.id}
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{ width: "100%", display: "flex" }}
              >
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                    background: "#FAFAFA",
                    p: 1,
                    boxShadow:
                      "0 4px 10px rgba(0, 0, 0, 0.08), 0 0 20px rgba(0, 0, 0, 0.02)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow:
                        "0 6px 15px rgba(0, 0, 0, 0.12), 0 0 25px rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Box>

                  <CardActions
                    sx={{
                      justifyContent: "flex-end",
                      px: 2,
                      pb: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() =>
                        window.open(`#${project.path}`, "_blank")
                      }
                      sx={{ borderRadius: 2, textTransform: "none" }}
                    >
                      View Project ↗
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}
