import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Services from "pages/LandingPages/AboutUs/sections/Services";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import ContactForm from "pages/LandingPages/AboutUs/sections/ContactForm";
import bgImage from "assets/images/clinic-image.jpg";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="dark"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {t("home.title")}
            </MKTypography>
            <MKTypography variant="body1" color="text" opacity={0.8} mt={1} mb={3}>
              {t("home.subtitle")}
            </MKTypography>
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
              href="/book-appointment"
            >
              {t("home.bookAppointment")}
            </MKButton>
          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Services />
        <Team />
        <ContactForm />
      </Card>
    </>
  );
}

export default Home;
