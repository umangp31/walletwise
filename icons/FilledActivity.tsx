import * as React from "react";
import Svg, { SvgProps, G, Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const FilledActivity = (props: SvgProps) => (
  <Svg
    viewBox="0 -5.5 20 20"
    fill="#000000"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Defs />
      <G
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G
          id="Dribbble-Light-Preview"
          transform="translate(-260.000000, -3845.000000)"
          fill="#9d4edd"
        >
          <G id="icons" transform="translate(56.000000, 160.000000)">
            <Path
              d="M216.512,3685 L210.796,3690.79 L208.051,3688.155 L208.044,3688.162 L208.038,3688.156 L204,3692.386 L205.453,3693.8 L208.115,3691.033 L210.859,3693.653 L216.512,3687.885 L219.252,3690.66 C219.545,3690.028 220.046,3689.514 220.666,3689.208 L216.512,3685 Z M224,3691.96 C224,3693.087 223.098,3694 221.986,3694 C220.874,3694 219.973,3693.087 219.973,3691.96 C219.973,3690.833 220.874,3689.92 221.986,3689.92 C223.098,3689.92 224,3690.833 224,3691.96 L224,3691.96 Z"
              id="activity-[#9d4edd]"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default FilledActivity;
