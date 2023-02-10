import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = {darkTheme : false};

const themeSlice = createSlice({
    name : 'theme',
    initialState : initialThemeState,
    reducers: {
        turnDark(state){
            state.darkTheme = true;
            // Immer used internally to let you write simpler immutable update logic in a mutable syntax
        },
        turnLight(state){
            state.darkTheme = false;
        },
        toggleTheme(state){
            state.darkTheme= !state.darkTheme;
        }
    } 
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;