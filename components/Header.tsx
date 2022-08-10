import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { animated } from "react-spring";
import { languages } from "../pages/_app";

const AnimatedTypography = animated(Typography);

const Header = () => {
  const { t, i18n } = useTranslation("common");

  const router = useRouter();

  const changeLanguage = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    router.push(i18n.language);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "auto",
        px: 1,
        py: 2,
        zIndex: 1,
        overflowY: "auto",
      }}
    >
      <Box
        px={2}
        display="flex"
        justifyContent={"flex-end"}
        alignItems="center"
        width={"100%"}
        maxWidth="1100px"
      >
        <Box>
          <FormControl fullWidth>
            <Select
              variant="standard"
              value={i18n.language}
              onChange={changeLanguage}
            >
              <MenuItem value={"en"}>🇬🇧 English</MenuItem>
              <MenuItem value={"pt"}>🇵🇹 Português</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
