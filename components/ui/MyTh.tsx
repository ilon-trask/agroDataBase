"use client";
import { Th, TableColumnHeaderProps } from "@chakra-ui/react";
import React from "react";

function MyTh(props: TableColumnHeaderProps) {
  return (
    <Th fontSize={"20px"} {...props}>
      {props.children}
    </Th>
  );
}

export default MyTh;
