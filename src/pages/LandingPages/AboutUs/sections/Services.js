import React from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import generalDentistryIcon from "assets/images/GeneralDentistry.jpg";
import orthodonticsIcon from "assets/images/Orthodontics.jpg";
import cosmeticDentistryIcon from "assets/images/CosmeticDentistry.jpg";
import pediatricDentistryIcon from "assets/images/PediatricDentistry.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";  // Importing useTranslation hook

const services = [
    {
        key: "generalDentistry",
        image: generalDentistryIcon,
        link: "/services/general-dentistry"
    },
    {
        key: "orthodontics",
        image: orthodonticsIcon,
        link: "/services/orthodontics"
    },
    {
        key: "cosmeticDentistry",
        image: cosmeticDentistryIcon,
        link: "/services/cosmetic-dentistry"
    },
    {
        key: "pediatricDentistry",
        image: pediatricDentistryIcon,
        link: "/services/pediatric-dentistry"
    },
    {
        key: "periodontics",
        image: pediatricDentistryIcon,
        link: "/services/periodontics"
    },
    {
        key: "endodontics",
        image: pediatricDentistryIcon,
        link: "/services/endodontics"
    },
    {
        key: "oralSurgery",
        image: pediatricDentistryIcon,
        link: "/services/oral-surgery"
    },
    {
        key: "dentalImplants",
        image: pediatricDentistryIcon,
        link: "/services/dental-implants"
    },
    {
        key: "teethWhitening",
        image: pediatricDentistryIcon,
        link: "/services/teeth-whitening"
    },
    {
        key: "sedationDentistry",
        image: pediatricDentistryIcon,
        link: "/services/sedation-dentistry"
    },
    {
        key: "crownsBridges",
        image: pediatricDentistryIcon,
        link: "/services/crowns-bridges"
    },
    {
        key: "oralHygieneEducation",
        image: pediatricDentistryIcon,
        link: "/services/oral-hygiene-education"
    },
];

const Services = () => {
    const { t } = useTranslation();  // Access the translation function

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <MKBox py={6}>
            <MKTypography variant="h3" align="center" mb={4}>
                {t("services.title")}  {/* Translated title */}
            </MKTypography>

            <style>
                {`
                    .slick-prev:before,
                    .slick-next:before {
                        color: #54ada8;
                    }
                    .slick-prev {
                        desplay: none;
                    }
                    .slick-next {
                        desplay: none;
                    }
                    .slick-dots li button:before {
                        color: purple; /* Custom color for dots */
                    }
                `}
            </style>

            <MKBox py={6}>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} style={{ padding: "10px" }}>
                            <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={service.image}
                                    title={t(`services.title`, { defaultValue: service.title })}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {t(`services.${service.key}.title`)} 
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {t(`services.${service.key}.description`)}  
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" href={service.link}>
                                        {t("services.learnMore")}
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </MKBox>
        </MKBox>
    );
};

export default Services;
