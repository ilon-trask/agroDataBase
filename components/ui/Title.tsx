"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";
import colors from "./ColorConsts";
import React from "react";

function Title(props: HeadingProps) {
  return (
    <Heading
      fontWeight={"bold"}
      fontSize={"57px"}
      letterSpacing={"-2%"}
      color={colors.primaryColor}
      {...props}
    >
      {props.children}
    </Heading>
  );
}

export default Title;
