import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";
import { pokeAPi } from "@/api";
import { Layout } from "@/components/layouts";
import { PokemonCard } from "@/components/pokemon";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

interface Props {
    pokemon: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemon }): JSX.Element => {
    
    return (
        <Layout title="List pokemon">
            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemon.map( (pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </Grid.Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

    const { data } = await pokeAPi.get<PokemonListResponse>('/pokemon?limit=151');
    
    const pokemon: SmallPokemon[] = data.results.map( (poke, i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1}.svg`
    }))

    return {
        props: {
            pokemon
        }
    }
}

export default Home;