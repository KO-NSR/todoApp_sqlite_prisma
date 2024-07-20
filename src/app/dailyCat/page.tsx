"use client";

import { useState } from "react";

interface SearchCatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}

const dailyCat = () => {
    const [catImg, setCatImg] = useState("");

    const fetchCatImage = async (): Promise<SearchCatImage> => {
        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();
        return data[0];
    }

    const handleClick = async () => {
        const catImgUrl = await fetchCatImage();
        setCatImg(catImgUrl.url);
    }

    return(
        <div>
            <h2>Today's Cat</h2>
            <img src={catImg} width={500} height="auto" />
            <button onClick={handleClick}>reload</button>
        </div>
    )

}

export default dailyCat;