import { Select, SelectProps } from "@chakra-ui/react";
import React from "react";
import colors from "@/components/ui/ColorConsts";

function MySelect(props: SelectProps) {
  return (
    <Select {...props} color={colors.primaryColor} fontWeight={"semiwbold"}>
      {props.children}
    </Select>
  );
}

export default MySelect;
