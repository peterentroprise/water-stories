import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const BodyComponent = ({ children }: Props) => <div>{children}</div>;

export default BodyComponent;
