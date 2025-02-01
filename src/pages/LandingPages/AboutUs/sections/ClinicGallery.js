import React from 'react';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import bgImage from "assets/images/clinic-image.jpg";

function GallerySection() {
  return (
    <MKBox
      sx={{
        backgroundColor: '#f7f7f7',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <MKTypography variant="h3" color="Primary" gutterBottom>
        Our Clinic & Happy Patients
      </MKTypography>
      <MKTypography variant="body1" color="textSecondary" paragraph>
        Take a look at our clinic environment and hear from some of our happy patients.
      </MKTypography>

      {/* Clinic Gallery */}
      <MKBox sx={{ marginBottom: 4 }}>
        <MKTypography variant="h4" color="Primary" gutterBottom>
          Clinic Environment
        </MKTypography>
        <Grid container spacing={4} justifyContent="center">
          {/* Example Clinic Photo 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={bgImage}
                alt="Clinic Environment"
              />
              <CardContent>
                <MKTypography variant="body2" color="textSecondary">
                  Comfortable treatment rooms to make your visit pleasant and relaxing.
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
          {/* Example Clinic Photo 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={bgImage}
                alt="Treatment Room"
              />
              <CardContent>
                <MKTypography variant="body2" color="textSecondary">
                  State-of-the-art equipment and modern facilities for optimal care.
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
          {/* Example Clinic Photo 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={bgImage}
                alt="Clinic Reception"
              />
              <CardContent>
                <MKTypography variant="body2" color="textSecondary">
                  Our welcoming reception area where patients feel at ease.
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      {/* Patient Testimonials Section */}
      <MKBox>
        <MKTypography variant="h4" color="Primary" gutterBottom>
          Patient Testimonials
        </MKTypography>
        <Grid container spacing={4} justifyContent="center">
          {/* Example Testimonial 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={bgImage}
                alt="Happy Patient"
                sx={{ width: 100, height: 100, borderRadius: '50%', margin: 'auto' }}
              />
              <CardContent>
                <MKTypography variant="h6" color="Primary" gutterBottom>
                  John Doe
                </MKTypography>
                <MKTypography variant="body2" color="textSecondary">
                  "The team at this clinic really made me feel comfortable. My teeth look great after the whitening treatment!"
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
          {/* Example Testimonial 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={bgImage}
                alt="Happy Patient"
                sx={{ width: 100, height: 100, borderRadius: '50%', margin: 'auto' }}
              />
              <CardContent>
                <MKTypography variant="h6" color="Primary" gutterBottom>
                  Jane Smith
                </MKTypography>
                <MKTypography variant="body2" color="textSecondary">
                  "I had a great experience with my dental implants. The process was smooth, and the results exceeded my expectations!"
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
          {/* Example Testimonial 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={bgImage}
                alt="Happy Patient"
                sx={{ width: 100, height: 100, borderRadius: '50%', margin: 'auto' }}
              />
              <CardContent>
                <MKTypography variant="h6" color="Primary" gutterBottom>
                  Mark Johnson
                </MKTypography>
                <MKTypography variant="body2" color="textSecondary">
                  "The staff was friendly and professional. I was thrilled with the results of my smile makeover!"
                </MKTypography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default GallerySection;
