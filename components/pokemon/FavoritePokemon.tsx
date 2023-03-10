import { NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    pokemon: number[]
}

export const FavoritePokemon: NextPage<Props> = ({ pokemon }):JSX.Element => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                pokemon.map( (id) => (
                    <FavoriteCardPokemon key={id} id={id} />
                ))
            }
        </Grid.Container>
    )
}
