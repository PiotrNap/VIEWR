import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
  min-width: 1320px;
  max-width: 90%;
  margin: 40px auto;
  padding-left: auto;
  padding-right: auto;
`;
const TitleSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin: 24px 24px 0;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #0b0b0b;
    margin-bottom: 18px;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  margin: 48px 15px;
  padding-bottom: 48px;
`;

const GalleryColumn = styled.div`
  margin: 0;

  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
    cursor: zoom-in;
    transition: filter ease-out 0.2s;
    :hover {
      filter: brightness(80%);
    }
  }

  figure {
    padding-bottom: 16px;
  }
`;

const Avatar = styled.img`
  /* width: 14px;
  height: 14px;
  position: absolute;
  left: 15px;
  bottom: 15px;
  display: ${props => (props.isShown ? 'block' : 'none')}; */
`;

const Photos = ({ photos, defaultPhotos }) => {
  const [firstColumn, setFirstColumn] = useState(null);
  const [secondColumn, setSecondColumn] = useState(null);
  const [thirdColumn, setThirdColumn] = useState(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!photos) {
      setFirstColumn(defaultPhotos.slice(0, 5));
      setSecondColumn(defaultPhotos.slice(5, 10));
      setThirdColumn(defaultPhotos.slice(10, 15));
    }

    if (photos) {
      setFirstColumn(photos.slice(0, 5));
      setSecondColumn(photos.slice(5, 10));
      setThirdColumn(photos.slice(10, 15));
    }
  }, [defaultPhotos, photos]);

  // console.log('firstColum :', firstColumn);

  return (
    <MainSection>
      <TitleSection>
        <h1>Photos</h1>
      </TitleSection>
      <Gallery>
        <GalleryColumn>
          {firstColumn &&
            firstColumn.map(column => (
              <div key={column.name} key={Math.floor(Math.random() * 10000)}>
                <figure itemProp="image">
                  <a href={column.urlRegular} target="_blank">
                    <img
                      src={column.url}
                      // onMouseEnter={() => setIsShown(true)}
                      // onMouseLeave={() => setIsShown(false)}
                    />
                  </a>
                  {/* <Avatar src={column.avatar} isShown={isShown} /> */}
                </figure>
              </div>
            ))}
        </GalleryColumn>
        <GalleryColumn>
          {secondColumn &&
            secondColumn.map(column => (
              <div key={column.name} key={Math.floor(Math.random() * 10000)}>
                <figure itemProp="image">
                  <a href={column.urlRegular} target="_blank">
                    <img src={column.url} />
                  </a>
                </figure>
              </div>
            ))}
        </GalleryColumn>
        <GalleryColumn>
          {thirdColumn &&
            thirdColumn.map(column => (
              <div key={column.name} key={Math.floor(Math.random() * 10000)}>
                <figure itemProp="image">
                  <a href={column.urlRegular} target="_blank">
                    <img src={column.url} />
                  </a>
                </figure>
              </div>
            ))}
        </GalleryColumn>
      </Gallery>
    </MainSection>
  );
};

export default Photos;
