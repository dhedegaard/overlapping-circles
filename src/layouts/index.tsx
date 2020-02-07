import React from "react";
import Helmet from "react-helmet";
import { Container, CssBaseline } from "@material-ui/core";

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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Helmet>
    <Container fixed maxWidth="md">
      {props.children}
    </Container>
  </>
);

export default Layout;
