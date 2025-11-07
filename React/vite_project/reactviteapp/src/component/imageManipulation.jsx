import React, { useState } from 'react';
import img from './spider-man-neon-marvel-superheroes-cosplay-3840x2160-965.jpg';

function ImageManipulation() {
    const [imgHeight, setImgHeight] = useState(200);
    const [imgWidth, setImgWidth] = useState(200);
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    const [rotation, setRotation] = useState(0);

    function increaseHeight() {
        setImgHeight(imgHeight + 20);
    }

    function decreaseHeight() {
        setImgHeight(imgHeight - 20);
    }

    function increaseWidth() {
        setImgWidth(imgWidth + 20);
    }

    function decreaseWidth() {
        setImgWidth(imgWidth - 20);
    }

    function changeBgColor() {
        setRed(Math.floor(Math.random() * 255));
        setGreen(Math.floor(Math.random() * 255));
        setBlue(Math.floor(Math.random() * 255));
    }

    function imageRotate() {
        setRotation(rotation + 20);
    }

    return (
        <div>
            <h2>Image Manipulation</h2>
            <div style={{ border: '2px solid black', height: '450px', margin: '0 auto' }}>
                <img
                    src={img}
                    height={imgHeight}
                    width={imgWidth}
                    alt="Cat"
                    style={{
                        paddingTop: '70px',
                        paddingLeft: '70px',
                        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                        transition: '0.3s',
                        transform: `rotate(${rotation}deg)`
                    }}
                />
            </div>

            <div>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={decreaseWidth}>Decrease Width</button>
                <button onClick={changeBgColor}>Change Background Color</button>
                <button onClick={imageRotate}>Rotate Image</button>

                <div>
                    <h2>Image Height: {imgHeight}</h2>
                    <h2>Image Width: {imgWidth}</h2>
                </div>
            </div>
        </div>
    );
}

export default ImageManipulation;
