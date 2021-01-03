import Link from "next/link";
import Layout from "../components/Layout";
import { Button, Typography } from "@material-ui/core";

import Link from "../Link";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Typography>About</Typography>
    <Typography>This is the about page.</Typography>
    <Link href="/" passHref>
      <Button variant="contained" color="secondary">
        Go To Index
      </Button>
    </Link>
  </Layout>
);

export default AboutPage;
