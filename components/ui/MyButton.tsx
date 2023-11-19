"use client";
import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import colors from "@/components/ui/ColorConsts";
function MyButton(props: ButtonProps) {
  let variant;
  if (!props.variant) variant = "solid";
  else variant = props.variant;
  return (
    <Button
      {...props}
      bgColor={variant == "solid" ? colors.primaryColor : "white"}
      color={variant == "solid" ? "white" : colors.primaryColor}
      borderWidth={variant == "solid" ? "0px" : "2px"}
      borderColor={variant == "solid" ? "white" : colors.primaryColor}
    >
      {props.children}
    </Button>
  );
}

export default MyButton;
