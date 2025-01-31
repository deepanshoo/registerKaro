import React from "react";
import coinbase from "../../assets/coinbase.png";
import spotify from "../../assets/spotify.png";
import slack from "../../assets/slack.png";
import dropbox from "../../assets/dropbox.png";
import webflow from "../../assets/webflow.png";
import zoom from "../../assets/zoom.png";
import { Box, Grid } from "@mui/material";

export const Customer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "4rem",
        margin: "auto",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        margin="auto"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          alt="coinbase"
          src={coinbase}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="spotify"
          src={spotify}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="slack"
          src={slack}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="dropbox"
          src={dropbox}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="webflow"
          src={webflow}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="zoom"
          src={zoom}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
      </Grid>
    </Box>
  );
};
