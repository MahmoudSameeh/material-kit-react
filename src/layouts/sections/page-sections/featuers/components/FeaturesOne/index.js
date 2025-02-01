/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              About Our Dental Clinic
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              At our clinic, we believe that a healthy smile is a reflection of overall well-being.
              Our team is dedicated to providing compassionate, high-quality dental care to every patient.
              From preventive treatments to advanced cosmetic procedures, we ensure your dental health is our top priority.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
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
                  <Icon fontSize="small">medical_services</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  Comprehensive dental exams and cleanings to keep your smile healthy and bright.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
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
                <MedicalServicesIcon />
                                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  State-of-the-art cosmetic and restorative treatments tailored to your needs.
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
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
                  <Icon fontSize="small">emoji_people</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  A friendly and welcoming environment where patient comfort comes first.
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
