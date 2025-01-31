import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React from "react";

export const Subscribe = () => {
  const screenSize = window.innerWidth;
  return (
    <Box
      sx={{
        height: "330px",
        background: "linear-gradient(120deg,#FFA229 0%, #1C4670 70%)",
        color: "white",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          padding: {
            xs: "1rem 1rem",
            sm: "2rem 2rem",
            md: "2rem 2rem",
            lg: "2rem 2rem",
          },
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "-webkit-fill-available",
          margin: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            margin: "auto",
          }}
        >
          1% OF THE INDUSTRY
        </Typography>
        <Typography
          variant="h4"
          sx={{
            margin: "auto",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { xs: "2rem" },
          }}
        >
          Welcome to your new digital reality. Now.
        </Typography>
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <input
            type="email"
            label="Enter Your Email"
            style={{
              height: "46px",
              width: screenSize < 600 ? "200px" : "400px",
              // color: "#E5E5E7",
              // ":label": { color: "red" },
              borderRadius: "6px 0px 0px 6px",
              background: "#FFFFFF",
            }}
          />
          <button
            style={{
              height: "46px",
              width: "92px",
              borderRadius: "0px 6px 6px 0px",
              background: "#FFA229",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {[
            "Instant results",
            "User-friendly interface",
            "Personalized customization",
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: { xs: "0.5rem", sm: "2rem" },
              }}
            >
              <CheckCircleIcon />
              &nbsp; &nbsp;
              <Typography>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
