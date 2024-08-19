import React from "react";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";

const MiniCardMonitoring = (props: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  return (
    <StyledCard elevation={12}>
      <CardContent>
        <ContentFlex>
          {props.icon}
          <Typography color="white" variant="h5" fontWeight={"bold"}>
            {props.title}
          </Typography>
          <Typography
            color="white"
            variant="h6"
            fontWeight={"bold"}
            textAlign={"justify"}
          >
            {props.subtitle}
          </Typography>
        </ContentFlex>
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  background-color: #111111c2;
  position: sticky;
  top: 2rem;
  backdrop-filter: blur(10px);
`;

const ContentFlex = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
`;

const WhiteDivider = styled(Box)`
  border-top: 1px solid white;
  width: 100%;
`;

export default MiniCardMonitoring;
