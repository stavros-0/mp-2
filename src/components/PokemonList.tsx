import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";  // Import the Pokemon interface to ensure correct typing
import SinglePokemon from "./SinglePokemon.tsx";  // Import SinglePokemon component to render each Pokemon

// Styled component for the container of all Pokemon, using flexbox to arrange items in rows and wrap them
const AllPokemonDiv = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    
    background-color: lightgray;
`;

// React component for rendering a list of Pokemon
export default function PokemonList({ data }: { data: Pokemon[] }) {
    return (
        <AllPokemonDiv>
            {
                // Map over the Pokemon data array and render a SinglePokemon component for each entry
                data.map((pokemon: Pokemon) =>
                    <SinglePokemon
                        key={pokemon.id}  // Use the Pokemon ID as the unique key for each component
                        id={pokemon.id}  // Pass the Pokemon's ID as a prop
                        name={pokemon.name}  // Pass the Pokemon's name as a prop
                        types={pokemon.types}  // Pass the Pokemon's type(s) as a prop
                        rarity={pokemon.rarity}  // Pass the Pokemon's rarity as a prop
                        hp={pokemon.hp}  // Pass the Pokemon's HP as a prop
                        images={pokemon.images}  // Pass the Pokemon's images as a prop
                    />
                )
            }
        </AllPokemonDiv>
    );
}
