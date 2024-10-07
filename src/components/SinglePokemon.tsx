import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";  // Import Pokemon interface to type the component props

// Styled component for displaying a single Pokemon, using flexbox for layout and applying styles
const SinglePokemonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    padding: 2%;
    margin: 5%;
    background-color: lightblue; 
    color: black; 
    border: 3px darkblue solid;
    font: small-caps bold calc(2px + 1vw) 'Cinzel', 'Quicksand', serif;
    text-wrap: balance;
    text-align: center;
`;

// Styled component for the Pokemon images, setting layout and sizing of the images
const PokemonImages = styled.div`
    display=flex;
    justify-content: center;
    margin-top: 1%;
    img{
        margin: 0 2%;
        width: 80%;
        height: auto;
    }
`;

// React component for displaying a single Pokemon's details
export default function SinglePokemon({name, types, hp, images,rarity}:Pokemon){
    console.log(images.small);  // Logs the small image URL to the console for debugging purposes
    return(
        <SinglePokemonDiv>
            <PokemonImages>
                <img src={images.large} alt={ `${name} small`}/>  
            </PokemonImages>
            <h1>{name}</h1>  
            <p>Type: {types}</p>  
            <p>Rarity: {rarity}</p>  
            <p>HP: {hp}</p>  
        </SinglePokemonDiv>
    );
}
