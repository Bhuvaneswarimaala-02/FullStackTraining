// Fetching and Displaying Images using API

import { useEffect, useState } from "react";
import axios from "axios";

var Images = () => {
    var [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?page=1&limit=10")
            .then((res) => {
                console.log(res);
                setImages(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <h1>Fetching Images from Lorem Picsum</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {images.map((image) => (
                    <div key={image.id} style={{ textAlign: "center" }}>
                        <img 
                            src={image.download_url} 
                            alt={`Image by ${image.author}`} 
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                        />
                        <p>By: {image.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Images;
