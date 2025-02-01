import React from "react";
import { Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Your Dental Clinic Team Images
import MahmoudAtef from "assets/images/mahmoud-atef.jpg";
import AhmedDahy from "assets/images/ahmed-dahy.webp";
import MahmoudAli from "assets/images/mahmoud-ali.png";
import OmarGameel from "assets/images/omar-gameel.webp";

function Team() {
  const { t } = useTranslation(); // Use the translation hook

  // Team member data (retrieving each member using the updated keys from the JSON)
  const teamMembers = [
    {
      name: t("team.drMahmoudAtef.name"),
      position: t("team.drMahmoudAtef.specialty"),
      image: MahmoudAtef,
      description: t("team.drMahmoudAtef.description"),
    },
    {
      name: t("team.drAhmedDahy.name"),
      position: t("team.drAhmedDahy.specialty"),
      image: AhmedDahy,
      description: t("team.drAhmedDahy.description"),
    },
    {
      name: t("team.drMahmoudAli.name"),
      position: t("team.drMahmoudAli.specialty"),
      image: MahmoudAli,
      description: t("team.drMahmoudAli.description"),
    },
    {
      name: t("team.drOmarGameel.name"),
      position: t("team.drOmarGameel.specialty"),
      image: OmarGameel,
      description: t("team.drOmarGameel.description"),
    }
  ];

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              {t("team.header")} {/* Translated header */}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {t("team.description")} {/* Translated description */}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} lg={6} key={index}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={member.image}
                  name={member.name}
                  position={{ color: "info", label: member.position }}
                  description={member.description}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
