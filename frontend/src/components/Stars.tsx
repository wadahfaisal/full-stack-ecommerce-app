import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { StarsProps as Props } from "../types/propsTypes";

const Stars = ({ stars, reviews }: Props) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className="stars-component">
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
