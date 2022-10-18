import { ChangeEvent, useEffect, useState } from "react";
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Cookies from 'js-cookie';

import { Layout } from "../components/layouts";

const ThemeChangerPage = () => {

  const [currentTheme, setCurrentTheme] = useState('light');

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;

    console.log({ selectedTheme });
    setCurrentTheme( selectedTheme );

    localStorage.setItem('theme', selectedTheme);
    Cookies.set('theme', selectedTheme);
  }

  useEffect(() => {

    console.log( 'LocalStorage ', localStorage.getItem('theme'));

  }, []);

  return (
    <Layout>
        <Card>
            <CardContent>
                <FormControl>
                    <FormLabel>Theme</FormLabel>
                    <RadioGroup
                        value={ currentTheme }
                        onChange={ onThemeChange }
                    >
                        <FormControlLabel value='light' control={ <Radio /> } label="Light" />
                        <FormControlLabel value='dark' control={ <Radio /> } label="Dark" />
                        <FormControlLabel value='custom' control={ <Radio /> } label="Custom" />
                    </RadioGroup>
                </FormControl>

                <Button
                    // onClick={ onClick }
                >
                    Request
                </Button>
            </CardContent>
        </Card>
    </Layout>
  )
}

export default ThemeChangerPage;