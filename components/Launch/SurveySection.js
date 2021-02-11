import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";

const SurveySection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "420px",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/launch3.jpg')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ position: "absolute", p: 2 }}>
        <Box sx={{ p: 1 }}>
          <Typography sx={{ color: "white" }} variant="h6" align="center">
            We Need Your Feedback
          </Typography>
        </Box>
        <Box sx={{ paddingTop: 1 }}>
          <Typography
            sx={{ color: "white", paddingLeft: 6, paddingRight: 6 }}
            variant="body1"
            align="center"
          >
            Help us shape a new community with our digital ecosystem. Fill out
            the short survey below to help us understand what you want in this
            platform so we can better design features, courses, and stories
            relevant to your needs.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: 1,
            paddingTop: 6,
          }}
        >
          <Box sx={{ p: 1 }}>
            <Link href="https://www.surveymonkey.com/r/EELEARN" passHref>
              <Button
                size="large"
                sx={{ color: "white", borderColor: "white" }}
                variant="outlined"
              >
                Take The Survey
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SurveySection;
