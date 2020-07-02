import React from 'react';
import styled from 'styled-components';
import hero from '../../../public/img/hero.png';
import IconLogo from '../../../public/img/IconLogo';

const Main = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
`;

const Hero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Navigation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const NavigationList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 45px;
  text-transform: uppercase;

  li {
    font-size: 14px;
    margin: 0 40px;
    letter-spacing: 1px;
    cursor: pointer;
  }

  .active {
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
`;

const StyledLogo = styled.div`
  margin: 0 85px;
  height: 13.09px;
  svg {
    cursor: pointer;
  }
`;

const HeroHeader = styled.div`
  width: 80%;
  margin: 180px auto 120px;
  font-family: 'Lora';
`;

const HeroText = styled.div`
  margin-bottom: 25px;
`;

const HeroTextUnderline = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  -webkit-box-align: center;
  font-family: 'Inter';
  font-weight: 300;

  span {
    font-weight: 500;
    margin-left: 5px;
  }

  &:before {
    content: '';
    height: 1px;
    width: 60px;
    background-color: #cccccc;
    position: relative;
    margin-right: 10px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 88px;
  background-color: white;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 24px;
    width: 100%;
    input {
      width: 70%;
      border: 1px solid #e0e0e0;
      height: 40px;
    }
    input[type='text'] {
      padding: 0 10px;
      font-size: 16px;
      font-family: 'Inter';
    }
    button {
      background-color: #0b0b0b;
      color: white;
      text-transform: uppercase;
      height: 40px;
      font-weight: 500;
      width: 30%;
      margin-left: 24px;
      letter-spacing: 0.5px;
      cursor: pointer;
    }
  }
`;

const RightBlock = styled.div`
  position: absolute;
  top: 677px;
  transform: translateY(-50%);
  left: 16px;
  background-color: #fafafa;
  height: 80px;
  width: 250px;
`;

const LeftBlock = styled.div`
  position: absolute;
  top: 677px;
  transform: translateY(-50%);
  right: 16px;
  background-color: #fafafa;
  height: 80px;
  width: 250px;
`;

const MainSection = ({ inputHandler, onSubmitHandler }) => {
  return (
    <Main>
      <Hero>
        <Navigation>
          <NavigationList>
            <li>About</li>
            <li className="active">Discover</li>
            <li>
              <StyledLogo>
                <IconLogo />
              </StyledLogo>
            </li>
            <li>User</li>
            <li>Account</li>
          </NavigationList>
        </Navigation>
        <HeroHeader>
          <HeroText>
            <h1>
              Discover the perfect image
              <br />
              for your design.
            </h1>
          </HeroText>
          <HeroTextUnderline>
            Photographed by <span> Maarlen Bouwkamp</span>
          </HeroTextUnderline>
        </HeroHeader>
        <SearchBox>
          <form onSubmit={e => onSubmitHandler(e)}>
            <input
              type="text"
              onChange={e => inputHandler(e)}
              placeholder="Type something..."
            />
            <button
              type="submit"
              value="search"
              onClick={e => onSubmitHandler(e)}
            >
              Search
            </button>
          </form>
        </SearchBox>
      </Hero>
      <RightBlock></RightBlock>
      <LeftBlock></LeftBlock>
    </Main>
  );
};

export default MainSection;
