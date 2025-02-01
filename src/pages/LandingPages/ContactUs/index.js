import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/illustrations/illustration-reset.jpg";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        {/* Left Side - Image */}
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="100%"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </Grid>

        {/* Right Side - Contact Form */}
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 10, md: 15 }}
            mb={{ xs: 10, md: 15 }}
            mx={3}
            width="100%"
          >
            {/* Header */}
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {t("contact.title")}
              </MKTypography>
            </MKBox>

            {/* Form Section */}
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                {t("contact.description")}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label={t("contact.fullName")}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label={t("contact.email")}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={t("contact.message")}
                      placeholder={t("contact.placeholder")}
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {t("contact.submit")}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactUs;
