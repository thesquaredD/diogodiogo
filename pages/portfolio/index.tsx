import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Portfolio: NextPage = () => {
  return <>Cona</>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}

export default Portfolio;
