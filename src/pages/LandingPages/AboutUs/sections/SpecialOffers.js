import React from 'react';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';

function SpecialOffers() {
  return (
    <MKBox
      sx={{
        backgroundColor: '#f7f7f7',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <MKTypography variant="h3" color="Primary" gutterBottom>
        Special Offers & Promotions
      </MKTypography>
      <MKTypography variant="body1" color="textSecondary" paragraph>
        Take advantage of our exclusive offers to give your smile the care it deserves!
      </MKTypography>

      <MKBox display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
        {/* Offer 1: Free Consultation */}
        <MKBox
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 'lg',
            boxShadow: 2,
            padding: '30px',
            width: { xs: '100%', sm: '45%', md: '30%' },
          }}
        >
          <MKTypography variant="h5" color="primary" gutterBottom>
            Free Initial Consultation
          </MKTypography>
          <MKTypography variant="body2" color="textSecondary" mb={2}>
            Get your first consultation free! No hidden charges. Let’s discuss your dental goals.
          </MKTypography>
          <MKButton variant="gradient" color="info" fullWidth>
            Book Now
          </MKButton>
        </MKBox>

        {/* Offer 2: Discount on Teeth Whitening */}
        <MKBox
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 'lg',
            boxShadow: 2,
            padding: '30px',
            width: { xs: '100%', sm: '45%', md: '30%' },
          }}
        >
          <MKTypography variant="h5" color="primary" gutterBottom>
            25% Off on Teeth Whitening
          </MKTypography>
          <MKTypography variant="body2" color="textSecondary" mb={2}>
            Brighten your smile with our advanced teeth whitening service at 25% off!
          </MKTypography>
          <MKButton variant="gradient" color="info" fullWidth>
            Claim Offer
          </MKButton>
        </MKBox>

        {/* Offer 3: Limited-Time Offer on Dental Implants */}
        <MKBox
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: 'lg',
            boxShadow: 2,
            padding: '30px',
            width: { xs: '100%', sm: '45%', md: '30%' },
          }}
        >
          <MKTypography variant="h5" color="primary" gutterBottom>
            Limited-Time Offer on Dental Implants
          </MKTypography>
          <MKTypography variant="body2" color="textSecondary" mb={2}>
            Save up to $500 on dental implants! Hurry, offer ends soon.
          </MKTypography>
          <MKButton variant="gradient" color="info" fullWidth>
            Schedule Consultation
          </MKButton>
        </MKBox>
      </MKBox>

      {/* Urgency Section */}
      <MKBox sx={{ marginTop: '30px', textAlign: 'center' }}>
        <MKTypography variant="h5" color="error" gutterBottom>
          Hurry! Limited Time Only!
        </MKTypography>
        <MKTypography variant="body1" color="textSecondary">
          These offers are valid for a limited time. Don’t miss out on saving money while improving your smile!
        </MKTypography>
      </MKBox>
    </MKBox>
  );
}

export default SpecialOffers;
