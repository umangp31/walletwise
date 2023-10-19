// import { Image } from "expo-image";
import React from "react";
import getIPFSLink from "../../utils/getIPFSlink";
import { Image } from "react-native";
// import getIPFSLink from "utils/getIPFSLink";

type AvatarProps = {
  src: string;
  height: number | string;
  width: number | string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  height,
  width,
  borderRadius = 500,
  borderColor = "transparent",
  borderWidth = 0,
  opacity = 1,
}) => {
  const STATIC_COVER =
    "https://lens.infura-ipfs.io/ipfs/bafybeibv2kpqpjtvuj5uprvq6knnr2reb7ylq3o4bnypqjioqgxmjw2akq/5460475.webp";

  const resolvedSrc =
    getIPFSLink(src) === STATIC_COVER
      ? `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.floor(
          53 * Math.random()
        )}.jpg`
      : getIPFSLink(src);

  return (
    <Image
    //   placeholderContentFit="cover"
    //   transition={500}
    //   priority="high"
      source={{
        uri: resolvedSrc,
      }}
      style={{
        // opacity,
        // height,
        // width,
        // borderRadius,
        backgroundColor: "white",
        borderColor,
        borderWidth,
        zIndex: 9,
      }}
    />
  );
};

export default React.memo(Avatar);
