import React from "react";
import Helmet from "react-helmet";
import { Container, CssBaseline } from "@material-ui/core";
import favicon from "../assets/favicon.png";

const Layout: React.FC = props => (
  <>
    <CssBaseline />
    <Helmet
      title="Overlapping circles"
      meta={[
        { name: "description", content: "Overlapping circles" },
        { name: "keywords", content: "circles, overlapping" }
      ]}
    >
      <html lang="en" />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <Container fixed maxWidth="md">
      {props.children}
    </Container>
  </>
);

export default Layout;
