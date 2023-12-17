import "./about.scss";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="Top">ABOUT US</div>
      <div className="Mid">
        Bokku! is a Hard Discount Grocery Chain, that started here in Nigeria on
        30th of September 2022. It is designed after a similar model of hard
        discount chain in Germany.
        <br /> Bokku! sells a limited number of carefully chosen grocery
        products. The products are of high-quality and cover 80% of what the
        average Nigerian household needs every day: Basic food like rice, oil,
        sauces, snacks or beverages, personal care like soaps and toothpaste,
        and household items like cleaning products and detergents.
      </div>
      <div className="Bottom">
        <div>
          <h2>OUR PHILOSOPHY</h2>
          We carefully select each of our products we focus on basic food,
          household and personal care products which are necessary for your
          every day life. we pick for you the best quality and the best choices.
          We offer the lowest possible price every day our stores are simple and
          not larger than needed. we do not rent stores in expensive locations.
        </div>
        <div>
          <h2>GUARANTEE</h2>
          We provide you with an unconditional return guarantee: if you are not
          satisfied with any of our products, simply return it to any of our
          stores for a full refund. no questions asked, no receipt or
          explanation are needed for a refund.
        </div>
      </div>
    </div>
  );
};

export default About;
