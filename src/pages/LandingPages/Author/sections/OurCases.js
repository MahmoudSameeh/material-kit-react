import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Box, Typography, Button } from "@mui/material";

// Example Images for cases (update with actual images for dental cases)
import whiteSmile from "assets/images/white-smile.jpg";
import orthodontics from "assets/images/orthodontics.webp";
import dentalImplant from "assets/images/dental-implant.jpeg";

function OurCases() {
  const { t } = useTranslation();

  // Define an array for dental medical cases
  const cases = [
    {
      title: t("cases.teethWhitening.title"),
      description: t("cases.teethWhitening.description"),
      image: whiteSmile,
      link: "#",  // Link to case details page or modal
    },
    {
      title: t("cases.orthodontics.title"),
      description: t("cases.orthodontics.description"),
      image: orthodontics,
      link: "#",  // Link to case details page or modal
    },
    {
      title: t("cases.implants.title"),
      description: t("cases.implants.description"),
      image: dentalImplant,
      link: "#",  // Link to case details page or modal
    },
  ];

  return (
    <>
      <Box sx={{ backgroundColor: "background.default", padding: 6 }}>
        <Typography sx={{mt:7}} variant="h3" color="textPrimary" align="center" gutterBottom>
          {t("cases.title")}
        </Typography>
        <Typography variant="body1" color="textSecondary" align="center" paragraph>
          {t("cases.description")}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {cases.map((caseItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "lg",
                  boxShadow: 3,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img src={caseItem.image} alt={caseItem.title} style={{ width: "100%", height: "auto" }} />
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    {caseItem.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    {caseItem.description}
                  </Typography>
                  <Button variant="outlined" color="info" fullWidth href={caseItem.link}>
                    {t("cases.learnMore")}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default OurCases;
