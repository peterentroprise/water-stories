import * as React from "react";
import { Box, Card, CardContent } from "@material-ui/core";

import { ThreadInterface } from "../../interfaces";
import MessagesWrapper from "../Messages/MessagesWrapper";

type ListDetailProps = {
  item: ThreadInterface;
};

const ThreadDetail = ({ item: thread }: ListDetailProps) => {
  return (
    <>
      <Box my={3}>
        <Card variant="outlined">
          <CardContent>
            <MessagesWrapper thread={thread} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ThreadDetail;
