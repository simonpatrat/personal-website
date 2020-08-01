import styled from "styled-components";
import classnames from "classnames";
import Layout from "components/Layout";
import MaGanacheAbout from "../public/img/maganache-about.svg";

const About = ({ title, description, className, ...props }) => {
  const sectionClassNames = classnames("section section--about", className);
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <section className={sectionClassNames}>
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <h1 className="section__title">À propos de moi</h1>
                <div className="row">
                  <div className="col-md-4">
                    <div className="about-image" aria-hidden>
                      <MaGanacheAbout />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="page-body">
                      <p>
                        Diplômé d’une maîtrise en conception de projets
                        multimédias, avec une dizaine d’années d’expérience en
                        TI dont 7 années d’expérience en tant que développeur
                        front-end. Motivé par l’implication dans les phases
                        d’architecture et par l’apprentissage continu et
                        l’amélioration des pratiques liées à ma fonction. J’ai
                        eu l’occasion de participer à des projets de différentes
                        envergures allant du site vitrine au e-commerce en
                        passant par le développement de solutions vouées à
                        l’industrialisation ainsi que les plateformes de
                        billeterie électronique ou ls sites de presse
                        d'information à très grande audience.
                      </p>
                      <p>
                        Passionné, je crois profondément que chaque projet passe
                        par la mise en place d’un système maintenable et
                        évolutif afin de servir au mieux les objectifs tout en
                        anticipant l’évolution des besoins.
                      </p>
                      <p>
                        <a href="https://www.linkedin.com/in/simon-patrat-07260a110">
                          Me contacter sur Linkedin
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default styled(About)`
  .about-image {
    position: relative;
    top: -150px;
    display: none;
    background: url("/img/triangle-2.svg") no-repeat 0 20%;
    background-size: 90%;
    min-height: 50vh;

    @media only screen and (min-width: 64em) {
      display: block;
    }

    svg {
      width: 90%;
      height: auto;
    }
  }
`;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
