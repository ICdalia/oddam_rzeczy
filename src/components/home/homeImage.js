import React from "react";
import "../stylesHome.scss"
import homeImage from "../../assets/homeImage.png";
import HomeButton from "./homeButton";

const HomeImage = () => {
    return (
        <div className="container_structure" id="/">
            <div className="container_image">
                <img src={homeImage} alt="Home Image" className="image_home"/>
            </div>
            <HomeButton/>
        </div>
    )
};

export default HomeImage;