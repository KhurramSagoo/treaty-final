import * as React from "react";
import photo1 from "../assets/chat.png";
import photo2 from "../assets/medication.png";
import photo3 from "../assets/Schedule.png";
import photo4 from "../assets/sliceing.png";
import photo5 from "../assets/Track-Visit.png";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Icons() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        style={{
          marginTop: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        container
        spacing={{ xs: 4, md: 4, sm: 4 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {/* {Array.from(Array(6)).map((_, index) => ( */}
        <Grid
          item
          xs={12}
          sm={6}
          md={2.2}
          //    key={index}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="container-image"
              style={{ width: "50px", marginRight: "30px" }}
              src={photo1}
              alt="side mobile photo"
            />
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2.2}
          //    key={index}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="container-image"
              style={{ width: "50px", marginRight: "30px" }}
              src={photo2}
              alt="side mobile photo"
            />
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2.2}
          //    key={index}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="container-image"
              style={{ width: "50px", marginRight: "30px" }}
              src={photo3}
              alt="side mobile photo"
            />
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2.2}
          //    key={index}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="container-image"
              style={{ width: "50px", marginRight: "30px" }}
              src={photo4}
              alt="side mobile photo"
            />
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2.2}
          //    key={index}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="container-image"
              style={{ width: "50px", marginRight: "30px" }}
              src={photo5}
              alt="side mobile photo"
            />
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
