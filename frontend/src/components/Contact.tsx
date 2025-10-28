const Contact = () => {
  return (
    <section className="home-contact">
      <div className="section-center">
        <h3>join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            aperiam. Error nisi cumque repellat, perspiciatis quam a accusamus
            voluptas consequuntur.
          </p>
        </div>
        <form className="contact-form">
          <input
            type="email"
            className="form-input"
            placeholder="enter email"
          />
          <button type="submit" className="submit-btn">
            subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
