import React from "react";
import {
  Container,
  Typography,
  Card,
  Stack,
  Avatar,
} from "@mui/material";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card
          elevation={4}
          sx={{
            borderRadius: 3,
            p: 4,
            background: "#FAFAFA",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={3}
            sx={{ textAlign: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Avatar
                src="https://avatars.githubusercontent.com/u/64108926?v=4"
                alt="Edwin Torres"
                sx={{ width: 115, height: 115 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Typography variant="h4"   fontWeight={600}>
                About Me
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 650 }}
              >
                I’m a mathematics instructor and EdTech developer passionate about
                making complex concepts accessible through interactive technology.
                With master’s degrees in both Mathematics and Computer Science,
                I build dynamic tools that help students visualize functions,
                understand calculus, and connect theory with application.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 650 }}
              >
                My experience teaching mathematics at both the high school and
                community college levels has shaped how I approach educational design
                by emphasizing clarity, data-driven insight, and interactivity. I am
                currently exploring how web technologies such as React, Three.js, and
                Framer Motion can create engaging and visual learning experiences in
                mathematics.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography variant="body2" sx={{ color: "text.disabled", mt: 2 }}>
                📍 Based in Texas · Open to remote EdTech collaborations
              </Typography>
            </motion.div>
          </Stack>
        </Card>
      </motion.div>
    </Container>
  );
}
