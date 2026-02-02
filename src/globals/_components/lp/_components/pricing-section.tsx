import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { PricingPlan, pricingPlans } from "@/globals/mocks/prices";
import { PlanModal } from "./plan-modal";
import { GoldenButton } from "../results-page";

export function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  return (
    <>
      <Box sx={{ py: 12, backgroundColor: "bw.main" }}>
        <Container maxWidth="lg">
          <Typography variant="h5" textAlign="center" mb={6}>
            Planos de Atendimento
          </Typography>

          <Grid container spacing={4}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={plan.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" mb={1}>
                        {plan.title}
                      </Typography>

                      <Typography
                        variant="h5"
                        fontWeight={"bold"}
                        color={"goldenrod"}
                        mb={3}
                      >
                        R$ {plan.price.toFixed(2)}
                      </Typography>

                      <Typography variant="body1" mb={4}>
                        {plan.description}
                      </Typography>

                      <GoldenButton
                        width="100%"
                        content="Ver Detalhes"
                        onClick={() => setSelectedPlan(plan)}
                      >
                        Ver detalhes
                      </GoldenButton>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {selectedPlan && (
        <PlanModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </>
  );
}
