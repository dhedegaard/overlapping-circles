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
    />
    <Container fixed maxWidth="md">
      {props.children}
    </Container>
  </>
);

export default Layout;
