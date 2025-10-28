import { PageHero } from "../components";
// import aboutImg from "../assets/hero-bcg.jpeg";
import aboutImg from "../assets/unsplash/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";

const AboutPage = () => {
  return (
    <main className="about-page">
      <PageHero title="about" />
      <section className="about-section">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima,
            porro accusamus? Labore minus incidunt, distinctio numquam ut ullam
            nesciunt ad ducimus omnis nobis ratione similique cum. Aperiam
            consequatur, voluptate laboriosam ex nesciunt dolore corporis
            exercitationem quas! Perspiciatis dolorem ut at obcaecati tempore
            suscipit nam corporis voluptatibus, maxime veritatis consequuntur
            laborum!
          </p>
        </article>
      </section>
    </main>
  );
};

// const Wrapper = styled.section``;
export default AboutPage;
