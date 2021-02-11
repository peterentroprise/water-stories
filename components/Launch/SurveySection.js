import { Container, Box, Typography, Button } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Link from "../Link";

const SurveySection = () => {
  const matches = useMediaQuery("(min-width:600px)");
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
          <Typography sx={{ color: "white" }} variant="h5" align="center">
            We Need Your Feedback
          </Typography>
        </Box>
        {(matches && (
          <Box sx={{ paddingTop: 1, paddingLeft: 6, paddingRight: 6 }}>
            <Typography sx={{ color: "white" }} variant="body1" align="center">
              Help us shape a new community with our digital ecosystem.
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1" align="center">
              Fill out the short survey below to help us understand what you
              want in this platform.
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1" align="center">
              Together we can design better features, courses, and stories
              relevant to your needs.
            </Typography>
          </Box>
        )) || (
          <Box sx={{ paddingTop: 1 }}>
            <Typography
              sx={{ color: "white", paddingLeft: 6, paddingRight: 6 }}
              variant="body1"
              align="left"
            >
              Help us shape a new community with our digital ecosystem. Fill out
              the short survey below to help us understand what you want in this
              platform so we can better design features, courses, and stories
              relevant to your needs.
            </Typography>
          </Box>
        )}

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
