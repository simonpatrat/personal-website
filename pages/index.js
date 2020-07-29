import Head from "next/head";
import { Component } from "react";
import orderBy from "lodash/orderBy";
import classnames from "classnames";
import slugify from "slugify";

import content from "../content/home.md";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsToDisplay: props.allPosts,
      categories: props.categories,
    };
  }

  componentDidMount() {}

  loadMorePosts = () => {
    console.log("TODO: Load more posts with offset");
  };

  handleLoadMoreButtonClick = (event) => {
    this.loadMorePosts();
  };

  render() {
    const {
      html,
      attributes: { title },
    } = content;
    const { postsToDisplay, categories } = this.state;

    const selectedCategories = categories.filter(
      (cat) => cat.attributes.selected
    );
    const postArray = Object.keys(postsToDisplay).map(
      (key) => postsToDisplay[key]
    );
    const filteredPosts =
      selectedCategories.length > 0
        ? postArray.filter((post) => {
            return (
              post.attributes.categories &&
              selectedCategories.some((category) => {
                return post.attributes.categories.includes(
                  category.attributes.name
                );
              })
            );
          })
        : postArray;

    const orderedPosts = orderBy(filteredPosts, ["attributes.date"], ["desc"]);

    const shouldDisplayPostsList = orderedPosts && orderedPosts.length > 0;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <title>{title === "Places" ? title : `${title} | Places`}</title>
        </Head>

        <article>
          <div className="page__header"></div>

          <div className="page__content">
            <div className="container">
              <div className="row">
                <section dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {shouldDisplayPostsList && JSON.stringify(orderedPosts, null, 2)}
            </div>
          </div>
        </article>
      </>
    );
  }
}

export async function getStaticProps() {
  //get posts & context from folder

  const posts = await loadPosts();
  const categories = await loadCategories();

  return {
    props: {
      allPosts: posts,
      categories,
    },
  };
}

async function loadPosts(nbOfPosts = 0) {
  const posts = {};

  function importAllPosts(r) {
    const postsToLoad = nbOfPosts > 0 ? r.keys().slice(0, nbOfPosts) : r.keys();
    // console.log('Loading ', nbOfPosts, ' posts... of ',r.keys(), ' Posts are: ', postsToLoad);
    postsToLoad.forEach((key) => {
      const post = r(key);
      const postSlug = key.substring(2, key.length - 3);
      post.attributes.slug = postSlug;
      posts[postSlug] = post;
    });
  }

  await importAllPosts(require.context("../content/posts", true, /\.md$/));

  return posts;
}

async function loadCategories() {
  const categories = [];

  function importAllCategories(r) {
    const categoriesToLoad = r.keys();

    categoriesToLoad.forEach((key) => {
      const category = r(key);
      const categorySlug = key.substring(2, key.length - 3);
      category.slug = categorySlug;
      categories.push(category);
    });
  }

  await importAllCategories(
    require.context("../content/categories", true, /\.md$/)
  );

  return categories;
}
