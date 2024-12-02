'use client';

import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import "../layouts/css/button.css";
import { useRouter } from "next/navigation";

export default function Index() {
  // Define the titleHead variable
  const titleHead = "Hi! Welcome to Ripo Bet";
  
  const router = useRouter();  

  const handleLogin = () => {
    router.push('/login'); 
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        padding: 0,
      }}
    >
      <Box
        component="main"
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          flex: 1,
        }}
      >
        {/* Use the titleHead variable */}
        <Typography variant="h5">{titleHead}</Typography>

        <Box
          component="a"
          href="https://melhorpeixe.com/rupiah-login/alamsemesta/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          sx={{
            display: "block",
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="https://pub-f79bf3e7a717474280cd8cf13e5414a0.r2.dev/toto-slot-resmi.jpg"
            alt="Rupiahtoto"
            sx={{
              width: "100%",
              maxWidth: 350,
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Box>

        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          sx={{ mb: 3 }}
        >
          <Grid item>
            <Box className="button-snowfall">
            <Button
                onClick={handleLogin}
                variant="contained"
                sx={{
                    fontWeight: "bold",
                    px: 3,
                    py: 1,
                    background: "black",
                    color: "#fff",
                    "&:hover": {
                    background: "#333",
                    },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                LOGIN Ripo Bet
            </Button>
              {/* Snowfall */}
              <Box className="snowfall"></Box>
            </Box>
            </Grid>

            <Grid item >
                <Box className="gradient-button">
                    <Button
                        onClick={() => router.push("/login")}
                        sx={{backgroundColor: '#1c1f2b'}}
                    >
                        DAFTAR Ripo Bet
                    </Button>
                </Box>
            </Grid>
        </Grid>

        <Typography variant="body1" sx={{ mb: 4, maxWidth: "500px" }}>
          Happies With Ripo Bet makes it easier to access modern digital services.
        </Typography>

        <Typography variant="caption" component="span">
          Next.js © 2024 | Powered by{" "}
          <strong>
            <Link href="https://nextjs.org/">Next.js</Link>
          </strong>
        </Typography>
      </Box>
    </Container>
  );
}
