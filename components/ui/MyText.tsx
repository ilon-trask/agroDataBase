"use client";
import { Text, TextProps } from "@chakra-ui/react";
import color from "@/components/ui/ColorConsts";
import React from "react";

function MyText(props: TextProps) {
  return (
    <Text {...props} color={color.primaryColor} fontSize={"16px"}>
      {props.children}
    </Text>
  );
}

export default MyText;
