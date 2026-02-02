import React from "react";
import BannerLp from "@/globals/_components/lp/banner";
import LandingPageLayout from "@/globals/layouts/lp";
import ResultsPage from "@/globals/_components/lp/results-page";
import NutritionalMonitoring from "@/globals/_components/lp/nutritional-monitoring";
import { GoldenLine } from "@/globals/_components";
import { Box } from "@mui/material";
import FooterLp from "@/globals/_components/lp/footer";
import AboutMeLP from "@/globals/_components/lp/about-me";
import LocationLp from "@/globals/_components/lp/location";
import { PricingSection } from "@/globals/_components/lp/_components/pricing-section";

export default function Home() {
  return (
    <Box>
      <GoldenLine />
      <BannerLp />
      <GoldenLine />
      <ResultsPage />
      <GoldenLine />
      <PricingSection />
      <GoldenLine />
      <NutritionalMonitoring />
      {/* <CollectionsLp /> */}
      {/* <LocationLp />s */}
      <AboutMeLP />
      <FooterLp />
    </Box>
  );
}

Home.getLayout = (page: any) => <LandingPageLayout>{page}</LandingPageLayout>;
