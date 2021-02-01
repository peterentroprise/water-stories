import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";

const Section2 = () => {
  return (
    <>
      <Box sx={{ width: { xs: "100%", md: "50%" }, p: 3 }}>
        <Typography variant="h6">
          A Message From Zach Weiss of Elemental Ecosystems
        </Typography>
        <br />
        <Typography>
          Over the past decade in water restoration, one of the most common
          questions we've heard is, “How can I learn to do what Elemental
          Ecosystems does?” Knowing our limits of availability and need for
          water retention work at scale, we have begun to dream up an online
          education platform to empower people to realize their true potential
          working with water, and a better common future. Our current concept is
          to build an online learning platform focusing entirely on water cycle
          restoration. Elements may include paid online courses, community
          forums, digital stories, customized mentorship, and simulation games.
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <img style={{ width: "100%" }} src="/images/launch2.jpg" />
      </Box>
    </>
  );
};

export default Section2;
