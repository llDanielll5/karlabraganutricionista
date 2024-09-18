import React from "react";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { rightSlideVariants } from "./banner";

const AboutMeLP: React.FC = () => {
  return (
    <AnimatedContainer
      initial="hidden"
      whileInView="visible"
      variants={rightSlideVariants}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} md={5}>
          <Stack direction="column" rowGap={2}>
            <Typography variant="h4" fontFamily={"Quicksand"}>
              Prazer, sou a <span style={{ color: "white" }}>Karla Braga!</span>
            </Typography>
            <Typography variant="h5" fontFamily={"Quicksand"} fontWeight={500}>
              Meu nome é Karla, sou nutricionista formada pela Universidade
              UNIDESC, minha área de especialidade é a nutrição clínica
              esportiva sou pós graduada em nutrição clínica hospitalar e
              ambulatorial , nutrição esportiva e especialista em emagrecimento
              mas atendo também diariamente a área clínica geral como o
              tratamento de doenças crônicas não transmissiveis como diabetes,
              obesidade, hipertensão dentre outras, meus atendimentos são feitos
              de forma on-line e de segunda a sábado, seria um grande prazer ter
              você no meu time de pacientes. No meu perfil do Instagram você
              encontra um pouco de mim e um pouco do meu universo nutricional.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <StyledProfileImage src="/images/karla-perfil.png" />
        </Grid>
      </Grid>
    </AnimatedContainer>
  );
};

const Container = styled(Box)`
  margin: 2rem 0;
  padding: 3rem 5%;
  background-color: #cca668;
`;

const StyledProfileImage = styled("img")`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

const AnimatedContainer = motion(Container);

export default AboutMeLP;
