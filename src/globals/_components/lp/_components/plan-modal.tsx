import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { PricingPlan } from "@/globals/mocks/prices";
import { GoldenButton } from "../results-page";
import { msgZap } from "../header";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";

interface PlanModalProps {
  plan: PricingPlan;
  onClose: () => void;
}

export function PlanModal({ plan, onClose }: PlanModalProps) {
  const zapHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    plan.whatsappMessage,
  )}`;

  const openWhatsapp = () =>
    window.open(zapHref, "_blank", "noreferrer,noopener");

  return (
    <Dialog open fullScreen>
      <Box sx={{ position: "relative", py: 10 }}>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 24, right: 24 }}
        >
          <CloseIcon />
        </IconButton>

        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography variant="h5" mb={2}>
              {plan.title}
            </Typography>

            <Typography
              variant="h5"
              fontWeight={"bold"}
              color="goldenrod"
              mb={4}
            >
              R$ {plan.price.toFixed(2)}
            </Typography>

            <Typography variant="body1" mb={5}>
              {plan.description}
            </Typography>

            <Stack spacing={2} mb={6}>
              {plan.features.map((feature) => (
                <Typography key={feature} variant="body1" fontWeight={"bold"}>
                  • {feature}
                </Typography>
              ))}
            </Stack>

            <GoldenButton
              onClick={openWhatsapp}
              width="100%"
              content="Entrar em Contato pelo Whatsapp"
            >
              Entrar em contato pelo WhatsApp
            </GoldenButton>
          </motion.div>
        </Container>
      </Box>
    </Dialog>
  );
}
