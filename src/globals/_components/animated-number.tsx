import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { COLORS } from "../utils/colors";

interface AnimatedNumberProps {
  value: number;
  duration?: number; // duração da animação em milissegundos
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  return (
    <Typography variant="h2" color={COLORS.GOLD}>
      + {displayValue}
    </Typography>
  );
};

export default AnimatedNumber;
