import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ColorsFilterProps as Props } from "../types/propsTypes";

const ColorsFilter = ({ colors, color, updateFilter }: Props) => {
  const [showColors, setShowColors] = useState(false);
  const displayColors = (index: number, color: string) => {
    const num = 13;
    if (index <= num) {
      return { background: color, display: "flex" };
    }

    if (index > num) {
      if (showColors) {
        // return "flex";
        return { background: color, display: "flex" };
      } else {
        // return "none";
        return { background: color, display: "none" };
      }
    }
  };

  return (
    <div className="form-control">
      <h5>colors</h5>
      <div className="colors">
        {colors.map((c: string, index: number) => {
          if (c === "all") {
            return (
              <button
                key={index}
                name="color"
                onClick={updateFilter}
                className={color === "all" ? "all-btn active" : "all-btn"}
                data-color={c}
              >
                all
              </button>
            );
          }

          return (
            <button
              key={index}
              name="color"
              // onClick={updateFilter}
              onClick={(e) => {
                updateFilter(e);
                // window.scrollTo({ top: 0 });
              }}
              // style={{ background: c, display: display(index) }}
              style={displayColors(index, c)}
              className={color === c ? "color-btn active" : "color-btn"}
              data-color={c}
            >
              {color === c ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        className="show-colors"
        onClick={() => setShowColors(!showColors)}
      >
        {showColors ? "show less" : "show more"}

        {showColors ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
    </div>
  );
};

export default ColorsFilter;
