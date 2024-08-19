import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { RightArrowSeeAllIcon } from "@/globals/icons/landingpage";
import { SeeAllText } from "..";
import { useRouter } from "next/router";

interface TitleInterface {
  title: string;
  actionTitle: string;
  href?: string;
}

const TitleLp = (props: TitleInterface) => {
  const router = useRouter();
  return (
    <HeaderTitle>
      <Typography variant="h5">{props.title}</Typography>
      <SeeAllText onClick={() => router?.push?.(props.href!)}>
        {props.actionTitle}
        <RightArrowSeeAllIcon />
      </SeeAllText>
    </HeaderTitle>
  );
};

const HeaderTitle = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0 1rem 0;
`;

export default TitleLp;
