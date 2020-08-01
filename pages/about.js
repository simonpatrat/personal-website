import Layout from "components/Layout";

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <section className="section section--about">
          <div className="container">
            <div className="row">
              <div className="col-xs">
                <h1 className="section__title">À propos de moi</h1>

                <p className="description">{description}</p>

                <p>
                  Diplômé d’une maîtrise en conception de projets multimédias,
                  avec une dizaine d’années d’expérience en TI dont 7 années
                  d’expérience en tant que développeur front-end. Motivé par
                  l’implication dans les phases d’architecture et par
                  l’apprentissage continu et l’amélioration des pratiques liées
                  à ma fonction. J’ai eu l’occasion de participer à des projets
                  de différentes envergures allant du site vitrine au e-commerce
                  en passant par le développement de solutions vouées à
                  l’industrialisation ainsi que les plateformes de billeterie
                  électronique ou ls sites de presse d'information à très grande
                  audience.
                </p>
                <p>
                  Passionné, je crois profondément que chaque projet passe par
                  la mise en place d’un système maintenable et évolutif afin de
                  servir au mieux les objectifs tout en anticipant l’évolution
                  des besoins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
