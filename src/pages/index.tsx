import React from "react";
import BannerLp from "@/globals/_components/lp/banner";
import LandingPageLayout from "@/globals/layouts/lp";
import { Box } from "@mui/material";
import { GoldenLine } from "@/globals/_components";
import ResultsPage from "@/globals/_components/lp/results-page";

export default function Home() {
  return (
    <Box>
      <GoldenLine />
      <BannerLp />
      <GoldenLine />
      <ResultsPage />
      {/* <BestSellersLp /> */}
      {/* <CollectionsLp /> */}
    </Box>
  );
}

Home.getLayout = (page: any) => <LandingPageLayout>{page}</LandingPageLayout>;
