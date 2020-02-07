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
      <meta property="og:title" content="Overlapping Circles" />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://overlapping-circles.dhedegaard.dk/"
      />
      <meta property="og:image" content={favicon} />
    </Helmet>
    <Container fixed maxWidth="md">
      {props.children}
    </Container>
  </>
);

export default Layout;
