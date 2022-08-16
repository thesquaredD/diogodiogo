import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const projects = ["w4m", "argupedia"];

const Portfolio: NextPage = () => {
  const { t, i18n } = useTranslation("common");
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      maxWidth="1100px"
      width={"100%"}
      mt={10}
      display="flex"
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={isSmall ? "center" : "flex-start"}
    >
      {projects.map((project, key) => (
        <Accordion
          key={key}
          sx={{
            width: "90%",
            maxWidth: "800px",
            border: 2,
            borderColor: (theme) => theme.palette.toxicGreen.main,
            backgroundColor: "#2e2e2e",
            mb: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreOutlinedIcon color="secondary" />}
          >
            <Typography
              sx={{
                width: "33%",
                flexShrink: 0,
              }}
              variant="h6"
              fontWeight={400}
              color={(theme) => theme.palette.toxicGreen.main}
            >
              {t(`${project}.title`)}
            </Typography>
            {isSmall ? (
              <></>
            ) : (
              <Typography
                sx={{ color: "text.secondary", alignSelf: "center" }}
                fontFamily={(theme) => theme.typography.h2.fontFamily}
              >
                {t(`${project}.subtitle`)}
              </Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              {!isSmall ? (
                <></>
              ) : (
                <Typography
                  sx={{ color: "text.secondary", alignSelf: "center" }}
                  fontFamily={(theme) => theme.typography.h2.fontFamily}
                >
                  {t(`${project}.subtitle`)}
                </Typography>
              )}
              <Typography>{t(`${project}.description`)}</Typography>
              <Button
                href={t(`${project}.hyperlink`)}
                target={"newtab"}
                variant="outlined"
                color="toxicGreen"
              >
                {t("visit")}
              </Button>
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
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

export default Portfolio;
