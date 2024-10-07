import styled from "styled-components";
import {Pokemon} from "../interfaces/Pokemon.ts";
import SinglePokemon from "./SinglePokemon.tsx";

const AllPokemonDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    
    background-color: lightgray;
`;

export default function PokemonList({ data }: { data: Pokemon[] }) {
    return (
        <AllPokemonDiv>
            {
                data.map((pokemon: Pokemon) =>
                    <SinglePokemon
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                        rarity={pokemon.rarity}
                        hp={pokemon.hp}
                        images={pokemon.images}


                    />
                )
            }
        </AllPokemonDiv>
    );
}