import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const Portfolio = () => {
  const router = useRouter();
  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <Box
        style={{
          position: "fixed",
        }}
      >
        <IconButton onClick={() => router.push("/")}>
          <HomeIcon
            style={{
              color: "firebrick",
            }}
          />
        </IconButton>
      </Box>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Typography
          style={{
            color: "firebrick",
            marginTop: "10%",
            marginBottom: "5%",
          }}
          variant="h3"
        >
          Portfolio Projects
        </Typography>
        <Button
          onClick={() => router.push("https://news-site-tommyj99.vercel.app/")}
        >
          News Page
        </Button>
      </Box>
    </Box>
  );
};

export default Portfolio;
