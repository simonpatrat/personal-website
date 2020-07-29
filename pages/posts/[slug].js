import React from "react";
import PostNavigation from "../../components/PostNavigation";
import classnames from "classnames";

import { orderPostsByDate } from "../../lib/orderPostsByDate";

const Post = (props) => {
  const { post, nextPost, previousPost } = props;
  let PLACES_LEAFLET_MAP = null;

  if (!props.post) {
    return <div>Loading...</div>;
  }
  const {
    attributes: {
      title,
      featuredImage,
      rating,
      date,
      resume,
      gpsCoordinates,
      slug,
    },
    html,
    featuredImageData,
    // TODO: Add exif data at builde time to retreive GPS coordinates
  } = post;

  const postClassNames = classnames("post");
  return (
    <>
      <article className={postClassNames}>{title && title}</article>

      <div className="container">
        <div className="row">
          <PostNavigation
            previousPost={previousPost}
            nextPost={nextPost}
            displayTitles
          />
        </div>
      </div>
    </>
  );
};

Post.getInitialProps = async (context) => {
  const {
    query: { slug },
  } = context;

  const posts = {};

  async function importAll(r) {
    r.keys().forEach((key) => {
      const post = r(key);
      const postSlug = key.substring(2, key.length - 3);
      post.attributes.slug = postSlug;
      posts[postSlug] = post;
    });
  }

  if (slug) {
    await importAll(require.context("../../content/posts", true, /\.md$/));

    const orderedPostsByDate = orderPostsByDate(posts);

    const post = posts[slug];

    const currentPostIndex = orderedPostsByDate.findIndex(
      (p) => p.attributes.slug === slug
    );
    const nextPost = orderedPostsByDate[currentPostIndex + 1] || null;
    const previousPost = orderedPostsByDate[currentPostIndex - 1] || null;

    return {
      post,
      nextPost,
      previousPost,
      orderedPostsByDate,
    };
  }

  return {};
};

export default Post;
