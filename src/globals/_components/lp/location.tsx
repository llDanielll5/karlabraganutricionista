import React from "react";
import { Box, Button, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { rightSlideVariants } from "./banner";
import { COLORS } from "@/globals/utils/colors";
import dynamic from "next/dynamic";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";
import { msgZap } from "./header";

const Map = dynamic(
  () => import("../../_components/lp/_components/valparaiso-location"),
  {
    ssr: false,
  }
);

const LocationLp = () => {
  const zapHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    msgZap
  )}`;

  const openWhatsapp = () =>
    window.open(zapHref, "_blank", "noreferrer,noopener");

  return (
    <AnimatedContainer
      initial="hidden"
      whileInView="visible"
      variants={rightSlideVariants}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          flexDirection="column"
          rowGap={3}
        >
          <Typography variant="h4" fontFamily={"Quicksand"}>
            Aonde fica nosso{" "}
            <span style={{ color: "white" }}>Consultório?</span>
          </Typography>

          <Typography variant="h5" fontWeight={400} fontFamily={"Quicksand"}>
            Quadra 1 casa 1 Valparaíso de Goiás - GO, 72870-000
          </Typography>

          <StyledButton onClick={openWhatsapp}></StyledButton>
        </Grid>

        <Grid item xs={12} md={6}>
          <MapBorder>
            <Map />
          </MapBorder>
        </Grid>
      </Grid>
    </AnimatedContainer>
  );
};

const Container = styled(Box)`
  margin: 2rem 0;
  padding: 3rem 5%;
  background-color: ${COLORS.GOLD};
`;

const StyledButton = styled(Button)`
  width: 280px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #77530a,
    #ffd277,
    #77530a,
    #77530a,
    #ffd277,
    #77530a
  );
  background-size: 250%;
  background-position: left;
  color: #ffd277;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 1s;
  overflow: hidden;
  :hover {
    background-size: 250% auto;
    animation: 2s ease-in-out infinite brilho;
  }
  ::before {
    position: absolute;
    text-transform: uppercase;
    content: "Quero Mudar Minha Vida";
    color: #ffd277;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 40px;

    ::before {
      font-size: 0.5rem;
      padding: 0 0.3rem;
    }
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    height: 40px;

    ::before {
      font-size: 0.8rem;
      padding: 0 0.3rem;
    }
  }
`;

const MapBorder = styled(Box)`
  background-image: url(/images/portrait.png);
  background-position: center;
  background-size: cover;
  padding: 1.5rem;

  @media screen and (max-width: 760px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 1rem;
  }
`;

const AnimatedContainer = motion(Container);

export default LocationLp;
