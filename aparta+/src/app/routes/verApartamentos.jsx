import MainView from "*/mainView";
import React from "react";

const VerApartamentos = () => {
    return (
        <MainView sidebarType="thin">
            <div className="View-title">
                <h1>B4</h1>
            </div>
            <div className="View-imagenes">
                <img className="imagenes" src="./src/assets/house.png" alt="house"  imagenes />
                <img className="imagenes" src="./src/assets/house1.png" alt="house"  imagenes />
                <img className="imagenes" src="./src/assets/house3.png" alt="house"  imagenes />
                <img className="imagenes" src="./src/assets/house4.jpg" alt="house"  imagenes />
            </div>
        </MainView>
    );
}

export default VerApartamentos;