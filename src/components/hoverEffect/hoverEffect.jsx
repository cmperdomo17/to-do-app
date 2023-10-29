import { useState } from 'react';

const useHoverEffect = () => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const textStyle = {
        textShadow: isHovered ? '0px 1px 25px #60a5fa' : 'none'
    };

    return { onMouseEnter, onMouseLeave, textStyle };
};

export { useHoverEffect };