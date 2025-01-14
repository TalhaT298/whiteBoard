import React, { useEffect } from 'react';
import SimpleWhiteBoard from 'simple-white-board';

const Banner = () => {
    useEffect(() => {
        // Get the canvas element by its ID
        const canvas = document.getElementById('canvas');
        
        // Initialize the whiteboard
        if (canvas) {
            const whiteBoard = new SimpleWhiteBoard(canvas, {
                backgroundColor: '#ffffff', // Set the background color of the whiteboard
                width: 600, // Set the width
                height: 400, // Set the height
            });
        }
    }, []);

    return (
        <div>
            <h1>This is the Banner</h1>
            <canvas id="canvas"></canvas> {/* Canvas element for the whiteboard */}
        </div>
    );
};

export default Banner;
