import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ENS = (props: SvgProps) => (
  <Svg
    fill="#5298FF"
    height={32}
    viewBox="0 0 32 32"
    width={20}
    {...props}
  >
    <Path d="m5.7592 7.55037c.30026-.55738.73349-1.03257 1.26171-1.38361l8.86329-6.16676-9.08157 14.9623s-.79345-1.3361-1.10301-2.0121c-.38558-.85-.58007-1.7737-.5698-2.7065.01027-.93276.22512-1.85203.62938-2.69333zm-3.65802 10.32143c.10009 1.4308.50582 2.8238 1.19009 4.0857.68417 1.262 1.63113 2.3637 2.77739 3.2314l9.80364 6.8111s-6.13378-8.8074-11.30729-17.5713c-.52382-.9259-.87594-1.9383-1.03952-2.9885-.0724-.4756-.0724-.9594 0-1.435-.13492.2491-.39673.759-.39673.759-.5246 1.0659-.8819 2.2058-1.05938 3.3799-.10214 1.2409-.09148 2.4886.0318 3.7277zm24.99522 1.1858c-.3175-.6759-1.1031-2.0121-1.1031-2.0121l-9.0656 14.9545 8.8633-6.1628c.5281-.3511.9615-.8262 1.2617-1.3836.4043-.8414.619-1.7606.6294-2.6933.0103-.9328-.1842-1.8566-.5699-2.7066zm3.5984-4.9255c-.1001-1.4307-.5058-2.8238-1.19-4.0857-.6843-1.26192-1.6312-2.36366-2.7775-3.23128l-9.7878-6.81512s6.1298 8.80737 11.3074 17.5713c.5224.9262.8731 1.9385 1.0355 2.9885.0724.4756.0724.9594 0 1.435.1349-.2491.3967-.759.3967-.759.5246-1.0659.8819-2.2058 1.0593-3.3799.1035-1.2409.0942-2.4885-.0277-3.7277z" />
  </Svg>
);
export default ENS;
