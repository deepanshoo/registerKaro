import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../assets/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";

export const Navbar = () => {
  return (
    <Box>
      <Box
        sx={{
          background: "#1C4670",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          color: "white",
          paddingRight: { xs: "none", sm: "5rem" },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: { xs: "12px", sm: "16px" },
          }}
        >
          <MailIcon /> &nbsp; www.registerkaro.com &nbsp; | &nbsp;
        </Typography>
        &nbsp;
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: { xs: "12px", sm: "16px" },
          }}
        >
          <PhoneEnabledIcon /> &nbsp;+918447746183 &nbsp; | &nbsp;
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "initial" },
          }}
        >
          <InstagramIcon sx={{ margin: "0px 0.5rem" }} />
          <FacebookRoundedIcon sx={{ margin: "0px 0.5rem" }} />
          <TwitterIcon sx={{ margin: "0px 0.5rem" }} />
          <PinterestIcon sx={{ margin: "0px 0.5rem" }} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: { xs: "auto 1rem", sm: "auto 5rem" },
          height: "70px",
        }}
      >
        <Box
          sx={{
            display: {
              xs: "initial",
              sm: "initial",
              md: "none",
              lg: "none",
            },
          }}
        >
          <MenuIcon />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "initial" },
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "auto", width: "13rem" }}
          />
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <a href="/" className="navbar-links">
            Home
          </a>
          <a href="/" className="navbar-links">
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Our Serivces <KeyboardArrowDownIcon />
            </span>
          </a>
          <a href="/" className="navbar-links">
            Blog
          </a>
          <a href="/" className="navbar-links">
            Contact Us
          </a>
          <a href="/" className="navbar-links">
            About Us
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ margin: "auto 1rem" }} />
          <Button
            variant="contained"
            sx={{
              background: "#FFA229",
              height: "46px",
              width: "157px",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                background: "#FFA229",
              },
            }}
          >
            Talk to Expert
          </Button>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
