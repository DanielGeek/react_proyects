
import { useState, useEffect } from 'react';

import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons );
  }, []);

  return (
    <Layout title='Pokémons - Favorites'>
      <NoFavorites />
    </Layout>
  )
}

export default FavoritesPage