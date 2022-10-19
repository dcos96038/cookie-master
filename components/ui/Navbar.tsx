import {AppBar, IconButton, Link, Toolbar, Typography} from "@mui/material";
import React from "react";
import {MenuOutlined} from "@mui/icons-material";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <IconButton edge="start" size="large">
          <MenuOutlined />
        </IconButton>

        <NextLink passHref href="/">
          <Link underline="none">
            <Typography color="white" variant="h6">
              Cookie Master
            </Typography>
          </Link>
        </NextLink>

        <div style={{flex: 1}} />

        <NextLink passHref href="/theme-changer">
          <Link underline="none">
            <Typography color="white" variant="h6">
              Cambiar Tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
