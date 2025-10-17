import { createContext, ReactNode, useState } from "react";

interface contextValues {
    ids: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<contextValues>({
    ids: [],
    addFavorite: (id: string) => { },
    removeFavorite: (id: string) => { },
});

function FavoriteContextProvider({ children }: { children: ReactNode }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setFavoriteMealIds(prev => [...prev, id])
    };

    const removeFavorite = (id: string) => {
        setFavoriteMealIds(prev => prev.filter(mealId => mealId !== id));
    };

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    };

    return <FavoritesContext.Provider
        value={value}>
        {children}
    </FavoritesContext.Provider>;
}

export default FavoriteContextProvider;