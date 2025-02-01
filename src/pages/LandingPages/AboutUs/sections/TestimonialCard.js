import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

// Example of a TestimonialCard component
function TestimonialCard({ image, name, position, testimonial }) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        sx={{ objectFit: "cover", borderRadius: "50%" }}
      />
      <CardContent>
        <MKTypography variant="h6" color="Red" align="center">
          {name}
        </MKTypography>
        <MKTypography variant="body2" color="textSecondary" align="center" sx={{ mb: 2 }}>
          {position}
        </MKTypography>
        <MKTypography variant="body1" color="Red" align="center">
          "{testimonial}"
        </MKTypography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;
