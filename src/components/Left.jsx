import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MarginBox = styled(Box)({
  margin: "25px",
});

export default function Left() {
  const gridStyle = {
    height: "100%",
    width: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const style = {
    margin: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const msgStyle = {
    margin: "20px",
    width: "88%",
    padding: "0",
  };

  return (
    <Box sx={{ padding: "20px", display: "flex" }}>
      <Grid
        container
        // spacing={2} direction={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={{ ...gridStyle, flex: 1 }}>
            <Typography style={{ color: "skyblue" }} variant="h6">
              STAY IN TOUCH
            </Typography>
            <Typography variant="h5">Contact US</Typography>
            <MarginBox>
              <Typography variant="body1">
                <PhoneIcon style={{ marginRight: "10px" }} /> Lorem, ipsum
                dolor.
              </Typography>
            </MarginBox>
            <MarginBox>
              <Typography variant="body1">
                <EmailIcon style={{ marginRight: "10px" }} /> Lorem, ipsum
                dolor.
              </Typography>
            </MarginBox>
            <MarginBox>
              <Typography variant="body1">
                <EmailIcon style={{ marginRight: "10px" }} /> Lorem, ipsum
                dolor.
              </Typography>
            </MarginBox>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={gridStyle}>
            <TextField
              sx={style}
              id="outlined-basic"
              label="NAME*"
              variant="outlined"
            />
            <TextField
              sx={style}
              id="outlined-basic"
              label="EMAIL*"
              variant="outlined"
            />
            <TextField
              sx={style}
              id="outlined-basic"
              label="SUBJECT*"
              variant="outlined"
            />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item sx={gridStyle}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              defaultValue=""
              sx={msgStyle}
            />
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ position: "relative", right: "33px" }}
              >
                Send Message
              </Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
