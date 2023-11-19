import { ViewIcon, IconProps } from "@chakra-ui/icons";
import React from "react";

export default function MyViewIcon(props: IconProps) {
  return (
    <ViewIcon color={"blue.500"} cursor={"poinetr"} w={5} h={5} {...props} />
  );
}
