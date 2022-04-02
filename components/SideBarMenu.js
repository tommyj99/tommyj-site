import React from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";

const SideBarMenu = () => {
  const router = useRouter();
  const isRoute = true;
  const menuList = [
    {
      component: "About",
      page: "/about",
    },
    {
      component: "Portfolio Projects",
      page: "/portfolio",
    },
    {
      component: "Blog/How To's",
      page: "/blog",
    },
    {
      component: "Resume",
      page: "/resume",
    },
  ];
  return (
    <Paper>
      <MenuList
        style={{
          backgroundColor: "antiquewhite",
        }}
      >
        {menuList.map((item, index) => {
          return (
            <div key={index}>
              <MenuItem
                onClick={() => {
                  isRoute ? router.push(item.page) : null;
                }}
              >
                <ListItemText
                  style={{
                    color: "firebrick",
                  }}
                >
                  <Typography>{item.component}</Typography>
                </ListItemText>
              </MenuItem>
              <Divider />
            </div>
          );
        })}
      </MenuList>
    </Paper>
  );
};

export default SideBarMenu;
// onClick={router.push(item.page)}
// onClick={() => item.page
