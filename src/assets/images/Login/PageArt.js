import React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";

function PageArt() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="352"
            height="453"
            fill="none"
            viewBox="0 0 352 453"
        >
            <Path
                fill="#5F76EA"
                fillOpacity="0.6"
                d="M0 211L351 1.422v419.156L0 211z"
            ></Path>
            <Ellipse cx="298.5" cy="152" fill="#6CB9EA" rx="19.5" ry="19"></Ellipse>
            <Path
                fill="#9655EA"
                fillOpacity="0.6"
                d="M175.5 265L85.5.5H279L175.5 265z"
            ></Path>
            <Path
                fill="#A372F1"
                fillOpacity="0.6"
                d="M289.5 110L211.991-1.75h155.018L289.5 110z"
            ></Path>
        </Svg>
    );
}

export default PageArt;