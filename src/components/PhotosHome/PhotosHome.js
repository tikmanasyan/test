import axios from "axios";
import { useEffect, useState } from "react";
import PhotosHomeApi from "./../PhotosHomeApi/PhotosHomeApi";

const PhotosHome = () => {
    const [data,setData] = useState([]);
    const [isFatch,setIsFatch] = useState(true);
    const [max,setMax] = useState(0);

    useEffect(() => {
        if(isFatch && (data.length < max) || max === 0) {
            axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1").then(response => {
                const photos = response.data.map(photo => ({
                    ...photo,
                    isChecked:false
                }));
                setMax(+response.headers["x-total-count"]);
                setData(pravData => [...pravData, ...photos]);
            }).finally(() => {
                setIsFatch(false);
            });
        };
    },[isFatch]);

    return (
        <div>
            {data.map((item, index) => <PhotosHomeApi key={index} a={item.url} /> )};
        </div>
    );

}



export default PhotosHome;