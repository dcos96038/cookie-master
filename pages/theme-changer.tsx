import {
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, {ChangeEvent, useState} from "react";
import Cookies from "js-cookie";
import {GetServerSideProps, NextPage} from "next";
import axios from "axios";

import {Layout} from "../components/layouts";

interface Props {
  theme: string;
}

const ThemeChangerPage: NextPage<Props> = ({theme}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    Cookies.set("theme", selectedTheme);
    setCurrentTheme(selectedTheme);
  };

  const onClick = async () => {
    await axios.get("/api/hello");
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel control={<Radio />} label="Light" value="light" />
              <FormControlLabel control={<Radio />} label="Dark" value="dark" />
              <FormControlLabel control={<Radio />} label="Custom" value="custom" />
            </RadioGroup>
          </FormControl>
          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const validThemes = ["light", "dark", "custom"];

  const cookies = req.cookies;

  const {theme = "light", name = "Diego"} = cookies;

  return {
    props: {
      theme: validThemes.includes(theme) ? theme : "dark",
      name,
    },
  };
};

export default ThemeChangerPage;
