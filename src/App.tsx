import useSWR from "swr";
import PokemonList from "./components/PokemonList.tsx"
import styled from "styled-components";

const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;
`;

function App() {
    
    const{data, error} = useSWR("https://api.pokemontcg.io/v2/cards?pageSize=8", (url)=>
      fetch(url).then(res=>res.json())
    );

    if (error) return <h1>Error: {error.message}</h1>;
    if (!data) return <h1>Loading...</h1>;
    
    return (
      <ParentDiv>
        <PokemonList data={data.data} /> 
      </ParentDiv>
    );
}

export default App;
