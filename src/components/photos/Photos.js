import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
  min-width: 1320px;
  max-width: 80vw;
  margin: 40px auto;
  padding-left: auto;
  padding-right: auto;
`;
const TitleSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 50px;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #0b0b0b;
    margin-bottom: 18px;
    margin-top: 18px;
  }
`;
const Gallery = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 48px;
`;

const GalleryColumn = styled.div`
  margin: 0;

  img {
    width: 100%;
    height: auto;
    vertical-align: middle;
    border-style: none;
  }

  figure {
    padding-bottom: 16px;
  }
`;

const Photos = ({ photos, defaultPhotos }) => {
  const [firstColumn, setFirstColumn] = useState(null);
  const [secondColumn, setSecondColumn] = useState(null);
  const [thirdColumn, setThirdColumn] = useState(null);

  useEffect(() => {
    setFirstColumn(defaultPhotos.slice(0, 5));
    setSecondColumn(defaultPhotos.slice(5, 10));
    setThirdColumn(defaultPhotos.slice(10, 15));
  }, [defaultPhotos]);

  console.log('firstColum :', firstColumn);
  return (
    <MainSection>
      <TitleSection>
        <h1>Photographers</h1>
      </TitleSection>
      <Gallery>
        <GalleryColumn>
          {firstColumn &&
            firstColumn.map(column => (
              <div key={column.name}>
                <figure itemProp="image">
                  <img src={column.url} />
                </figure>
              </div>
            ))}
        </GalleryColumn>
        <GalleryColumn>
          {secondColumn &&
            secondColumn.map(column => (
              <div key={column.name}>
                <figure itemProp="image">
                  <img src={column.url} />
                </figure>
              </div>
            ))}
        </GalleryColumn>
        <GalleryColumn>
          {thirdColumn &&
            thirdColumn.map(column => (
              <div key={column.name}>
                <figure itemProp="image">
                  <img src={column.url} />
                </figure>
              </div>
            ))}
        </GalleryColumn>
      </Gallery>
    </MainSection>
  );
};

export default Photos;
