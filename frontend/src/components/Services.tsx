import { services } from "../utils/constants";

const Services = () => {
  return (
    <section className="home-services">
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture
            <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            error impedit animi obcaecati amet nesciunt ipsum aspernatur,
            dignissimos dolorum non!
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;
