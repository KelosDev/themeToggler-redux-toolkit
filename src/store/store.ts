// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light'
    },
    reducers: {
        switchTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
    },
})

export type RootState = ReturnType<typeof themeSlice.reducer>

const store = configureStore({
    reducer: themeSlice.reducer,
})

export const { switchTheme } = themeSlice.actions

export default store
