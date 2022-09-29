import { useState, useEffect, useRef } from 'react';

const useFetchPosts = () => {
  const ROOT_ENDPOINT = 'https://webredone.com/wp-json/wp/v2/';

  const shouldFetchRef = useRef(true);

  const [postsData, setPostsData] = useState({
    fetched: false,
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
    if (!shouldFetchRef.current) return;

    shouldFetchRef.current = false;

    // const controller = new AbortController();
    // const signal = controller.signal;

    const fetchImages = async (imagesIDs) => {
      try {
        const imagesURLs = await Promise.all(
          imagesIDs.map(async (ID) => {
            const res = await fetch(`${ROOT_ENDPOINT}media/${ID}`);
            const imgOBJ = await res.json();

            let mediaURL = imgOBJ.source_url;

            if (imgOBJ?.media_details?.sizes?.medium_large?.source_url) {
              mediaURL = imgOBJ.media_details.sizes.medium_large.source_url;
            }

            return mediaURL;
          })
        );

        return imagesURLs;
      } catch (err) {
        throw new Error('FAILED_TO_FETCH');
      }
    };

    const fetchData = async () => {
      try {
        // const res = await fetch(`${ROOT_ENDPOINT}posts?per_page=3`, { signal });
        const res = await fetch(`${ROOT_ENDPOINT}posts?per_page=3`);

        if (!res.ok) {
          throw new Error('FAILED_TO_FETCH');
        }

        const fetchedPosts = await res.json();

        const newPostsData = { ...postsData };

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
        });

        // Fetch images here
        const mediaIDs = newPostsData.posts.map((post) => post.mediaID);
        const imagesSRCs = await fetchImages(mediaIDs);

        imagesSRCs.forEach((url, index) => {
          newPostsData.posts[index].mediaSRC = url;
        });

        newPostsData.fetched = true;

        setPostsData(newPostsData);
      } catch (err) {
        setError(true);
      }
    };

    fetchData();

    // return () => {
    //   controller.abort();
    // };
  }, [postsData]);

  return { postsData, error };
};

export { useFetchPosts };
