import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = (cards) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div style={{ padding: '20px' }}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id}>
            <Card sx={{ margin: '10px', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;