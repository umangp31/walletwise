import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Money = (props: SvgProps) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 15 15"
    fill="none"
    {...props}
  >
    <Path
      d="M11 10.5H12.5V9M11 4.5H12.5V6M4 4.5H2.5V6M2.5 9V10.5H4M7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5ZM1.5 2.5H13.5C14.0523 2.5 14.5 2.94772 14.5 3.5V11.5C14.5 12.0523 14.0523 12.5 13.5 12.5H1.5C0.947716 12.5 0.5 12.0523 0.5 11.5V3.5C0.5 2.94772 0.947715 2.5 1.5 2.5Z"
      stroke="#000000"
    />
  </Svg>
);
export default Money;
