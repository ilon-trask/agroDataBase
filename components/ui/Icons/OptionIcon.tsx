"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

function OptionIcon(props: BoxProps) {
  return (
    <Box {...props} cursor={"pointer"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="26"
        viewBox="0 0 4 26"
        fill="none"
      >
        <circle cx="2" cy="8" r="2" fill="#193417" />
        <circle cx="2" cy="16" r="2" fill="#193417" />
        <circle cx="2" cy="24" r="2" fill="#193417" />
      </svg>
    </Box>
  );
}

export default OptionIcon;
