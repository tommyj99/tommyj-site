import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/WebsitePreview.module.css";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const WebsitePreview = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [color, setColor] = React.useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        padding: "5px",
        backgroundColor: "black",
      }}
    >
      <CardHeader className={styles.cardtext} title={props.title} />
      <a href={props.url}>
        <CardMedia
          className={styles.border}
          component="img"
          height="194"
          image={props.image}
          alt={props.altText}
        />
      </a>
      <CardContent>
        <Typography variant="body2" className={styles.cardtext}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={styles.cardtext} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={styles.cardtext}>
            {props.explanation}
          </Typography>
          <a href={props.frontEndRepo}>
            <Typography className={styles.a}>
              Link to front end in GitHub Repository
            </Typography>
          </a>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default WebsitePreview;
