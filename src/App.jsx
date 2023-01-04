import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { getPhotos } from "./store/GalleryReducer"
function App() {
  const dispatch = useDispatch()
  const photos = useSelector( state => state.gallery.photos) ;
 

  useEffect( () =>{
      dispatch(getPhotos()) ;
      console.log(photos)
  } ,[dispatch])
  return (
    <div className="App">
          <h1>Photo Gallery</h1>
          <p>made with Redux toolkit</p>
          <hr />
          <div className="gallery">
            {photos.map( photo => {
              return (
                <img  key={photo.id} src={photo.download_url} alt={photo.author} width="350px" height="350px"/>
              )
            })        
              
            } 
          </div>
          <button>View More..</button>
    </div>
  )
}

export default App
