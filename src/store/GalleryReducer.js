import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";



//make api call
export const getPhotos = createAsyncThunk(
     'photos/getPhotos',
     async () =>{
         const response =  await fetch('https://picsum.photos/v2/list?page=2&limit=9') ;
         const formatResponse = await response.json() ;
         return formatResponse ;
     }
) 

const gallerySlice = createSlice({
     name: "gallery",
     initialState: {
          photos: [],
          isLoading: false
     },
     extraReducers: {
          [getPhotos.pending]: (state) =>{
               state.isLoading =  true 
          },
          [getPhotos.fulfilled]: (state,action) =>{
               state.photos = action.payload ;
               state.isLoading = false ;
          },
          [getPhotos.rejected]: (state) =>{
               state.isLoading =  false 
          }
     }
})


export default gallerySlice.reducer ;