import { DeleteIcon, IconProps } from "@chakra-ui/icons";
import React from "react";

export default function MyDeleteIcon(props: IconProps) {
  return (
    <DeleteIcon color={"red.500"} w={5} h={5} cursor={"pointer"} {...props} />
  );
}
