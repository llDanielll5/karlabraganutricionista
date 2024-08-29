"use client";

import {
  Box,
  Grid,
  IconButton,
  keyframes,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { footerLink } from "../../mocks/footer";
import { COLORS } from "@/globals/utils/colors";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  AmexCardPaymentIcon,
  BoletoPaymentIcon,
  EloCardIcon,
  HiperCardIcon,
  MastercardIcon,
  VisaCardIcon,
} from "@/globals/icons/landingpage";
import { motion } from "framer-motion";

const importantInformations = [
  "ENTRAR EM CONTATO",
  "INFORMAÇÕES GERAIS",
  "FORMAS DE PAGAMENTO",
  "SOBRE MIM",
];

const FooterLp = () => {
  return (
    <AnimatedContainer
      initial="hidden"
      whileInView="visible"
      variants={rightSlideVariants}
      viewport={{ once: true, amount: 0.4 }}
    >
      <GridContainer container spacing={2}>
        <Grid item lg={4} xs={12} md={6} sm={6}>
          <Typography color="#677279" variant="subtitle2" mb={2}>
            INFORMAÇÕES IMPORTANTES
          </Typography>
          <Stack rowGap={1.3}>
            {importantInformations.map((v, i) => (
              <StyledLink
                fontWeight={300}
                color="#677279"
                key={i}
                variant="subtitle1"
              >
                {v}
              </StyledLink>
            ))}
          </Stack>
        </Grid>

        <Grid item lg={4} xs={12} md={6} sm={6}>
          <Typography color="#677279" variant="subtitle2" mb={2}>
            ATENDIMENTO
          </Typography>
          <Stack rowGap={2}>
            {[
              "Contato: (61) 99164-7773",
              "E-mail: karlabraganutricionista@gmail.com",
              "Instagram: @karlabraga.nutricionista",
              "Horários de Atendimento: Segunda à Sexta das 8:00 às 18:00.",
            ].map((v, i) => (
              <Stack
                key={i}
                direction={"row"}
                alignItems={"center"}
                columnGap={2}
              >
                {i === 0 ? (
                  <StyledWhatsappIcon />
                ) : i === 1 ? (
                  <StyledEmailIcon />
                ) : i === 2 ? (
                  <StyledInstagramIcon />
                ) : (
                  <StyledAccessTimeIcon />
                )}
                <Typography
                  fontWeight={300}
                  color="#677279"
                  variant="subtitle1"
                >
                  {v}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>

        <Grid
          item
          lg={4}
          xs={6}
          md={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
        >
          <Box>
            <StyledImage src={"/images/logo-white.svg"} width={"100%"} />
          </Box>
        </Grid>
      </GridContainer>

      <Footer>
        <Box color="#677279">
          <Typography variant="body1" fontWeight={300}>
            © Karla Braga Nutricionista
          </Typography>
          <Typography variant="body1" fontWeight={300}>
            Todos os direitos reservados
          </Typography>
          <EndTypography>
            Feito por{" "}
            <a href="https://www.sofx.com.br">SOFX - Soluções Digitais</a>
          </EndTypography>
        </Box>

        {/* <Box>
          <Typography variant="body2" fontWeight={300} color="#677279">
            Aceitamos pagamentos com:
          </Typography>
          <AmexCardPaymentIcon fontSize="large" />
          <BoletoPaymentIcon fontSize="large" />
          <EloCardIcon fontSize="large" />
          <HiperCardIcon fontSize="large" />
          <MastercardIcon fontSize="large" />
          <VisaCardIcon fontSize="large" />
        </Box> */}
      </Footer>
    </AnimatedContainer>
  );
};

const Container = styled(Box)`
  padding: 0 3% 0 3%;
  margin: 0 0 3rem 0;
  width: 100%;

  @media screen and (max-width: 760px) {
    padding: 0 5%;
  }
`;
const StyledLink = styled(Typography)`
  transition: 0.3s;
  cursor: pointer;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;
const GridContainer = styled(Grid)`
  @media screen and (max-width: 760px) {
    row-gap: 1.5rem;
  }
`;

const beat = keyframes`
  0%, 100% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
`;
const StyledImage = styled("img")``;

const Footer = styled(Box)`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;

  @media screen and (max-width: 760px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    row-gap: 1rem;
    margin-top: 4rem;
  }
`;
const EndTypography = styled(Typography)`
  pointer-events: all;
  a {
    color: ${COLORS.PRIMARY};
    text-decoration-line: underline;
    :hover {
      color: ${COLORS.SECONDARY};
    }
  }
`;

const StyledInstagramIcon = styled(InstagramIcon)`
  color: ${COLORS.PRIMARY};
  text-decoration-line: underline;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;

const StyledWhatsappIcon = styled(WhatsAppIcon)`
  color: ${COLORS.PRIMARY};
  text-decoration-line: underline;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;

const StyledEmailIcon = styled(EmailIcon)`
  color: ${COLORS.PRIMARY};
  text-decoration-line: underline;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;
const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  color: ${COLORS.PRIMARY};
  text-decoration-line: underline;
  :hover {
    color: ${COLORS.SECONDARY};
  }
`;

const rightSlideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AnimatedContainer = motion(Container);

export default FooterLp;
