import React, { ReactNode } from "react";
import Container from "@material-ui/core/Container";

type Props = {
  children?: ReactNode;
};

const BodyComponent = ({ children }: Props) => (
  <Container maxWidth="sm">{children}</Container>
);

export default BodyComponent;
