import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import WebsitePreview from "../components/WebsitePreview";
import {
  newsSiteDescription,
  newsSiteExplanation,
  newsSiteRepo,
  cryptoSiteDescription,
  cryptoSiteExplanation,
  cryptoSiteRepo,
} from "../components/descriptions";
const Portfolio = () => {
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
      </Box>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "10vh",
        }}
      >
        <Typography
          style={{
            color: "#e5e5e5",
            marginTop: "2%",
            marginBottom: "5%",
          }}
          variant="h4"
        >
          Portfolio Projects
        </Typography>
      </Box>
      <Box
        justifyContent={"center"}
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "35px",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <WebsitePreview
          image={"/NewsSite.png"}
          url={"https://news-site-tommyj99.vercel.app/"}
          title={"News Site"}
          altText={"News Site image"}
          description={newsSiteDescription}
          explanation={newsSiteExplanation}
          frontEndRepo={newsSiteRepo}
          backEndRepo={null}
        />
        <WebsitePreview
          image={"/CryptoDashboard.png"}
          url={"https://my-crypto-dashboard.vercel.app/"}
          title={"Crypto Site"}
          altText={"Crypto Site image"}
          description={cryptoSiteDescription}
          explanation={cryptoSiteExplanation}
          frontEndRepo={cryptoSiteRepo}
          backEndRepo={null}
        />
      </Box>
    </Box>
  );
};

export default Portfolio;
