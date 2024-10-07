// Define the Pokemon interface to ensure consistent structure for Pokemon data
export interface Pokemon {
    id: string;  // Unique identifier for the Pokemon
    name: string;  // Name of the Pokemon
    types: string;  // Type(s) of the Pokemon (e.g., Fire, Water)
    rarity: string;  // Rarity level of the Pokemon (e.g., common, rare)
    hp: string;  // Hit points (HP) of the Pokemon
    images: {  // Object containing various image URLs for the Pokemon
        symbol: string;  // URL for the symbol image of the Pokemon
        logo: string;  // URL for the logo image of the Pokemon
        small: string;  // URL for the small version of the Pokemon's image
        large: string;  // URL for the large version of the Pokemon's image
    }
}
