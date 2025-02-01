import React from "react";
import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

function FeaturesOne() {
  const { t } = useTranslation();

  // Get services from localization JSON
  const services = t("features.services", { returnObjects: true });

  return (
    <MKBox component="section" py={{ xs: 3 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              {t("features.title")}
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              {t("features.description")}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              {services.map((service, index) => (
                <MKBox key={index} display="flex" alignItems="center" p={2}>
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    {service.icon === "medical_services" ? (
                      <MedicalServicesIcon />
                    ) : (
                      <Icon fontSize="small">{service.icon}</Icon>
                    )}
                  </MKBox>
                  <MKTypography variant="body2" color="text" pl={2}>
                    {service.text}
                  </MKTypography>
                </MKBox>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
