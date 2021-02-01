import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const LaunchWrapper = () => {
  return (
    <Container disableGutters>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Section1 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Section2 />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Section3 />
        </Box>
      </div>
    </Container>
  );
};

export default LaunchWrapper;
