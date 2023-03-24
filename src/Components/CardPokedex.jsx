import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  DivPai,
  NamePokemon,
  NumberPokemon,
  Card,
  Hero,
  ImageCard,
  ImgRelease,
  TypeBackground2,
  Header,
  Botoes,
  ImgInfoPokedex,
} from "../Styles/StyleDetails";
import { useColors } from "../Hooks/useColors";
import GlobalContext from "./../Context/GlobalContext";
import actionButton1 from "../Styles/img/ActionButton1.png";
import infoBtn from "../Styles/img/Info.png";

function CardPokedex({ pokeElement, removePokemon }) {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  const goToDetails = (navigate) => {
    navigate(`/details/${pokeElement.id}`);
  };

  const pokeSpritesAnim =
    pokeElement &&
    pokeElement.sprites &&
    pokeElement.sprites.other["official-artwork"];
  const [
    pokemonType,
    pokemonType2,
    backgroundGradient,
    backgroundBorder,
  ] = useColors(
    !context.isLoading &&
      pokeElement &&
      pokeElement.types &&
      pokeElement.types[0].type.name,
    !context.isLoading &&
      pokeElement &&
      pokeElement.types &&
      pokeElement.types[1]?.type.name
      ? !context.isLoading &&
          pokeElement &&
          pokeElement.types &&
          pokeElement.types[1].type.name
      : null
  );

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const numberPokemon = (numero) => {
    if (numero < 10) {
      return `#00${numero}`;
    } else if (numero >= 10 && numero < 100) {
      return `#0${numero}`;
    } else {
      return `#${numero}`;
    }
  };

  return (
    <DivPai>
      <TypeBackground2
        backgroundGradient={backgroundGradient()}
        backgroundBorder={backgroundBorder()}
      >
        <Card>
          <Header>
            <NamePokemon>
              {`${capitalizeFirstLetter(pokeElement.name)}`}
            </NamePokemon>
            <NumberPokemon>{`${numberPokemon(pokeElement.id)}`}</NumberPokemon>
          </Header>
          <Hero>
            <img id="icone" src={pokemonType()} alt="grass_icon" />
            {!context.isLoading && pokeSpritesAnim && (
              <ImageCard
                src={pokeSpritesAnim.front_default}
                alt={`${pokeElement.name}_front_image`}
              />
            )}
          </Hero>
          <Botoes>
            <ImgRelease
              onClick={() => removePokemon(pokeElement)}
              src={actionButton1}
              alt="release_button"
            />
            <ImgInfoPokedex
              onClick={() => goToDetails(navigate)}
              src={infoBtn}
              alt="info_button"
            />
          </Botoes>
        </Card>
      </TypeBackground2>
    </DivPai>
  );
}

export default CardPokedex;
