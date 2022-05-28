import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();

  return (
    <Box
    // style={{
    //   display: "flex",
    // }}
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
          alignItems: "center",
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
          align="center"
        >
          Thomas Jacques
        </Typography>
        <Typography
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            color: "#e5e5e5",
            marginTop: "2%",
          }}
          variant="h6"
        >
          Hi, my name is Thomas and I develop software apps. Although I have
          varying amounts of experience in several different areas, my main
          focus is React front end development. I pride myself in continuously
          improving my knowledge and keeping up with the latest React based
          libraries and components. My teammates have told me I have a very high
          focus and concentration level, and that I am like a bulldog when it
          comes to solving difficult problems.
        </Typography>
        <Typography
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            color: "#e5e5e5",
            marginTop: "2%",
          }}
          variant="h6"
        >
          It is these attributes, I believe, that have contributed to some of
          the recently successful teams I have been involved with - team efforts
          that have completed such projects as a data auditing and verification
          tool, and a gps based flight scenario generator and playback
          application.
        </Typography>
        <Typography
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            color: "#e5e5e5",
            marginTop: "2%",
          }}
          variant="h6"
        >
          These same attributes have served me well in personal React projects,
          which you can view here on my portfolio page, or my personal
          endeavors, where you might find me playing solo guitar, riding
          motorcycles through twisty canyons, playing golf, or fishing. As you
          can see, I like a challenge. Hopefully I can put that attitude to work
          toward your specific goals.
        </Typography>
        <Typography
          sx={{
            marginLeft: "10px",
            marginRight: "10px",
            color: "#e5e5e5",
            marginTop: "2%",
          }}
          variant="h6"
          align="left"
        >
          By the way, this website was also developed from scratch using React
          and NextJs. Feel free to contact me at tommyj@tommyj.net
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
