import axios from "axios";
import { useState, useEffect } from "react";
import PhotoItem from "../PhotoItem/PhotoItem";
const PhotoList = () => {
    const [photos, setPhotos] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        if(load) {
            axios.get("https://jsonplaceholder.typicode.com/photos").then(response => {
            setPhotos(response.data);
        }).finally(() => {
            setLoad(false)
        })
        }
    }, [load]);

    

    return(
        <div>
            {photos.map((photo, index) => <PhotoItem photo={photo} key={index} /> )}
        </div>
    )
} 


export default PhotoList;