import { EditIcon, IconProps } from "@chakra-ui/icons";
import React from "react";

function MyEditIcon(props: IconProps) {
  return (
    <EditIcon {...props} w={5} h={5} cursor={"pointer"} color={"blue.500"} />
  );
}

export default MyEditIcon;
