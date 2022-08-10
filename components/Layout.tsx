import { Box } from "@mui/material";
import Head from "next/head";

export const Layout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        color: "white",
      }}
    >
      <Head key={1}>
        <title>Diogo Diogo</title>
        <meta
          name="description"
          content="Creative developer based in London, UK."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </Box>
  );
};

export default Layout;
