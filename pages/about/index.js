import Layout from "../../core/global/layout/layout";
import "./about.scss";

export default function About() {
  return (
    <Layout title="About" hideControls>
      <div className="about">
        <p>
          This will be about, but for now I don't know what I'm talking about.
        </p>
      </div>
    </Layout>
  );
}
