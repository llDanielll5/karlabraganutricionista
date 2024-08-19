import React from "react";
import {
  BoxBuyInfos,
  CartBuyInfos,
  ChatBuyInfos,
  SecurePayBuyInfos,
} from "@/globals/icons/landingpage";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import CustomDivider from "../divider";
import { motion } from "framer-motion";

const buyInfos = [
  {
    icon: <BoxBuyInfos fontSize="large" />,
    title: "Frete para todo o Brasil",
    description:
      "Receba seu pedido no conforto da sua casa com entrega garantida e segurada pelos Correios.",
  },
  {
    icon: <CartBuyInfos fontSize="large" />,
    title: "Pedido monitorado",
    description:
      "Todas as nossas entregas possuem código de rastreio e você recebe todas as atualizações em seu e-mail e whatsapp.",
  },
  {
    icon: <ChatBuyInfos fontSize="large" />,
    title: "Precisa de atendimento?",
    description:
      "Contamos com um time de especialistas para atender você, 07 dias por semana.",
  },
  {
    icon: <SecurePayBuyInfos fontSize="large" />,
    title: "Compra segura",
    description:
      "Utilizamos a mesma segurança de dados dos maiores bancos nacionais e internacionais (SSL).",
  },
];

const BuyInfosLp = () => {
  const gridItem = (
    values: { title: string; description: string; icon: any },
    index: number
  ) => (
    <GridItem item xs={12} md={6} lg={3} key={index} variants={itemVariants}>
      {values.icon}
      <Stack direction={"column"} display={"flex"} columnGap={1}>
        <Typography variant="subtitle1">{values.title}</Typography>
        <Typography variant="subtitle1" fontWeight={400}>
          {values.description}
        </Typography>
      </Stack>
    </GridItem>
  );

  return (
    <Container>
      <CustomDivider />
      <AnimatedContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
        <StyledGrid container spacing={3}>
          {buyInfos.map((v, i) => gridItem(v, i))}
        </StyledGrid>
      </AnimatedContainer>
      <CustomDivider />
    </Container>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Container = styled(Box)`
  width: 100%;
  overflow: hidden;
  padding: 0 3%;
`;

const AnimatedContainer = motion(Container);

const StyledGrid = styled(Grid)`
  padding: 0 3% 0 3%;
`;

const GridItem = styled(motion(Grid))`
  display: flex;
  column-gap: 1rem;
`;

export default BuyInfosLp;
