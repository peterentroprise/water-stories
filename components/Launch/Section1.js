import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";

const Section1 = ({ handleScrollToInfo, handleScrollToSubscribe }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "420px",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/launch1.jpg')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ position: "absolute", p: 2 }}>
        <Box sx={{ p: 1 }}>
          <Typography sx={{ color: "white" }} variant="h3" align="center">
            Water Stories
          </Typography>
        </Box>
        <Box sx={{}}>
          <Typography sx={{ color: "white" }} variant="h6" align="center">
            an online learning platform focusing entirely on water cycle
            restoration
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Box sx={{ p: 1 }}>
            <Button variant="contained" onClick={handleScrollToSubscribe}>
              Subscribe For Updates
            </Button>
          </Box>
          <Box sx={{ p: 1 }}>
            <Button
              sx={{ color: "white", borderColor: "white" }}
              variant="outlined"
              onClick={handleScrollToInfo}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section1;
