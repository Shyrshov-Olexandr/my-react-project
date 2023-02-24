import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
    return (
        <div>
            <StarRatings
                rating={rating}
                numberOfStars={10}
                starDimension="15px"
                starSpacing="2px"
                starRatedColor="orange"
                starEmptyColor={"darkgray"}
            />
        </div>
    );
};

export {
    StarsRating
};