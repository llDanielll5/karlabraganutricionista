import React from "react";
import { BoxDelivery, CartIcon, HeartIcon } from "@/globals/icons/landingpage";
import { COLORS } from "@/globals/utils/colors";
import { Box, keyframes, Stack, styled, Typography } from "@mui/material";
import useWindowSize from "@/globals/hooks/useWindowSize";

const announcements = [
  {
    title: "Entregamos para todo Brasil",
    icon: <BoxDelivery sx={{ color: COLORS.PRIMARY }} />,
  },
  {
    title: "Trocas e Devoluções em até 7 dias",
    icon: <CartIcon sx={{ color: COLORS.PRIMARY }} />,
  },
  {
    title: "Frete fixo de R$ 8,00 para o DF",
    icon: <HeartIcon sx={{ color: COLORS.PRIMARY }} />,
  },
];

const AnnouncementLp = () => {
  const { width } = useWindowSize();
  return (
    <Container>
      {width! > 760 &&
        announcements.map((v, i) => (
          <AnnouncementSingle key={i}>
            {v.icon}
            <Typography
              variant="subtitle1"
              color={COLORS.PRIMARY}
            >{` ${v.title}`}</Typography>
          </AnnouncementSingle>
        ))}
      {width! <= 760 && (
        <AnnouncementSingle>
          {announcements[1].icon}
          <Typography
            variant="subtitle1"
            color={COLORS.PRIMARY}
          >{` ${announcements[1].title}`}</Typography>
        </AnnouncementSingle>
      )}
    </Container>
  );
};

const Container = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: ${COLORS.SECONDARY};
  padding: 0.5rem 3%;

  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;
const AnnouncementSingle = styled(Box)`
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export default AnnouncementLp;
