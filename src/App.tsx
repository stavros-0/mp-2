import useSWR from "swr";  // Import useSWR hook for data fetching
import PokemonList from "./components/PokemonList.tsx"  // Import PokemonList component to display Pokemon
import styled from "styled-components";  // Import styled-components for styling

// Styled component for the parent div that wraps the whole app, centering content and setting background color
const ParentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f0f0f0;
`;

// Main App component
function App() {
    
    // Using SWR hook to fetch Pokemon data from the API, with error handling
    const {data, error} = useSWR("https://api.pokemontcg.io/v2/cards?pageSize=8", (url)=>
      fetch(url).then(res=>res.json())  // Fetch data from the API and return as JSON
    );

    // If there's an error, display the error message
    if (error) return <h1>Error: {error.message}</h1>;

    // If the data hasn't loaded yet, display a loading message
    if (!data) return <h1>Loading...</h1>;
    
    // Once data is loaded, render the PokemonList component, passing the fetched data
    return (
      <ParentDiv>
        <PokemonList data={data.data} />  {/* Pass the 'data.data' from the API response to PokemonList */}
      </ParentDiv>
    );
}

export default App;  // Export the App component as default
