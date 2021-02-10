import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import MailChimpForm from "./MailChimpForm";

const SubscribeSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "420px",
          background: `url('/images/launch3.jpg')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ position: "absolute" }}>
        <MailChimpForm />
      </Box>
    </>
  );
};

export default SubscribeSection;
