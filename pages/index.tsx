import CallEndOutlinedIcon from "@mui/icons-material/CallEndOutlined";
import { Box, Button, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import { AnimatedGradientTypography } from "../components/AnimatedGradientTypography";
import { InfiniteLooper } from "../components/InfiniteLooper";

import { FavoriteBorderOutlined } from "@mui/icons-material";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useRouter } from "next/router";
import React from "react";

const colors = [
  "#32ff17",
  "#00ffa2",
  "#4d8bff",
  "#ff17b2",
  "#fd478d",
  "#ff174d",
  "#b76bff",
  "#00ffe5",
  "#32ff17",
];

const names = [
  "ディオゴ",
  "ⴷⵉⵓⴳⵓ",
  "迪奥戈",
  "ديوغو",
  "דיוגו",
  "Диого",
  "Ντιόγκο",
];

const buttons: {
  label: string;
  icon: React.ReactNode;
  color:
    | "inherit"
    | "toxicGreen"
    | "screamPink"
    | "socialBlue"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  hyperlink?: string;
}[] = [
  { label: "portfolio", icon: <FavoriteBorderOutlined />, color: "toxicGreen" },
  { label: "contact", icon: <CallEndOutlinedIcon />, color: "screamPink" },
  {
    label: "linkedin",
    icon: <LinkedInIcon />,
    color: "socialBlue",
    hyperlink: "https://www.linkedin.com/in/diogo-diogo/",
  },
];

const Landing = () => {
  const { t } = useTranslation("common");
  const route = useRouter();

  return (
    <Stack
      width="100%"
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      spacing={3}
    >
      <Box width={"90%"} maxWidth="600px" display="flex" className="looper_box">
        <InfiniteLooper speed={6} direction="right">
          {names.map((language, key) => (
            <Box key={key} py={0}>
              <Typography
                sx={{ px: 2 }}
                fontFamily={"Roboto"}
                color={colors[key]}
                variant="h5"
              >
                {language}
              </Typography>
            </Box>
          ))}
        </InfiniteLooper>
      </Box>
      <AnimatedGradientTypography fontSize={"10vw"} fontWeight={500}>
        <b>Diogo Diogo.</b>
      </AnimatedGradientTypography>
      <Box display={"flex"} flexDirection="column" justifyContent="inherit">
        <Typography alignSelf={"center"} variant="h4" fontWeight={200}>
          {t("subtitle")}
        </Typography>
      </Box>
      <Stack py={2} spacing={2} direction={"row"}>
        {buttons.map((button, key) => (
          <Button
            href={button.hyperlink}
            key={key}
            startIcon={button.icon}
            size="large"
            onClick={
              button.hyperlink ? () => "" : () => route.push(button.label)
            }
            fullWidth
            variant="text"
            sx={{ px: 2, pt: 1.5 }}
            color={button.color}
          >
            {t(button.label)}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

const Home: NextPage = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent="center"
      alignItems={"center"}
      maxWidth={"1300px"}
      minHeight={"100vh"}
    >
      <Landing />
    </Box>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default Home;
