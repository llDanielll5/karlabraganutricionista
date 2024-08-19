import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import { Card, IconButton, Typography } from "@mui/material";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import { COLORS } from "../utils/colors";

const Container = styled(Card)({
  position: "relative",
  width: "100%",
  height: "500px",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: "1rem",
});

const BeforeImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 1,
});

const AfterImage = styled("img")<{ clipPercentage: number }>(
  ({ clipPercentage }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    clipPath: `inset(0 0 0 ${clipPercentage}%)`,
    zIndex: 2,
  })
);

const Slider = styled("div")({
  position: "absolute",
  top: 0,
  left: "50%", // Começa no meio
  width: "2px",
  height: "100%",
  backgroundColor: "#fff",
  zIndex: 3,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const IconWrapper = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 4, // Para garantir que o ícone fique acima das imagens
});

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfterImage = (props: BeforeAfterProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, percentage)));
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    handleMove(event.clientX);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    handleMove(event.touches[0].clientX);
  };

  return (
    <Container
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      elevation={12}
    >
      <BeforeImage src={props.beforeImage} alt="Before" />
      <AfterImage
        src={props.afterImage}
        alt="After"
        clipPercentage={sliderPosition}
      />
      <Slider style={{ left: `${sliderPosition}%` }}>
        <IconWrapper>
          <IconButton>
            <SyncAltRoundedIcon
              fontSize="large"
              style={{
                color: COLORS.GOLD,
                backgroundColor: "white",
                border: "1px solid white",
                borderRadius: "50%",
                padding: 2,
              }}
            />
          </IconButton>
        </IconWrapper>
      </Slider>
    </Container>
  );
};

export default BeforeAfterImage;
