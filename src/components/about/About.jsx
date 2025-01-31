import { Box, Button, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AboutGroup from "../../assets/AboutGroup.png";
import AboutSideVector from "../../assets/AboutSideVector.png";
import AboutDot from "../../assets/AboutDot.png";
import React from "react";

export const About = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {" "}
      <Box
        sx={{
          display: { xs: "grid", sm: "grid", md: "flex", lg: "flex" },
          margin: { xs: "2rem", sm: "4rem" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
            margin: "1rem",
          }}
        >
          <Typography
            sx={{ color: "#EB8D15", margin: "1rem 0px" }}
            variant="body1"
          >
            WELCOME TO REGISTERKARO.IN
          </Typography>
          <Typography
            sx={{ fontSize: "32px", fontWeight: "bold", color: "#EB8D15" }}
            variant="body1"
          >
            <span style={{ color: "#272D37" }}>About </span> Register Karo
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#0D1216", margin: "1rem 0px" }}
          >
            We have been using Intelegencia as our DevOps vendor for our field
            service applications over the last couple of years and I’m extremely
            pleased with their performance, ability to execute, and willingness
            to adapt in our ever changing environment. Perry is an outstanding
            leader who is fanatical about customer satisfaction. He has built a
            solid team which has consistently delivered on projects thereby
            exceeding everyone’s expectations.
            <br />
            <br />I would strongly recommend their services to any organization
            that is looking for solid, reliable, and predictable outcomes.
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#1C4670",
              margin: "1rem 0px",
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
            Learn More &nbsp;
            <span
              style={{
                display: "inline-block",
                transform: "rotate(90deg)",
                //   transformOrigin: "left top",
              }}
            >
              <ArrowCircleUpIcon />
            </span>
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "100%", lg: "50%" },
            margin: "auto 1rem",
          }}
        >
          <img
            alt="group"
            src={AboutGroup}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
          <img
            alt="graphic"
            src={AboutSideVector}
            style={{ height: "32rem", width: "auto" }}
          />
          <Box sx={{ position: "absolute", bottom: 35, right: 0, zIndex: -10 }}>
            <img
              alt="graphic"
              src={AboutDot}
              style={{ height: "8rem", width: "auto" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
