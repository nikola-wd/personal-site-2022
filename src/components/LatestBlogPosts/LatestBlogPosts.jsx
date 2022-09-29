import React, { useState, useEffect } from 'react';

import './latestblogposts.scss';

const ROOT_ENDPOINT = 'https://webredone.com/wp-json/wp/v2/';

const LatestBlogPosts = () => {
  const [postsData, setPostsData] = useState({
    fetchedInitial: false,
    fetchedFinal: false,
    posts: [
      {
        id: 0,
        attrs: {},
        postedOn: 'Loading ...',
        mediaID: null,
        mediaSRC: '',
        text: 'Loading ...',
      },
      {
        id: 1,
        attrs: {},
        postedOn: 'Loading ...',
        mediaID: null,
        mediaSRC: '',
        text: 'Loading ...',
      },
      {
        id: 2,
        attrs: {},
        postedOn: 'Loading ...',
        mediaID: null,
        mediaSRC: '',
        text: 'Loading ...',
      },
    ],
  });

  const [error, setError] = useState(false);

  useEffect(() => {
    if (postsData.fetchedInitial) return;

    (async () => {
      // TODO: double fetch in new useEffect
      // TODO: abort request in return fn
      // TODO: move media fetching in another parallel promise req

      try {
        const res = await fetch(`${ROOT_ENDPOINT}posts?per_page=3`);

        if (!res.ok) {
          setError(true);
          throw new Error('FAILED_TO_FETCH');
        }

        const fetchedPosts = await res.json();

        const newPostsData = { ...postsData };
        postsData.fetchedInitial = true;

        fetchedPosts.forEach((post, index) => {
          newPostsData.posts[index].attrs = {
            href: post.link,
            target: '_blank',
            rel: 'noopener noreferrer',
          };
          newPostsData.posts[index].title = post.title.rendered;
          newPostsData.posts[index].mediaID = post.featured_media;
          newPostsData.posts[index].postedOn = new Date(
            post.date
          ).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          });

          console.log(post);
        });

        setPostsData(newPostsData);
      } catch (err) {
        console.log(err.message);
        setError(true);
      }
    })();
  }, [postsData]);

  useEffect(() => {
    if (postsData.fetchedFinal) return;

    const newPostsData = { ...postsData };
    const mediaIDs = newPostsData.posts.map((post) => post.mediaID);

    console.log('FETCH IMAGES NOW');
    console.log(mediaIDs);

    (async () => {
      try {
        const imagesURLs = await Promise.all(
          mediaIDs.map(async (ID) => {
            const res = await fetch(`${ROOT_ENDPOINT}media/${ID}`);
            const imgOBJ = await res.json();

            let mediaURL = imgOBJ.source_url;

            if (imgOBJ?.media_details?.sizes?.medium_large?.source_url) {
              mediaURL = imgOBJ.media_details.sizes.medium_large.source_url;
            }

            return mediaURL;
          })
        );

        newPostsData.fetchedFinal = true;
        imagesURLs.forEach((url, index) => {
          newPostsData.posts[index].mediaSRC = url;
        });

        setPostsData(newPostsData);

        console.log('imagesURLs res: ', imagesURLs);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [postsData]);

  const CardTag = !postsData.fetchedInitial ? 'button' : 'a';

  return !error ? (
    <section className="latest-blog-posts">
      <div className="container">
        <h2 className="sec-title">Latest Blog Posts from WebRedone</h2>
        <div className="latest-blog-posts__wrap">
          {postsData.posts.map((post) => {
            return (
              <CardTag key={post.id} className="card" {...post.attrs}>
                <div className="card__image-wrap-outer">
                  <div className="card__image-wrap">
                    {postsData.fetchedFinal ? (
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
