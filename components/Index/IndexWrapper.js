import { Typography } from "@material-ui/core";

import CardWrapper from "../Card/CardWrapper";
import Logo from "../Logo";

const IndexWrapper = () => {
  return (
    <>
      <Logo />
      <CardWrapper title="Echoing Tales of Water">
        <Typography>
          In mainstream theories of natural language syntax, every
          syntactically-valid utterance can be extended to produce a new, longer
          one, because of recursion. If this process can be continued
          indefinitely, then there is no upper bound on the length of a
          well-formed utterance and the number of unique well-formed strings of
          any language is countably infinite. However, the books in the Library
          of Babel are of bounded--**/ length ("each book is of four hundred and
          ten pages; each page, of forty lines, each line, of some eighty
          letters"), so the Library can only contain a finite number of distinct
          strings, and thus cannot contain all possible well-formed utterances.
          Borges' narrator notes this fact, but believes that the Library is
          nevertheless infinite; he speculates that it repeats itself
          periodically, giving an eventual "order" to the "disorder" of the
          seemingly-random arrangement of books.
        </Typography>
      </CardWrapper>
    </>
  );
};

export default IndexWrapper;
