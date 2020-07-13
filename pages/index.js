import Link from "../components/Link";
import { useUser } from "../utils/auth/useUser";
import withApollo from "../lib/apollo";
// import CompositionComponent from "../components/composition/CompositionComponent";

import {
  Card,
  CardContent,
  Container,
  Box,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import { useState } from "react";

const askEndpoint = "https://haystack.entroprise.com/item/askquestion";

const askQuestion = async (payload) => {
  const response = await fetch(askEndpoint, {
    method: "POST",
    withCredentials: true,
    headers: {
      "x-api-key": "dd74decc-8825-4a49-b9bc-e4608249d612",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload),
  });
  return await response.json();
};

const Index = () => {
  const { user, logout } = useUser();

  const [question, setQuestion] = useState('Who are we?')
  const [answer, setAnswer] = useState()


  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleAskQuestion = async () => {
    const payload = {
      question: question,
    };
    const response = await askQuestion(payload);
    setAnswer(response)
  };

  if (!user) {
    return (
      <>
        <Container maxWidth="sm">
          <Box mt={3} mb={1}>
            <Card variant="outlined">
              <CardContent>
                <Box mt={2} mb={1}>
                  <Typography variant="h4">Entroprise</Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Typography>You are not signed in. </Typography>
                </Box>
                <Box mt={2} mb={1}>
                  <Link href={"/auth"}>Sign in</Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box mt={3} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <Box mt={2} mb={1}>
              <Link href={"/static"}>Static Page</Link>
            </Box>
            <Box mt={2} mb={1}>
              <Typography variant="h4" component="h1" gutterBottom>
                Entroprise SSR
              </Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Typography>You're signed in. Email: {user.email}</Typography>
            </Box>
            <Box mt={2} mb={1}>
              <Button
                disableElevation
                variant="contained"
                onClick={() => logout()}
              >
                Log out
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box mt={2} mb={1}>
        <Card variant="outlined">
          <CardContent>
            <TextField id="question" label="Question" variant="filled" value={question} onChange={handleChangeQuestion} fullWidth/>
            <Box mt={2} mb={1}>
              <Button disableElevation variant="contained" onClick={handleAskQuestion}>Ask Question</Button>
            </Box>
            {answer && <Typography>{answer}</Typography>}
            {/* <CompositionComponent/> */}
          </CardContent>
        </Card>
      </Box>

    </Container>
  );
};

export default withApollo({ ssr: true })(Index);
