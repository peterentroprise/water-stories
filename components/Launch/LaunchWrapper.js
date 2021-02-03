import { useRef } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const LaunchWrapper = () => {
  const infoRef = useRef();
  const subscribeRef = useRef();

  function handleScrollToInfo() {
    infoRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollToSubscribe() {
    subscribeRef.current.scrollIntoView({ behavior: "smooth" });
  }

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
          <Section1
            handleScrollToInfo={handleScrollToInfo}
            handleScrollToSubscribe={handleScrollToSubscribe}
          />
        </Box>
        <Box
          ref={infoRef}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Section2 />
        </Box>
        <Box
          ref={subscribeRef}
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
