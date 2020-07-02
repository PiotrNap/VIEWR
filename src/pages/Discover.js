import React, { useEffect, useState } from 'react';
import MainSection from '../components/main/MainSection';
import Photographers from '../components/photographers/Photographers';
import Photos from '../components/photos/Photos';
import unsplash from '../helpers/unsplashApi';
import randomWords from 'random-words';

let PER_PAGE_LIMIT = 10;
let PAGE = 1;

function Discover() {
  const [photos, setPhotos] = useState([]);
  const [defaultPhotos, setDefaultPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState(null);
  const [randomAuthors, setRandomAuthors] = useState([]);

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
      await data.map(item =>
        newState.push({
          name: item.user.name,
          url: item.urls.regular,
          urlRegular: item.urls.regular,
          avatar: item.user.profile_image.medium,
          totalPhotos: item.user.total_photos,
          download: item.links.download
        })
      );
      setDefaultPhotos(newState);
      console.log('data: ', data);

      let authorsRandom = [];
      for (let i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * newState.length);
        authorsRandom.push(newState[index]);
      }
      setRandomAuthors(authorsRandom);
      console.log('authorsRandom: ', authorsRandom);
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
    await data.map(item =>
      newState.push({
        name: item.user.name,
        url: item.urls.regular,
        urlSmall: item.urls.small,
        avatar: item.user.profile_image.small,
        totalPhotos: item.user.total_photos,
        download: item.links.download
      })
    );
    setPhotos(newArray);
  }

  //   const fetchOnScroll = () => {
  //     unsplash.search
  //       .photos('dogs', 1, 10, { orientation: 'portrait' })
  //       .then(res => res.json())
  //       .then(json => {
  //         setPhotos(json);
  //       });
  //   };

  return (
    <div className="discover">
      <MainSection
        onSubmitHandler={onSubmitHandler}
        // fetchOnScroll={fetchOnScroll}
        inputHandler={inputHandler}
      />
      <Photographers randomAuthors={randomAuthors} />
      <Photos photos={photos} defaultPhotos={defaultPhotos} />
      {/* <button onClick={() => setPhotos()}>CLICK HERE</button> */}
    </div>
  );
}

export default Discover;
