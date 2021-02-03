import {
  Card,
  CardContent,
  TextField,
  Box,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";
import axios from "axios";

import { useState } from "react";
import Link from "../Link";

const MailChimpForm = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/mailchimp", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <Box>
      <Card sx={{ minWidth: 340 }}>
        <CardContent
          sx={{
            paddingTop: 3,
          }}
        >
          <Typography variant="h6">Subscribe For Updates</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              disabled={state === "LOADING"}
              variant="contained"
              onClick={subscribe}
            >
              {state === "LOADING" ? "Loading" : "Subscribe"}
            </Button>
          </Box>

          {state === "ERROR" && <Typography>{errorMessage}</Typography>}
          {state === "SUCCESS" && <Typography>Success!</Typography>}
        </CardContent>
      </Card>
    </Box>
  );
};

export default MailChimpForm;
