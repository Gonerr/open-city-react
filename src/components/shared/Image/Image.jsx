import React from 'react';
import styles from "./Image.module.css";
const Image = ({src, position, setHoveredIndex, index}) => {
    let imageClass = '';

    if (position === 'center') {
        imageClass = styles.hovered;
    } else if (position === 'left') {
        imageClass = styles.shrinkLeft;
    } else if (position === 'right') {
        imageClass = styles.shrinkRight;
    } else {
        imageClass = styles.shrink;
    }

    return (
        <div
            className={`${styles.imageContainer} ${imageClass}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <img className={`${styles.picture} picture`}
                 src={src}
                 alt="img"
            />
        </div>
    );
};

export default Image;