import styled from "styled-components";

export const DivPai = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #dee9e8;
`;
export const TypeBackground2 = styled.div`
  background: ${(props) => props.backgroundGradient};
  border: 0.5em ridge ${(props) => props.backgroundBorder};
  border-radius: 3em;
  width: 35em;
  height: 21em;
  filter: drop-shadow(-4px 8px 1px rgba(0, 0, 0, 0.5));
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NamePokemon = styled.p`
  text-align: center;
  font-family: "Cabin";
  font-style: italic;
  font-weight: bold;
  font-size: 4.75em;
  color: white;
  padding-bottom: 1%;
  text-shadow: 1px -1px 1px rgba(255, 255, 255, 0.1),
    -2px 2px 1px rgba(0, 0, 0, 0.5);
`;
export const NumberPokemon = styled.div`
  color: transparent;
  background: #000;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: -1px 1px 1px rgba(255, 255, 255, 0.3);
  text-align: center;
  font-family: "Cabin";
  font-style: italic;
  font-weight: 600;
  font-size: 2.85em;
`;
export const Hero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  #icone {
    width: 25%;
    transform: translate(10px, -35px);
    filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.5));
  }
`;
export const ImageCard = styled.img`
  width: 40%;
  transform: translate(0, -40%);
`;
export const Botoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgCatch = styled.img`
  cursor: pointer;
  width: 30%;
  transform: translate(-25%, -130%);
  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.5));
`;
export const ImgInfo = styled.img`
  cursor: pointer;
  width: 30%;
  transform: translate(0, -140%);
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));
`;
export const ImgInfoPokedex = styled.img`
  cursor: pointer;
  width: 25%;
  transform: translate(-20%, -120%);
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));
`;
export const ImgRelease = styled.img`
  cursor: pointer;
  width: 35%;
  transform: translate(-20%, -140%);
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.5));
`;
export const DivPaiPokedex = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #dee9e8;
  position: relative;
  padding-bottom: 2em;
`;
export const BarHome = styled.div`
  width: 100%;
  background-color: #a4bab7;
  margin-bottom: 2%;
  box-shadow: 0px 5px 3px 0px rgba(48, 58, 43, 0.5),
    inset 0px -4px 5px 0px rgba(242, 247, 247, 0.5);
`;
export const BarLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 52%;
  margin: 0 40%;

  img {
    width: 25%;
  }
  #dex {
    cursor: pointer;
    width: 8%;
  }

  @media (max-width: 1024px) {
    img {
      width: 35%;
    }
    #dex {
      cursor: pointer;
      width: 15%;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 50%;
    }
    #dex {
      cursor: pointer;
      width: 18%;
    }
  }
`;
export const BarLogosPokedex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  img {
    cursor: pointer;
    width: 15%;
  }
  #dex {
    cursor: pointer;
    width: 14%;
  }
`;
export const BarPokedex = styled.div`
  width: 100%;
  background-color: #a4bab7;
  padding: 1em 2em;
  box-shadow: 0px 5px 3px 0px rgba(48, 58, 43, 0.5),
    inset 0px -4px 5px 0px rgba(242, 247, 247, 0.5);
`;
export const NoPokemons = styled.div`
  text-align: center;
  padding: 16%;
  span {
    font-family: "Cabin";
    font-weight: 700;
    font-size: 18em;
    width: 35%;
    margin-bottom: 1em;
  }
  @media (max-width: 1024px) {
    span {
      font-size: 12em;
      width: 35%;
      margin-bottom: 1em;
    }
  }
  @media (max-width: 768px) {
    span {
      font-size: 7em;
      width: 35%;
      margin-bottom: 1em;
    }
  }
`;
export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: -2%;
  box-shadow: inset 0px 4px 4px 0px rgba(48, 58, 43, 0.5);
`;
export const ContainerPagination = styled.div`
  width: 100%;
  padding-bottom: .5%;
  padding-top: .5%;
  display: flex;
  justify-content: center;
  box-shadow: 0px -5px 5px 0px rgba(48, 58, 43, 0.2),
    inset 0px 4px 5px 0px rgba(242, 247, 247, 0.75);
`;
export const NoPokemonsHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;

  #prof {
    display: block;
    font-family: "Cabin";
    font-size: 7em;
    width: 50%;
    margin-bottom: 1em;
  }
  #pokecap {
    display: block;
    font-family: "Cabin";
    font-size: 7em;
    color: black;
    width: 50%;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    #prof {
      font-size: 5em;
      width: 50%;
      margin-bottom: 1em;
    }
    #pokecap {
      font-size: 5em;
      width: 50%;
      margin-bottom: 1em;
    }
  }
`;
export const CardsHome = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 4em;
  grid-row-gap: 4em;
  padding-bottom: 2%;
  padding-top: 1%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 5em;
    grid-row-gap: 4em;
    padding-bottom: 5%;
    padding-top: 2%;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 5em;
    grid-row-gap: 4em;
    padding-bottom: 10%;
    padding-top: 5%;
  }
`;