import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoriteStore = create(
    persist(
        (set ,get) => ({
            favorites: [],
            toggleFavorite: (id) => {
                const current = get().favorites;
                const exists = current.includes(id);

                set({
                    favorites: exists
                        ? current.filter((x) => x !== id)
                        : [...current, id],
                });
            }
        }),
        { name : 'favorite-store' }
    )
);