import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <Box>
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
                color: "#e5e5e5",
              }}
            />
          </IconButton>
        </Box>
        <Box
          style={{
            // backgroundImage: `url(/blog-const.webp)`,
            // backgroundSize: "100% 100%",
            // backgroundRepeat: "no-repeat",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Typography
            style={{
              color: "#e5e5e5",
              marginTop: "3%",
            }}
            variant="h4"
          >
            About Page
          </Typography>
          <Typography
            style={{
              color: "#e5e5e5",
              marginTop: "2%",
            }}
            variant="h6"
          >
            This page is under construction!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
