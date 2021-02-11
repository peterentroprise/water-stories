import { Container, Box, Typography, Button } from "@material-ui/core";

import Link from "../Link";
import MailChimpForm from "./MailChimpForm";

const SubscribeSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "480px",
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/launch3.jpg')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></Box>
      <Box sx={{ position: "absolute", paddingTop: 6 }}>
        <MailChimpForm />
      </Box>
    </>
  );
};

export default SubscribeSection;
