import React from "react";
import { COLORS } from "@/globals/utils/colors";
import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import { INSTAGRAM_CONTACT } from "@/globals/utils/contacts";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRouter } from "next/router";
import LinksDaBioCard, {
  IconsLinksDaBioTypes,
} from "@/globals/_components/links-da-bio-card";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";
import { msgZap } from "@/globals/_components/lp/header";
import Head from "next/head";

const links: { title: string; icon: IconsLinksDaBioTypes; url: string }[] = [
  {
    title: "Website",
    icon: "website",
    url: "https://karlabraganutricionista.com.br",
  },
  {
    title: "Fale Comigo!",
    icon: "whatsapp",
    url: `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
      msgZap
    )}`,
  },
];

const LinksDaBioPage = () => {
  const router = useRouter();

  const contacts = [
    {
      social: "Whatsapp",
      contact: WHATSAPP_PHONE,
      icon: <WhatsAppIcon fontSize="large" />,
      onClick: () =>
        router.push(`https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}`),
    },
    {
      social: "Instagram",
      contact: INSTAGRAM_CONTACT,
      icon: <InstagramIcon fontSize="large" />,
      onClick: () => router.push(`https://instagram.com/${INSTAGRAM_CONTACT}`),
    },
  ];

  return (
    <Container>
      <Head>
        <title>Todas Conexões da drª Karla Braga</title>
      </Head>
      <Logo src="/images/logo-black.svg" />
      <CallText variant="h4" color="white">
        <span>Karla Braga Nutricionista</span>
      </CallText>

      <CallText
        my={2}
        variant="h6"
        fontWeight={400}
        fontFamily={"Quicksand"}
        color="white"
      >
        <span>Nos chame no nosso Whatsapp ou compre pelo nosso site!</span>
      </CallText>

      <Stack direction={"row"} alignItems={"center"} columnGap={2}>
        {contacts.map((item, index) => (
          <IconButton
            onClick={item.onClick}
            sx={{
              color: COLORS.GOLD,
              transition: ".3s",
              ":hover": { color: COLORS.PRIMARY },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Stack>

      <Typography variant="h6" className="text-effect-2" my={2} color="white">
        Conheça mais sobre mim!
      </Typography>

      {links.map((item, index) => (
        <Box my={2} key={index} width="100%">
          <LinksDaBioCard title={item.title} icon={item.icon} url={item.url} />
        </Box>
      ))}
    </Container>
  );
};

const Container = styled(Box)`
  min-height: 100vh;
  background-color: ${COLORS.SECONDARY};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 0 20%;

  @media screen and (max-width: 760px) {
    padding: 0 10%;
  }
  @media screen and (max-width: 500px) {
    padding: 0 6%;
  }
`;
const Logo = styled("img")`
  height: 50%;
  width: 50%;
  border-radius: 2%;
  object-fit: contain;

  @media screen and (max-width: 760px) {
    height: 70%;
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    height: 85%;
    width: 85%;
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

export default LinksDaBioPage;
