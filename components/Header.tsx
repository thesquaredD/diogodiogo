import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { animated } from "react-spring";
import { languages } from "../pages/_app";

const AnimatedTypography = animated(Typography);

const Header = () => {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();

  const changeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    router.locale;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "auto",
        px: 1,
        py: 2,
        zIndex: 1,
        overflowY: "auto",
      }}
    >
      <Grid
        container
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Grid
          display={"flex"}
          flexDirection="row"
          justifyContent={"flex-start"}
          item
          xs
        >
          {router.pathname.replace(`/${i18n.language}`, "") !== "/" ? (
            <Button
              startIcon={<ArrowBackIosNewOutlined />}
              size="large"
              color="toxicGreen"
              onClick={() => router.push("/")}
            >
              {t(router.pathname.replace(`/`, ""))}
            </Button>
          ) : (
            <></>
          )}
        </Grid>
        <Grid
          display={"flex"}
          flexDirection="row"
          justifyContent={"flex-end"}
          item
          xs={2}
        >
          <Box>
            <FormControl>
              <Select
                variant="standard"
                value={i18n.language}
                onChange={changeLanguage}
              >
                <MenuItem value={"en"}>
                  <Link href={router.pathname} locale="en">
                    🇬🇧 English
                  </Link>
                </MenuItem>

                <MenuItem value={"pt"}>
                  <Link href={router.pathname} locale="pt">
                    🇵🇹 Português
                  </Link>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
