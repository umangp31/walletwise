import React from "react";
import { Text, TextProps } from "react-native";

export const Paragraph: React.FC<TextProps> = (props) => {
  const getFontFamily = (fontWeight: string | undefined) => {
    if (fontWeight === undefined) {
      return "Inter_Regular";
    }

    switch (fontWeight) {
      case "900":
        return "Inter_Black";
      case "800":
        return "Inter_ExtraBold";
      case "700" || "bold":
        return "Inter_Bold";
      case "600":
        return "Inter_SemiBold";
      case "500":
        return "Inter_Medium";
      default:
        return "Inter_Regular";
    }
  };

  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: getFontFamily(props?.style?.fontWeight),
        },
      ]}
    >
      {props.children}
    </Text>
  );
};
