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
              display: "block",
              color: "#e5e5e5",
              marginTop: "2%",
            }}
            variant="h6"
          >
            Hi, my name is Thomas Jacques and I am a software developer.
            Although I have varying amounts of experience in several different
            areas, my main focus is React front end development. I pride myself
            in continuously improving my knowledge and keeping up with the
            latest React based libraries and components. My teammates have told
            me I have a very high focus and concentration level and I am like a
            bulldog on a porkchop when it comes to solving difficult problems.
          </Typography>
          <cr />
          <Typography
            style={{
              display: "block",
              color: "#e5e5e5",
              marginTop: "2%",
            }}
            variant="h6"
          >
            I believe it is this focus and concentration that has contributed to
            some of the recently successful teams I have been involved with -
            team efforts that have completed such projects as a data auditing
            and verification tool and a gps based flight scenario generator.
          </Typography>
          <cr />
          <Typography
            style={{
              display: "block",
              color: "#e5e5e5",
              marginTop: "2%",
            }}
            variant="h6"
          >
            These same attributes have served me well in personal React
            projects, which you can view on my portfolio page, and personal
            recreational endeavors, such as becoming an expert guitar player,
            riding motorcycles, or playing golf.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
