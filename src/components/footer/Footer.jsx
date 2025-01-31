import { Box, Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import arrow from "../../assets/uparrow.png";
import React from "react";

export const Footer = () => {
  return (
    <Box sx={{ background: "#011B5B", padding: "4rem 0px", color: "white" }}>
      <Grid container item xs={11} sm={11} md={10.5} lg={10.5} margin="auto">
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={2.5}
          lg={2.5}
          sx={{ marginRight: "2rem" }}
        >
          <Box>
            <Typography
              sx={{ color: "#AAB5CD", width: "100%", padding: "1rem 0px 0px" }}
              variant="body1"
            >
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                marginTop: "1rem",
              }}
            >
              <FacebookRoundedIcon
                fontSize="medium"
                sx={{ cursor: "pointer" }}
              />
              &nbsp; &nbsp;
              <GoogleIcon fontSize="medium" sx={{ cursor: "pointer" }} />
              &nbsp; &nbsp;
              <AppleIcon fontSize="medium" sx={{ cursor: "pointer" }} />
              &nbsp; &nbsp;
              <InstagramIcon fontSize="medium" sx={{ cursor: "pointer" }} />
            </Box>
          </Box>
        </Grid>{" "}
        <Grid container item xs={12} sm={10} md={2.25} lg={2.25}>
          <Typography
            sx={{
              color: "#FFA229",
              fontWeight: "bold",
              width: "100%",
              padding: "1rem 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            START A BUSINESS
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Features
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Solutions
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Integrations
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Enterprise
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Solutions
          </Typography>{" "}
          <br />
        </Grid>{" "}
        <Grid container item xs={12} sm={10} md={3} lg={3}>
          <Typography
            sx={{
              color: "#FFA229",
              fontWeight: "bold",
              width: "100%",
              padding: "1rem 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            GOVERNMENT REGISTRATION
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Partners
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Community
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Developers
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            App
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Blog
          </Typography>{" "}
          <br />
        </Grid>{" "}
        <Grid container item xs={12} sm={10} md={2.25} lg={2.25}>
          <Typography
            sx={{
              color: "#FFA229",
              fontWeight: "bold",
              width: "100%",
              padding: "1rem 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            COMPLIANCE & TAX
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Channels
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Scale
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Watch the Demo
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Our Competition
          </Typography>{" "}
          <br />
        </Grid>{" "}
        <Grid container item xs={12} sm={10} md={1.5} lg={1.5}>
          <Typography
            sx={{
              color: "#FFA229",
              fontWeight: "bold",
              width: "100%",
              padding: "1rem 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            BIS & CDSCO
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            About Us
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            News
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Leadership
          </Typography>{" "}
          <br />
          <Typography
            sx={{
              color: "#AAB5CD",
              width: "100%",
              padding: "5px 0px",
              cursor: "pointer",
            }}
            variant="body1"
          >
            Media Kit
          </Typography>{" "}
          <br />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", textAlign: "center", marginTop: "3rem" }}>
        <img
          alt="arrow Up"
          src={arrow}
          style={{ width: "56px", height: "56px" }}
        />
        <Typography
          variant="body1"
          sx={{ color: "#AAB5CD", padding: "1rem 0px" }}
        >
          © 2024 Registerkaro. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};
