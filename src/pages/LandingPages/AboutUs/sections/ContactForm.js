// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MKButton from "components/MKButton";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTranslation } from "react-i18next";
// React Hook Form for form validation
import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission (e.g., sending the data to an email or API)
  };

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="light"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
    >
      <Container >
        <Grid container >
          <Grid item  xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" align="center">
              {t('home.getInTouch')}
            </MKTypography>
            <MKTypography variant="body2" color="secondary" align="center" opacity={0.8}>
            {t('home.contactMessage')}
            </MKTypography>
          </Grid>
        </Grid>
        
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3}>
                {/* Full Name */}
                <Grid item xs={12} md={6}>
                  <TextField
                    label={t('home.form.fullName')}
                    variant="outlined"
                    fullWidth
                    {...register('name', { required: 'Name is required' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                
                {/* Email Address */}
                <Grid item xs={12} md={6}>
                  <TextField
                    label={t('home.form.email')}
                    variant="outlined"
                    fullWidth
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address'
                      }
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid item xs={12} md={6}>
                  <TextField
                    label={t('home.form.phone')}
                    variant="outlined"
                    fullWidth
                    {...register('phone', { required: 'Phone number is required' })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message}
                  />
                </Grid>

                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    label={t('home.form.message')}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                </Grid>
                
                {/* Submit Button */}
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <MKButton variant="contained" color="primary" type="submit">
                    {t('home.form.send')}
                  </MKButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ContactForm;
