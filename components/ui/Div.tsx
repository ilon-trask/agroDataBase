"use client";
import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
function Div(props: BoxProps) {
  return <Box {...props}>{props.children}</Box>;
}

export default Div;
