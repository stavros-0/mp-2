import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";


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
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-wrap: balance;
    text-align: center;
`;
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

export default function SinglePokemon({name, types, hp, images,rarity}:Pokemon){
    console.log(images.small);
    return(
        <SinglePokemonDiv>
            <PokemonImages>
                <img src={images.large} alt={ `${name} small`}/>
            </PokemonImages>
            <h1>{name}</h1>
            <p>{types}</p>
            <p>{rarity}</p>
            <p>{hp}</p>
        </SinglePokemonDiv>

    );
}