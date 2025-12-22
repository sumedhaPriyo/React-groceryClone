import { useState } from "react";

const StarRating = ({ totalStars = 5, onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            className={`cursor-pointer text-xl transition
              ${value <= (hover || rating)
                ? "text-yellow-400"
                : "text-gray-300"}`}
            onClick={() => {
              setRating(value);
              onChange && onChange(value);
            }}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
