import React, { useEffect } from 'react';
import SimpleWhiteBoard from 'simple-white-board';

const Banner = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas');

        if (canvas) {
            // Set logical size (coordinate system)
            const logicalWidth = 1200; // Logical canvas width
            const logicalHeight = 800; // Logical canvas height

            // Set the physical display size to match
            canvas.style.width = `${logicalWidth}px`;
            canvas.style.height = `${logicalHeight}px`;

            // Set the canvas resolution to match the logical size
            canvas.width = logicalWidth;
            canvas.height = logicalHeight;

            // Initialize SimpleWhiteBoard with the logical size
            const whiteBoard = new SimpleWhiteBoard(canvas, {
                backgroundColor: '#ffffff',
                width: logicalWidth,
                height: logicalHeight,
            });

            // Debug: Log the canvas size
            console.log('Canvas initialized with:', {
                width: canvas.width,
                height: canvas.height,
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
