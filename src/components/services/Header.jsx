import { Box, Grid } from "@mui/material";
import monday from "../../assets/monday.png";
import oracle from "../../assets/oracle.png";
import morpheus from "../../assets/morpheus.png";
import samsung from "../../assets/samsung.png";
import segment from "../../assets/segment.png";

export const Header = () =>{
    return (
        <Box sx={{marginTop:'-4rem',marginBottom:'4rem'}}>
            <Box sx={{textAlign:'center',fontSize:'1.5rem',fontWeight:'650',paddingBottom:'1.7rem'}}>
                Trusted By Over 100+ Startups and freelance business
            </Box>
        
        <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0rem 7rem 0rem 7rem",
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
          alt="oracle"
          src={oracle}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="morpheus"
          src={morpheus}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="morpheus"
          src={morpheus}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="samsung"
          src={samsung}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="monday"
          src={monday}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
        <img
          alt="segment"
          src={segment}
          style={{
            width: "8rem",
            height: "auto",
            padding: "0.5rem",
            margin: "auto",
          }}
        />
      </Grid>
    </Box>
    </Box>
    )
}

