import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
    persist( // <-- store para no perder login del usuario
        (set) => ({
            user: null,
            login: (userData) => set({ user: userData }),
            logout: () => set ({ user: null })
        }),
        {
            name: 'user-store' // nombre del item en el almacenamiento
        }
    )
)