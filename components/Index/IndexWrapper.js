import { Typography } from "@material-ui/core";

import CardWrapper from "../Card/CardWrapper";
import Logo from "../Logo";

const IndexWrapper = () => {
  return (
    <>
      <Logo />
      <CardWrapper title="Echoing Tales of Water">
        <Typography>
          Around the world there are countless well-meaning people who wish to
          do well by themselves, their environment, and others, but they don’t
          know what to do or how to do it.
        </Typography>
        <br />
        <Typography>
          We seek to impart on these individuals the understanding, experience,
          connections, and community to create meaningful change within the
          water cycle.
        </Typography>
        <br />
        <Typography>
          Water Stories brings awareness to the danger of the watershed death
          spiral and to the beauty of the new water paradigm. It empowers people
          to connect with one another and bring water work into their lives in a
          meaningful way that’s right for them.
        </Typography>
      </CardWrapper>
    </>
  );
};

export default IndexWrapper;
