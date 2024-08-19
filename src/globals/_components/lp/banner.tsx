import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import AnimatedNumber from "../animated-number";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import { COLORS } from "@/globals/utils/colors";

const BannerLp = () => {
  return (
    <Container>
      <Stack direction="column" alignItems="center">
        <AnimatedNumber value={350} duration={1500} />
        <Typography textAlign="center" variant="h5">
          Pacientes Atendidos
        </Typography>
        <PersonAddIcon sx={{ fontSize: "70px", color: COLORS.GOLD }} />
      </Stack>

      <Stack direction="column" alignItems="center">
        <AnimatedNumber value={1200} duration={1500} />
        <Typography textAlign="center" variant="h5">
          Atendimentos Online
        </Typography>
        <LeakAddIcon sx={{ fontSize: "70px", color: COLORS.GOLD }} />
      </Stack>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 2rem;
  padding: 1rem 0;
`;

export default BannerLp;
