import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";

const LaunchWrapper = () => {
  return (
    <Container>
      <Box
        style={{
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <Typography>
          Around the world there are countless well-meaning people who wish to
          do well by themselves, their environment, and others, but they don’t
          know what to do or how to do it.
        </Typography>
        <br />
        <Typography>
          We seek to impart on these individuals the understanding, experience,
          connections, and community to create meaningful change within the
          water cycle.
        </Typography>
        <br />
        <Typography>
          Water Stories brings awareness to the danger of the watershed death
          spiral and to the beauty of the new water paradigm. It empowers people
          to connect with one another and bring water work into their lives in a
          meaningful way that’s right for them.
        </Typography>
        <br />
        <Link href="/api/login" passHref>
          <Button elevation={0} variant="contained" color="primary">
            Sign Up
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default LaunchWrapper;
