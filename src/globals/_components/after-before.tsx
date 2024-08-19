import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const Container = styled("div")({
  position: "relative",
  width: "600px", // Defina a largura desejada
  height: "400px", // Defina a altura desejada
  overflow: "hidden",
  cursor: "pointer",
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
    transition: "clip-path 0.01s ease", // Transição suave para mudanças pequenas
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
  transition: "left 0.1s ease", // Transição suave para mudanças pequenas
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

const BeforeAfterImage: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, percentage)));
    }
  };

  return (
    <Container ref={containerRef} onMouseMove={handleMouseMove}>
      <BeforeImage
        src="https://nutrilauratavares.com/wp-content/uploads/2024/03/1-1.png"
        alt="Before"
      />
      <AfterImage
        src="https://nutrilauratavares.com/wp-content/uploads/2024/03/2.png"
        alt="After"
        clipPercentage={sliderPosition}
      />
      <Slider style={{ left: `${sliderPosition}%` }}>
        <IconWrapper>
          <IconButton>
            <CompareArrowsIcon fontSize="large" style={{ color: "#fff" }} />
          </IconButton>
        </IconWrapper>
      </Slider>
    </Container>
  );
};

export default BeforeAfterImage;
