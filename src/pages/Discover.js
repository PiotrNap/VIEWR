import React, { useEffect, useState } from 'react';
import MainSection from '../components/main/MainSection';
import unsplash from '../helpers/unsplashApi';
import randomWords from 'random-words';

let PER_PAGE_LIMIT = 10;
let PAGE = 1;

function Discover() {
  const [photosURL, setPhotosURL] = useState([]);
  const [defaultPhotos, setDefaultPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    (async function getResponse() {
      const response = await unsplash.search.photos(
        randomWords(1),
        PAGE,
        PER_PAGE_LIMIT,
        { orientation: 'portrait' }
      );
      const json = await response.json();
      const data = await json.results;
      let newState = [];
      data.map(item =>
        newState.push({
          name: item.user.name,
          url: item.urls.regular,
          // urlSmall: item.urls.small,
          avatar: item.user.profile_image.small,
          download: item.links.download
        })
      );
      setDefaultPhotos(newState);
      console.log(defaultPhotos);
    })();
  }, []);

  const inputHandler = e => {
    setSearchValue(e.target.value);
  };

  async function onSubmitHandler(e) {
    e.preventDefault();

    const response = await unsplash.search.photos(
      searchValue,
      PAGE,
      PER_PAGE_LIMIT,
      { orientation: 'portrait' }
    );
    const json = await response.json();
    const data = await json.results;
    let newArray = [];
    data.map(item => newArray.push);

    console.log(photosURL);
  }

  const fetchOnScroll = () => {
    unsplash.search
      .photos('dogs', 1, 10, { orientation: 'portrait' })
      .then(res => res.json())
      .then(json => {
        setPhotos(json);
      });
  };

  return (
    <>
      <MainSection
        onSubmitHandler={onSubmitHandler}
        fetchOnScroll={fetchOnScroll}
        inputHandler={inputHandler}
      />

      {/* {!photosURL.length
        ? defaultPhotos.map(item => <li key={item.url}>{item.url}</li>)
        : photosURL.map(item => <li key={item.url}>{item.url}</li>)} */}

      <button onClick={() => setPhotos()}>CLICK HERE</button>
    </>
  );
}

export default Discover;
