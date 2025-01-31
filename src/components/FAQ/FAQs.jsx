import React from "react";
import { Container, Typography, Card, CardContent, Avatar, Grid, Button, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Harris",
    position: "President and CEO, PrintReach, USA",
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute iure sint amet occaecat cupidatat non proident.",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: "Sarah Smith",
    position: "CTO, TechWave, UK",
    review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute iure sint amet occaecat cupidatat non proident.",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const faqItem = "Can I recover deleted files from desktop with this software?";

const FAQs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container sx={{ my: 5 }}>
        <Box sx={{background: "#1C4670",paddingLeft:8,paddingBottom:8}}>
      <Typography variant="h5" align="left" sx={{fontWeight:'bold',color:'white'}} gutterBottom>
        What People Say About Us
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ p: 3, textAlign: "left",boxShadow: 3, borderRadius: 2 }}>
            <CardContent s>
              <Typography variant="body1">{testimonial.review}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>{testimonial.rating}</Typography>
              <Grid container justifyContent="left" alignItems="left" sx={{ mt: 2 }}>
                <Avatar>{testimonial.name.charAt(0)}</Avatar>
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  {testimonial.name}
                </Typography>
              </Grid>
              <Typography variant="body2" color="textSecondary">
                {testimonial.position}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
      </Box>

      <Typography variant="subtitle2" align="center" color="#EB8D15" marginTop='5rem'>
        FAQ
    </Typography>
    <Typography variant="h4" align="center" style={{fontWeight:'600',marginBottom:'5rem'}} gutterBottom>
        Frequently Asked Questions
    </Typography>
      {[...Array(6)].map((_, index) => (
        <Accordion key={index} sx={{ mt: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{rotate:'-90deg'}} />}>
            <Typography>{faqItem}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, our software provides powerful recovery features to restore your lost files easily.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <div style={{ textAlign: "center", marginTop: 20,marginBottom:20 }}>
        <Button variant="contained" sx={{
              background: "#1C4670",
              height: "50px",
              width: "9rem",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: "#1C4670",
              },
            }}>
          Show more →
        </Button>
      </div>
    </Container>
  );
};

export default FAQs;
