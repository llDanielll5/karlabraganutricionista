import React from "react";
import useWindowSize from "@/globals/hooks/useWindowSize";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { COLORS } from "@/globals/utils/colors";
import { useRouter } from "next/router";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";

const HeaderLp = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  // const userData = useRecoilValue(UserData);

  const msg = `Olá!! Preciso de um serviço digital e gostaria de saber mais sobre a SOFX!`;
  const zapHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    msg
  )}`;

  const openWhatsapp = () =>
    window.open(zapHref, "_blank", "noreferrer,noopener");

  return (
    <Container>
      <InformationsStack direction="column">
        <Logo
          src="/images/logo-black.svg"
          alt="Karla Braga Nutricionista"
          onClick={() => router.push("/")}
        />
        <CallText variant="h3" color="white">
          Conquiste seu <span>resultado dos sonhos</span> de forma online ou
          presencial
        </CallText>

        <StyledButton onClick={openWhatsapp}>
          Quero Mudar Minha Vida
        </StyledButton>
      </InformationsStack>
    </Container>
  );
};

const Container = styled(Box)`
  background-image: url(/images/karla-banner.png);
  background-color: #000000;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  /* @media screen and (max-width: 760px) {
    justify-content: space-between;
  } */
`;

const Logo = styled("img")`
  max-width: 200px;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    max-width: 120px;
  }
`;

const CallText = styled(Typography)`
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
`;

const InformationsStack = styled(Stack)`
  padding: 10rem 5%;
  max-width: 50%;
  row-gap: 1rem;
`;

const StyledButton = styled(Button)`
  width: 280px;
  height: 40px;
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
    animation: 2s ease-in-out infinite brilho;
  }
  ::before {
    position: absolute;
    text-transform: uppercase;
    content: "Quero Mudar Minha Vida";
    color: #ffd277;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }
`;

export default HeaderLp;
