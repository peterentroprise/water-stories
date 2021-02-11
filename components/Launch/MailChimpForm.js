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
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    backgroundColor: "white",
  },
}));

const MailChimpForm = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/mailchimp", { email, name });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "480px",
      }}
    >
      <Box
        sx={{
          paddingLeft: 2,
          paddingRight: 2,
        }}
      >
        <Typography sx={{ color: "white", textAlign: "center" }} variant="h5">
          Subscribe For Updates
        </Typography>
        <Box
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography
            sx={{ color: "white", textAlign: "center" }}
            variant="body"
          >
            Be the first to get updates, test beta versions
          </Typography>
          <br />
          <Typography
            sx={{ color: "white", textAlign: "center" }}
            variant="body"
          >
            and learn moreabout water cycle resotration
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          paddingTop: 2,
          paddingBottom: 1,
        }}
      >
        <TextField
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          paddingTop: 1,
          paddingBottom: 2,
        }}
      >
        <TextField
          className={classes.textField}
          InputProps={{
            className: classes.input,
          }}
          fullWidth
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="large"
          disabled={state === "LOADING"}
          sx={{ color: "white", borderColor: "white" }}
          variant="outlined"
          onClick={subscribe}
        >
          {state === "LOADING" ? "Loading" : "Sign Me Up!"}
        </Button>
      </Box>
      <br />
      {state === "ERROR" && (
        <Typography sx={{ color: "white", textAlign: "center" }}>
          {errorMessage}
        </Typography>
      )}
      {state === "SUCCESS" && (
        <Typography sx={{ color: "white", textAlign: "center" }}>
          Success!
        </Typography>
      )}
    </Box>
  );
};

export default MailChimpForm;
