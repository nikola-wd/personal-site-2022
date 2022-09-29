import React from 'react';
import { useFetchPosts } from './useFetchPosts';
import useGAEventTracker from '../../hooks/useGAEventTracker';

import './latestblogposts.scss';

const LatestBlogPosts = () => {
  const { postsData, error } = useFetchPosts();
  const gaEventTracker = useGAEventTracker('Blog');

  const CardTag = !postsData.fetched ? 'button' : 'a';

  return !error ? (
    <section className="latest-blog-posts">
      <div className="container">
        <h2 className="sec-title">Latest Blog Posts from WebRedone</h2>
        <div className="latest-blog-posts__wrap">
          {postsData.posts.map((post) => {
            return (
              <CardTag
                key={post.id}
                className="card"
                {...post.attrs}
                onClick={() =>
                  gaEventTracker(
                    'blog-link',
                    `Clicked on: "${post.title}" post`
                  )
                }
              >
                <div className="card__image-wrap-outer">
                  <div className="card__image-wrap">
                    {postsData.fetched ? (
                      <img
                        src={post.mediaSRC}
                        alt={`Webredone blog post ${post.id + 1}`}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="card__content">
                  <h4 dangerouslySetInnerHTML={{ __html: post.title }} />
                  <div className="card__posted-on">{post.postedOn}</div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  ) : null;
};

export default LatestBlogPosts;
