import React, { Component } from 'react'
import Layout from '../core/global/layout/layout'
import Frame from 'react-frame-component'
import Hero from '../components/hero/hero'
import Intro from '../components/intro/intro'

// Gather the stylesheets and return them, called inside the iframe
const getStyles = () => {
  if (process.browser) {
    let head = '';
    const sheets = Array.from(document.querySelectorAll('link[rel=stylesheet]'));
    const styles = Array.from(document.querySelectorAll('head style'));

    sheets.forEach(link => {
      head += link.outerHTML;
    });

    styles.forEach(style => {
      head += style.outerHTML;
    });

    return head;
  }
};

export default class extends Component {
  render() {
    return (
      <Layout title="Corona Virus #001"> 
        <Frame contentDidMount={this.onLoad} initialContent={`<!DOCTYPE html><html><head>${getStyles()}</head><body><div class="frame-root"></div></body></html>`}>           
          <Hero />
          <Intro />
        </Frame>
      </Layout>
    )
  }
}