import React from "react";
import { Box, IconButton, Paper, styled, Typography } from "@mui/material";
import { COLORS } from "../utils/colors";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";

const allIcons = {
  heart: <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />,
  facebook: <FacebookOutlinedIcon sx={{ color: "white" }} />,
  whatsapp: <WhatsAppIcon sx={{ color: "white" }} />,
  twitter: <XIcon sx={{ color: "white" }} />,
  instagram: <InstagramIcon sx={{ color: "white" }} />,
  website: <LanguageIcon sx={{ color: "white" }} />,
};

export type IconsLinksDaBioTypes =
  | "heart"
  | "facebook"
  | "whatsapp"
  | "twitter"
  | "instagram"
  | "website";

interface LinksDaBioCardProps {
  title: string;
  icon?: IconsLinksDaBioTypes;
  url: string;
}

const LinksDaBioCard = (props: LinksDaBioCardProps) => {
  const router = useRouter();

  const copyToClipboard = async () => {
    let baseUrl = "https://www.mariepapelariafofa.com";
    let endpoint = router.pathname;
    navigator.clipboard.writeText(`${baseUrl}${endpoint}`);
  };

  return (
    <Container elevation={12} onClick={() => router.push(props.url)}>
      {allIcons[props.icon!]}
      <Typography variant="h6" fontWeight={400} color="white">
        {props.title}
      </Typography>
      <IconButton onClick={copyToClipboard} sx={{ color: "white" }}>
        <ShareIcon />
      </IconButton>
    </Container>
  );
};

const Container = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  background-color: ${COLORS.PRIMARY};
  width: 100%;
  cursor: pointer;
  transition: 0.05s;
  :hover {
    scale: 0.98;
  }
`;

export default LinksDaBioCard;
