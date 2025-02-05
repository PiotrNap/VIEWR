import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: 80vh;
  width: 90%;
  margin: 40px auto;
`;
const TitleSection = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-top: 60px;

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
const CardsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorCard = styled.div`
  width: 250px;
  height: 340px;
  margin: 48px 15px;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.1);
  background: #c4c4c4;
`;

const Image = styled.div`
  height: 100%;
  width: auto;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: filter ease-out 0.2s;
  :hover {
    filter: brightness(80%);
  }
`;
const AuthorInfo = styled.div`
  height: 90px;
  width: 100%;
  padding: 14px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  text-align: left;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.1);

  span {
    color: #000000;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: border-bottom ease 0.1s;

    :hover {
      border-bottom: 1px solid black;
    }
  }

  p {
    color: #919191;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Photographers = ({ randomAuthors }) => {
  return (
    <Section>
      <TitleSection>
        <h1>Photographers</h1>
      </TitleSection>
      <CardsSection>
        {randomAuthors.map(author => (
          <AuthorCard key={Math.floor(Math.random() * 100)}>
            <a href={author.userHTML} target="_blank">
              <Image image={author.urlRegular}></Image>
            </a>
            <AuthorInfo>
              <a href={author.userHTML} target="_blank">
                <span>{author.name}</span>
              </a>
              <p>Total Photos: {author.totalPhotos}</p>
            </AuthorInfo>
          </AuthorCard>
        ))}
      </CardsSection>
    </Section>
  );
};

export default Photographers;
