import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

const Blog = () => {
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
          backgroundImage: `url(/blog-const.webp)`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
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
            marginTop: "5%",
          }}
          variant="h4"
        >
          Blog/How To's
        </Typography>
        <Typography
          style={{
            color: "firebrick",
            marginTop: "2%",
          }}
          variant="h6"
        >
          This page is under construction!
        </Typography>
      </Box>
    </Box>
  );
};

export default Blog;
