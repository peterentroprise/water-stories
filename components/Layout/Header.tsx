import * as React from 'react'
import { Button } from "@material-ui/core";

import Link from "../Link";

const HeaderComponent = () => (
    <header>
      <nav>
        <Link href="/" passHref>
          <Button>Index</Button>
        </Link>
        <Link href="/about" passHref>
          <Button>About</Button>
        </Link>
        <Link href="/products" passHref>
          <Button>Products</Button>
        </Link>
      </nav>
    </header>

)

export default HeaderComponent
