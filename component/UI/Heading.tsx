import React from "react";
import { Text, TextProps } from "react-native";

export const Heading: React.FC<TextProps> = (props) => {
  const getFontFamily = (fontWeight: string | undefined) => {
    if (fontWeight === undefined) {
      return "Rubik_Regular";
    }

    switch (fontWeight) {
      case "900":
        return "Rubik_Black";
      case "800":
        return "Rubik_ExtraBold";
      case "700" || "bold":
        return "Rubik_Bold";
      case "600":
        return "Rubik_SemiBold";
      case "500":
        return "Rubik_Medium";
      default:
        return "Rubik_Regular";
    }
  };

  return (
    <Text
      {...props}
      style={[
        props.style,
        // {
        //   fontFamily: getFontFamily(props?.style?.fontWeight),
        // },
      ]}
    >
      {props.children}
    </Text>
  );
};
