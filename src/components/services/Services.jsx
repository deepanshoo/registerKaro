import { Box, Button, Grid, Typography } from "@mui/material";
import { serviceData } from "../../data/appData.js";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import React from "react";
import "./index.css";

export const Services = () => {
  return (
    <Box sx={{ background: "#FAFAFA" }}>
      <Grid container item xs={12} sm={11} md={10} lg={10} margin="auto">
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            textAlign: "center",
            padding: "3rem 0px",
          }}
        >
          <Typography variant="body" sx={{ color: "#EB8D15", margin: "1rem" }}>
            WELCOME TO REGISTERKARO.IN
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#272D37", margin: "1rem", fontWeight: "600" }}
          >
            Explore Our Services
          </Typography>
          <Grid container item xs={12} sm={12} md={12} lg={12} margin="auto">
            {serviceData.map((item, i) => (
              <Grid
                container
                item
                xs={11}
                sm={6}
                md={4}
                lg={4}
                key={i}
                margin="2rem auto"
              >
                <Box
                  className={
                    i === 0 || i === 1 || i === 3 || i === 4
                      ? "service-card"
                      : ""
                  }
                  sx={{
                    padding: "1rem",
                    borderRight:
                      i === 0 || i === 1 || i === 3 || i === 4
                        ? "1px solid #e1dede"
                        : "",
                  }}
                >
                  <Box sx={{ width: "100%", margin: "1rem 0px" }}>
                    <img
                      alt="logo"
                      src={item.imageUrl}
                      style={{ width: "5rem", height: "auto" }}
                    />
                  </Box>
                  <br />
                  <Typography
                    sx={{
                      width: "100%",
                      color: "#000000",
                      fontWeight: "bold",
                      fontSize: "20px",
                      margin: "1rem 0px",
                    }}
                  >
                    {item.heading}
                  </Typography>
                  <br />
                  <Box sx={{ width: "100%", margin: "1rem auto" }}>
                    <Typography
                      sx={{
                        // width: "275px",
                        color: "#282728",
                        fontSize: "18px",
                        margin: "auto",
                      }}
                    >
                      {item.subHeading}
                    </Typography>
                  </Box>
                  <br />
                  <Typography
                    variant="body1"
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#001038",
                      fontWeight: "600",
                      margin: "1rem 0px",
                      cursor: "pointer",
                    }}
                  >
                    Learn More &nbsp;{" "}
                    <span
                      style={{
                        display: "inline-block",
                        transform: "rotate(90deg)",
                        //   transformOrigin: "left top",
                      }}
                    >
                      <ArrowCircleUpIcon />
                    </span>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            variant="contained"
            sx={{
              background: "#1C4670",
              height: "50px",
              width: "162px",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: "#1C4670",
              },
            }}
          >
            See All Services
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
