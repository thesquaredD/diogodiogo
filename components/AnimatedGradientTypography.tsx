import { styled, Typography } from "@mui/material";

export const AnimatedGradientTypography = styled(Typography)({
  textAlign: "center",

  background:
    "linear-gradient(to right, #32ff17 10%, #00ffa2 20%, #4d8bff 30%, #ff17b2 40%, #fd478d 50%, #ff174d 60%, #b76bff 70%, #00ffe5 80%, #32ff17 90% )",
  backgroundSize: "300% auto",

  color: "#000",
  backgroundClip: "text",
  textFillColor: "transparent",

  animation: "shine 10s linear infinite",
  "@keyframes shine": {
    to: {
      backgroundPosition: "300% center",
    },
  },
});
