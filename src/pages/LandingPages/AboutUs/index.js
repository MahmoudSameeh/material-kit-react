import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FeaturesOne from "layouts/sections/page-sections/featuers/components/FeaturesOne";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";

const AboutUs = () => {
  const { t } = useTranslation();

  const HeroImage = styled(Box)({
    backgroundImage:
      'url("https://t4.ftcdn.net/jpg/09/79/33/63/360_F_979336334_o34hsDyFMRme0tDUwZYeSYGehg1gAdNs.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <div>
      {/* Header Section */}
      <HeroImage>
        <Typography variant="h3" color="white" textAlign="center">
          {t("about.title")}
          <br />
          <Typography variant="body2" color="white" sx={{ fontSize: 20 }}>
            {t("about.subtitle")}
          </Typography>
        </Typography>
      </HeroImage>

      <FeaturesOne />

      <MKBox component="section" py={{ xs: 3, md: 12 }}>
        <Container>
        <Grid container spacing={3} alignItems="stretch">
  {/* Left Section - Contact Info */}
  <Grid item xs={12} lg={5} sx={{ display: "flex", flexDirection: "column" }}>
    <MKBox
      sx={{
        flex: 1, // Ensures equal height
        border: 0,
        borderRadius: "10px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <MKTypography variant="h3" my={1}>
        {t("about.visitClinic")}
      </MKTypography>
      <MKTypography variant="body2" color="text" mb={2}>
        {t("about.location")}
      </MKTypography>

      {/* Appointment & Contact */}
      <MKBox mt={2} p={2} borderRadius="lg" bgcolor="grey.100">
        <MKTypography
          variant="h6"
          color="primary"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <ScheduleIcon fontSize="small" />
          {t("about.appointmentHours")}{" "}
          <strong style={{ color: "gray" }}>{t("about.available")}</strong>
        </MKTypography>
        <MKTypography variant="body2" color="text" mb={2}>
          {t("about.workingHours")}
        </MKTypography>

        <MKTypography variant="body2" color="text">
          📞{" "}
          <Link href="tel:+11234567890" color="inherit" underline="hover">
            (123) 456-7890
          </Link>
        </MKTypography>

        <MKTypography
          variant="body2"
          color="text"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <EmailIcon fontSize="small" />
          ✉️{" "}
          <Link href="mailto:info@dentalclinic.com" color="inherit" underline="hover">
            info@dentalclinic.com
          </Link>
        </MKTypography>
      </MKBox>
    </MKBox>
  </Grid>

  {/* Right Section - Google Map */}
  <Grid item xs={12} lg={7} sx={{ display: "flex" }}>
    <MKBox
      component="iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.7332446877936!2d31.45266027501713!3d30.216160110415306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581b0005923805%3A0xf9c3f547b434cc6a!2sLumina%20Dental%20Studio!5e0!3m2!1sen!2seg!4v1738277705888!5m2!1sen!2seg"
      width="100%"
      height="100%"
      style={{
        border: 0,
        borderRadius: "10px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
        minHeight: "450px",
      }}
      allowFullScreen
      loading="lazy"
    />
  </Grid>
</Grid>

        </Container>
      </MKBox>
    </div>
  );
};

export default AboutUs;
