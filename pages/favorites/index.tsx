import { useState, useEffect } from 'react';
import { localFavorites } from '@/utils';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemon } from '@/components/pokemon';

const FavoritesPage = () => {

    const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemon(localFavorites.allPokemon());
    }, [])
    
    return (
        <Layout title='Favorites'>

            {
                favoritePokemon.length === 0 ?
                <NoFavorites />
                :
                <FavoritePokemon pokemon={favoritePokemon} />
            }

        </Layout>
    )
}

export default FavoritesPage