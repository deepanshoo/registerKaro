import { Box, Button, Typography, styled } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Star from "../../assets/Star.png";
import React from "react";
import group from "../../assets/group.png";
import handShake from "../../assets/handshake.png";
import youTube from "../../assets/youtube.png";
import heroBanner from "../../assets/herobanner.png";
import "./index.css";

export const Hero = () => {
  const GradientTypography = styled(Typography)({
    background: "linear-gradient(135deg, #FFA229 15%, #1C4670 70%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  });

  return (
    <Box>
      <Box sx={{ position: "relative", height: { xs: "60rem", sm: "40rem" } }}>
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", sm: "none", md: "none", lg: "initial" },
          }}
        >
          <img
            alt="banner"
            src={heroBanner}
            style={{ width: "100%", height: "auto", zIndex: -10 }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: {
              xs: "1rem",
              sm: "2rem",
              md: "5rem",
              lg: "5rem",
            },
            marginRight: {
              xs: "1rem",
              sm: "2rem",
              md: "5rem",
              lg: "0px",
            },
            width: {
              xs: "fit-content",
              sm: "fit-content",
              md: "fit-content",
              lg: "50%",
            },
            zIndex: 10,
            position: "absolute",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              fontWeight: "bold",
              margin: "2rem 0px 1rem",
            }}
            variant="body2"
          >
            <StarIcon sx={{ color: "#f1c100" }} />
            &nbsp; Google Rating &nbsp;
            <img
              alt="star"
              src={Star}
              style={{ height: "1rem", width: "auto" }}
            />
          </Typography>
          <Typography
            variant="h3"
            className="text-with-line"
            sx={{ fontWeight: "500", margin: "1.5rem 0px" }}
          >
            Your trusted partner for compliance business needs
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#4F4F4F", margin: "1.5rem 0px" }}
          >
            An online business compliance platform that helps entrepreneurs and
            other individuals with various,
            <strong>registrations, tax filings,</strong> and other
            <strong>legal matters.</strong>
          </Typography>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "left",
              alignItems: "center",
              margin: "1rem 0px",
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Box
                      sx={{
                        border: "1px solid #4F4F4F",
                        width: "15px",
                        height: "15px",
                        margin: "2px",
                        borderRadius: "2px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        border: "1px solid #4F4F4F",
                        width: "15px",
                        height: "15px",
                        margin: "2px",
                        borderRadius: "2px",
                      }}
                    ></Box>
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        border: "1px solid #4F4F4F",
                        width: "15px",
                        height: "15px",
                        margin: "2px",
                        borderRadius: "2px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        border: "1px solid #4F4F4F",
                        width: "15px",
                        height: "15px",
                        margin: "2px",
                        borderRadius: "2px",
                      }}
                    ></Box>
                  </Box>
                </Box>
                <Box sx={{ marginLeft: "1rem" }}>
                  <GradientTypography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: "normal",
                    }}
                  >
                    4.5+
                  </GradientTypography>
                  <Typography variant="body2" sx={{ color: "#4F4F4F" }}>
                    Customer Rating
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                marginLeft: { xs: "0rem", sm: "2rem" },
                marginTop: { xs: "1rem", sm: "0px" },
              }}
            >
              <img
                alt="group"
                src={group}
                style={{ height: "3rem", width: "3rem" }}
              />
              <Box sx={{ marginLeft: "1rem" }}>
                <GradientTypography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "normal",
                  }}
                >
                  20,000+
                </GradientTypography>
                <Typography variant="body2" sx={{ color: "#4F4F4F" }}>
                  Clents
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                marginLeft: { xs: "0rem", sm: "2rem" },
                marginTop: { xs: "1rem", sm: "0px" },
              }}
            >
              <img
                alt="hand shake"
                src={handShake}
                style={{ height: "3rem", width: "3rem" }}
              />
              <Box sx={{ marginLeft: "1rem" }}>
                <GradientTypography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: "normal",
                  }}
                >
                  99.8%
                </GradientTypography>
                <Typography variant="body2" sx={{ color: "#4F4F4F" }}>
                  Financial Stability
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: "left",
              alignItems: "center",
              margin: "2rem 0px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "#1C4670",
                height: "50px",
                width: "200px",
                color: "white",
                fontWeight: "bold",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#1C4670",
                },
              }}
            >
              Talk to Expert
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginLeft: { xs: "0px", sm: "1rem" },
              }}
            >
              <img
                alt="you Tube"
                src={youTube}
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  margin: "1rem",
                }}
              />
              <Typography>See how it works</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
