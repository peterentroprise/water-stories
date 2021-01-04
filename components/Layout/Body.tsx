import React, { ReactNode } from "react";
import Container from "@material-ui/core/Container";

type Props = {
  children: ReactNode;
};

const Body = ({ children }: Props) => (
  <Container maxWidth="sm">{children}</Container>
);

export default Body;
