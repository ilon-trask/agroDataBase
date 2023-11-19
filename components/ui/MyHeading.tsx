"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";
import React, { MutableRefObject } from "react";
import colors from "@/components/ui/ColorConsts";
interface props extends HeadingProps {
  aref?: MutableRefObject<any> | undefined;
}
function MyHeading(props: props) {
  return (
    <Heading
      textAlign={"center"}
      fontSize={"40px"}
      fontWeight={600}
      color={colors.primaryColor}
      {...props}
      ref={props.aref}
    >
      {props.children}
    </Heading>
  );
}

export default MyHeading;
