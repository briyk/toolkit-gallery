import {configureStore} from '@reduxjs/toolkit'

import gallerySlice from './GalleryReducer';

const store = configureStore({
     reducer: {
          gallery : gallerySlice
     }
})

export default store ;