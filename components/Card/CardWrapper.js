import * as React from "react";
import { Box, Card, CardHeader, CardContent } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CardWrapper = ({ children, title }) => {
  const classes = useStyles();

  return (
    <Box>
      <Card variant="outlined">
        <CardHeader title={title} />
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

export default CardWrapper;
