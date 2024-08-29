import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import AnimatedNumber from "../animated-number";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import { COLORS } from "@/globals/utils/colors";
import { motion } from "framer-motion";

export const rightSlideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const BannerLp = () => {
  return (
    <AnimatedContainer
      initial="hidden"
      whileInView="visible"
      variants={rightSlideVariants}
      viewport={{ once: true, amount: 0.4 }}
    >
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
    </AnimatedContainer>
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

const AnimatedContainer = motion(Container);

export default BannerLp;
