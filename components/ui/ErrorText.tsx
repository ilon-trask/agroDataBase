"use client";
import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

function ErrorText(props: TextProps) {
  return (
    <Text color={"red.500"} fontSize={"sm"} {...props}>
      {props.children}
    </Text>
  );
}

export default ErrorText;
