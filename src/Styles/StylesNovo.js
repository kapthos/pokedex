import styled from "styled-components";

export const TypeBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.backgroundGradient};
  min-height: 100vh;
`;
export const NomePokemon = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 10;

  h1 {
    font-family: "Cabin";
    font-style: italic;
    font-weight: bold;
    font-size: 11em;
    color: white;
    text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
      -2px 2px 1px rgba(0, 0, 0, 0.5);
  }
  p {
    color: #242424;
    font-size: 6em;
    font-family: "Cabin";
    font-style: italic;
    font-weight: 600;
    text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
      -1px 1px 1px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 1440px) {
    h1 {
      font-family: "Cabin";
      font-style: italic;
      font-weight: bold;
      font-size: 9em;
      color: white;
      text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
        -2px 2px 1px rgba(0, 0, 0, 0.5);
    }
    p {
      color: #242424;
      font-size: 5em;
      font-family: "Cabin";
      font-style: italic;
      font-weight: 600;
      text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
        -1px 1px 1px rgba(0, 0, 0, 0.5);
    }
  }
  @media (max-width: 1024px) {
    h1 {
      font-family: "Cabin";
      font-style: italic;
      font-weight: bold;
      font-size: 7em;
      color: white;
      text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
        -2px 2px 1px rgba(0, 0, 0, 0.5);
    }
    p {
      color: #242424;
      font-size: 3.5em;
      font-family: "Cabin";
      font-style: italic;
      font-weight: 600;
      text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
        -1px 1px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
export const BackButton = styled.div`
  flex: 1;
  padding-bottom: 2%;
  img {
    cursor: pointer;
    width: 110px;
  }
`;
export const ActionButton = styled.div`
  position: absolute;
  margin-top: -70em;
  margin-left: 120em;

  img {
    cursor: pointer;
  }
`;
export const PhotoFront = styled.div`
  img {
    width: 50em;
  }
  @media (max-width: 560px) {
    img {
      width: 85%;
    }
  }
`;
export const Stats = styled.div`
  display: flex;
  padding-right: 30%;

  @media (max-width: 1440px) {
    padding-right: 65%;
    padding-bottom: 5%;
  }

  @media (max-width: 1024px) {
    padding-right: 135%;
    padding-bottom: 25%;
    padding-top: 15%;
  }
  @media (max-width: 560px) {
    padding-left: -25%;
    padding-bottom: 25%;
    padding-top: 15%;
    width: 85%;
  }
`;
export const StatsText = styled.div`
  margin-right: 20px;
  p {
    font-family: "Cabin";
    text-align: start;
    font-size: 2.5em;
    padding-top: 0.6em;
    color: #d9d9d9;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      -1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 560px) {
    p {
      font-size: 2.3em;
      padding-top: 0.5em;
    }
  }
`;
export const StatsNumbers = styled.div`
  p {
    text-align: center;
    font-weight: bold;
    font-size: 2.5em;
    padding-top: 0.6em;
    color: white;
    text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
      -1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 560px) {
    p {
      font-size: 2.3em;
      padding-top: 0.5em;
    }
  }
`;
export const Types = styled.div`
  img {
    width: 50%;
    filter: drop-shadow(-3px 3px 1px rgba(0, 0, 0, 0.5));
  }
  @media (max-width: 560px) {
    img {
      width: 40%;
      padding-left: 7%;
      filter: drop-shadow(-3px 3px 1px rgba(0, 0, 0, 0.5));
    }
  }
`;
export const Moves = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  font-style: italic;
  margin: 0.5em 0;
  font-size: 3.5em;
  color: #fff;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1),
    -2px 2px 1px rgba(0, 0, 0, 0.5);

  @media (max-width: 1440px) {
    margin: 0 0;
    padding-top: 5%;
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-family: "Cabin";
    font-weight: 500;
    font-size: 3em;
    color: white;
    text-align: center;
    padding-top: 0.8em;
    padding-bottom: 0.2em;
    text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
      -2px 2px 1px rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid gray;
  }
  @media (max-width: 1440px) {
    padding-top: 0.4em;
    border-bottom: none;
  }
  @media (max-width: 1024px) {
    padding-top: 0.4em;
    padding-bottom: 10%;
  }
`;
export const ButtonsHome = styled.div`
  display: flex;
  width: 0 auto;
`;
export const PokedexVazia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatsBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 25em;
  height: 2em;
  background: #163a41;
  background: linear-gradient(
    to right,
    rgba(150, 150, 175, 1),
    rgba(255, 255, 255, 0.25)
  );
  margin-left: 6em;
  margin-top: -2.4em;
  border-radius: 0.7em;
  box-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
    -1px 2px 1px rgba(0, 0, 0, 0.5);

  @media (max-width: 560px) {
    width: 15em;
    height: 1.3em;
    margin-top: -2em;
    margin-left: 5em;
  }
`;
export const StatsBarHP = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);

  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const StatsBarAtk = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const StatsBarDef = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const StatsBarSAtak = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const StatsBarSDef = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const StatsBarSpd = styled.span`
  display: flex;
  width: ${(props) => props.width};
  height: 2em;
  background: #00d;
  border-radius: 0.7em;
  background: linear-gradient(to bottom, #000000 0%, #444 50%, #000000 100%);
  @media (max-width: 560px) {
    height: 1.3em;
  }
`;
export const MainScreen = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 90%;

  @media (max-width: 1440px) {
    margin-left: 50px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
export const HeroSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  padding-bottom: 5%;

  @media (max-width: 1440px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`;
export const MovesBlockOne = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MovesBlockTwo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MovesMainBlock = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Header = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  align-items: center;
`;