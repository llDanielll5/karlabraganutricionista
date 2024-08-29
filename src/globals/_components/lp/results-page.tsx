import React from "react";
import AfterBeforeImage from "@/globals/_components/after-before";
import { COLORS } from "@/globals/utils/colors";
import { Box, Button, styled, Typography } from "@mui/material";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";
import { motion } from "framer-motion";
import { rightSlideVariants } from "./banner";

// import { Container } from './styles';

const ResultsPage = () => {
  const msg = `Olá!! Preciso de um serviço digital e gostaria de saber mais sobre a SOFX!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    msg
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
      <Box width={"100%"}>
        <AfterBeforeImage
          beforeImage="https://nutrilauratavares.com/wp-content/uploads/2024/03/1-1.png"
          afterImage="https://nutrilauratavares.com/wp-content/uploads/2024/03/2.png"
        />
        <Typography
          variant="caption"
          textAlign="center"
          width="100%"
          alignSelf="center"
        >
          Arraste o mouse, ou realize o slide no celular para ver o antes e
          depois...
        </Typography>
      </Box>
      <InformationsContainer>
        <CallText variant="h4">
          Confira alguns <span>RESULTADOS DE ALUNOS</span>
        </CallText>

        <CallTextInfos variant="h5">
          Mude sua vida e sua rotina, deixa eu te ajudar a conseguir o corpo que
          tanto deseja, e não tenha mais vergonha de ir ao clube ou a praia!!
        </CallTextInfos>

        <StyledButton onClick={openWhatsapp}>
          Quero mudar meu Corpo
        </StyledButton>
      </InformationsContainer>
    </AnimatedContainer>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem 5%;
  column-gap: 1rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const InformationsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 1rem;
  flex-direction: column;
`;

const CallText = styled(Typography)`
  width: 70%;
  span {
    background: linear-gradient(
      90deg,
      #deb25f 10%,
      ${COLORS.GOLD} 20.85%,
      goldenrod 50%,
      #deb25f 82.56%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
      1px 1px 0 black; */
  }

  @media screen and (max-width: 760px) {
    width: 95%;
    text-align: center;
  }
`;

const CallTextInfos = styled(Typography)`
  width: 70%;
  @media screen and (max-width: 760px) {
    width: 95%;
    text-align: justify;
  }
`;

const StyledButton = styled(Button)`
  width: 70%;
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
    animation: 2s ease-in-out brilho;
  }
  ::before {
    position: absolute;
    text-transform: uppercase;
    content: "Quero Mudar Meu Corpo";
    font-size: 16px;
    color: #ffd277;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 150%;
  }
`;

const AnimatedContainer = motion(Container);

export default ResultsPage;
