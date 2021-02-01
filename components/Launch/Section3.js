import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import MailChimpForm from "./MailChimpForm";

const Section3 = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <img style={{ width: "100%" }} src="/images/launch3.jpg" />
      </Box>
      <Box sx={{ position: "absolute" }}>
        <MailChimpForm />
      </Box>
    </>
  );
};

export default Section3;
