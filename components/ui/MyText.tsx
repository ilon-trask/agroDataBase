"use client";
import { Text, TextProps } from "@chakra-ui/react";
import color from "@/components/ui/ColorConsts";
import React from "react";

function MyText(props: TextProps) {
  return (
    <Text color={color.primaryColor} fontSize={"16px"} {...props}>
      {props.children}
    </Text>
  );
}

export default MyText;
