import { useRef } from "react";
import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import TopSection from "./TopSection";
import ZachSection from "./ZachSection";
import SubscribeSection from "./SubscribeSection";
import VideoSection from "./VideoSection";
import SurveySection from "./SurveySection";

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
          <TopSection
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
          <VideoSection />
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
          <SurveySection />
        </Box>
        <Box
          ref={infoRef}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <ZachSection />
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
          <SubscribeSection />
        </Box>
      </div>
    </Container>
  );
};

export default LaunchWrapper;
