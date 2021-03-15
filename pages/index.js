import React, { Component } from "react";
import Layout from "../core/global/layout/layout";
import Frame from "react-frame-component";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";

import { Tabs, TabList, TabPanels, Tab, TabPanel, Container } from "@chakra-ui/react"

// Gather the stylesheets and return them, called inside the iframe
const getStyles = () => {
  if (process.browser) {
    let head = "";
    const sheets = Array.from(
      document.querySelectorAll("link[rel=stylesheet]")
    );
    const styles = Array.from(document.querySelectorAll("head style"));

    sheets.forEach((link) => {
      head += link.outerHTML;
    });

    styles.forEach((style) => {
      head += style.outerHTML;
    });

    return head;
  }
};

let wors = `
<div class='whoop'>
  <p>Some stuff</p>
</div>
`;

let sorw = `
.whoop{
  color: #000;
  text-align: center;
}
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: wors,
      css: sorw,
    };
  }

  render() {
    return (
      <Layout title="Sam's Components">
        <Frame
          contentDidMount={this.onLoad}
          initialContent={`<!DOCTYPE html><html><head>${getStyles()}</head><body><div class="frame-root"></div></body></html>`}
        >
          <Hero />
          <Intro />
        </Frame>

        <Container className="hooban" maxW="xl" pos="absolute" bottom="0">
          <Tabs>
            <TabList>
                <Tab>HTML</Tab>
                <Tab>CSS</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <pre className="code code-html">
                        <code>
                          {String.raw`${this.state.html.trim()}`}
                        </code>
                    </pre>
                </TabPanel>
                <TabPanel>
                    <pre className="code code-css">
                        <code>
                          {String.raw`${this.state.css.trim()}`}
                        </code>
                    </pre>
                </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Layout>
    );
  }
}