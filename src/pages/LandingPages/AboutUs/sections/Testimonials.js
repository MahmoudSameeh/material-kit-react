// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import TestimonialCard from "pages/LandingPages/AboutUs/sections/TestimonialCard";

// Sample images for testimonials. Replace with real patient photos if available.
import patient1 from "assets/images/team-4.jpg";
import patient2 from "assets/images/team-4.jpg";
import patient3 from "assets/images/team-4.jpg";

function Testimonials() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="light"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" align="center">
              What Our Patients Are Saying
            </MKTypography>
            <MKTypography variant="body2" color="textSecondary" align="center" opacity={0.8}>
              Hear from some of our satisfied patients who experienced exceptional dental care.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          {/* Testimonial 1 */}
          <Grid item xs={12} md={4}>
            <MKBox mb={1}>
              <TestimonialCard
                image={patient1}
                name="Alice Johnson"
                position="Patient"
                testimonial="I had an amazing experience with Dr. John. The office was so welcoming, and the staff was incredibly helpful. I’m so happy with my new smile!"
              />
            </MKBox>
          </Grid>

          {/* Testimonial 2 */}
          <Grid item xs={12} md={4}>
            <MKBox mb={1}>
              <TestimonialCard
                image={patient2}
                name="Mark Thompson"
                position="Patient"
                testimonial="Dr. Sarah did wonders for my teeth! The braces were painless, and the results were beyond my expectations. Highly recommend this clinic!"
              />
            </MKBox>
          </Grid>

          {/* Testimonial 3 */}
          <Grid item xs={12} md={4}>
            <MKBox mb={1}>
              <TestimonialCard
                image={patient3}
                name="Emily Davis"
                position="Patient"
                testimonial="The cosmetic dental work I had done by Dr. Emily completely transformed my smile. The procedure was quick and effective. So pleased with the results!"
              />
            </MKBox>
          </Grid>
        </Grid>

        {/* Call-to-action section */}
        <Grid container justifyContent="center" sx={{ mt: 5 }}>
          <MKButton variant="contained" color="primary" size="large">
            Book Your Appointment
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Testimonials;
