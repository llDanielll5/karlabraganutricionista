import React from "react";
import { COLORS } from "@/globals/utils/colors";
import { Box, styled, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices";
import AppleIcon from "@mui/icons-material/Apple";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import MiniCardMonitoring from "./_components/mini-card-monitoring";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const informations = [
  {
    icon: (
      <CalendarTodayRoundedIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />
    ),
    title: "Consulta Presencial",
    subtitle: "Atendimento em Valparaíso de Goiás, para sua comodidade",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Consulta Online",
    subtitle:
      "Atendimento online, para sua conveniência e com toda praticidade da internet",
  },
  {
    icon: <AppleIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Plano Alimentar Personalizado",
    subtitle: "Dietas sob medida para atender ao seu objetivo final",
  },
  {
    icon: <PendingActionsIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Análise de Exames Laboriais",
    subtitle:
      "Avaliações detalhadas de exames para atender necessidades nutricionais específicas",
  },
  {
    icon: (
      <InsertInvitationIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />
    ),
    title: "Acompanhamentos Recorrentes",
    subtitle:
      "Acompanhamentos Semanais, Quinzenais ou Mensal, sob sua necessidade e desejo.",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Suporte via Whatsapp",
    subtitle:
      "Assistência contínua e direta pelo nosso Whatsapp 24horas do dia!",
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Lista de Compras",
    subtitle:
      "Todo cliente meu ganha de brinde uma lista de compras personalizada para não errar nas compras do mês!!",
  },
];

const NutritionalMonitoring = (props: any) => {
  return (
    <Container>
      <LeftContainer>
        <Typography variant="h5" color={COLORS.GOLD}>
          Dra Karla Braga
        </Typography>
        <Typography variant="h4">Acompanhamento Nutricional:</Typography>
      </LeftContainer>
      <RightContainer>
        {informations.map((item, index) => (
          <MiniCardMonitoring
            key={index}
            icon={item.icon}
            subtitle={item.subtitle}
            title={item.title}
          />
        ))}
      </RightContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 5%;
  position: relative;
  column-gap: 5%;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    row-gap: 1.3rem;
  }
`;

const LeftContainer = styled(Box)`
  align-self: flex-start;
  position: sticky;
  top: 2rem;
  width: 40%;

  @media screen and (max-width: 760px) {
    position: relative;
    width: 95%;
  }
`;
const RightContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 40%;

  @media screen and (max-width: 760px) {
    width: 95%;
  }
`;

export default NutritionalMonitoring;
