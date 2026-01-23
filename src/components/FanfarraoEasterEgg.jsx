import React, { useState, useEffect } from 'react';

const FanfarraoEasterEgg = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    useEffect(() => {
        // Function to show the text at a random position
        const showRandomly = () => {
            const randomTop = Math.floor(Math.random() * 80) + 10; // 10% to 90%
            const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% to 90%

            setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
            setVisible(true);

            // Hide after 2 seconds
            setTimeout(() => {
                setVisible(false);
            }, 2000);
        };

        // Random interval between 3 and 8 seconds
        const loop = () => {
            const randomInterval = Math.random() * 5000 + 3000;
            setTimeout(() => {
                showRandomly();
                loop();
            }, randomInterval);
        };

        loop();

        return () => { }; // Cleanup not strictly necessary for this simple loop logic but good practice
    }, []);

    if (!visible) return null;

    return (
        <div
            className="fixed z-30 text-red-500 font-semibold text-xl md:text-2xl pointer-events-none animate-bounce shadow-white drop-shadow-md"
            style={{ top: position.top, left: position.left }}
        >
            RAFAEL FANFARRÃO
        </div>
    );
};

export default FanfarraoEasterEgg;
