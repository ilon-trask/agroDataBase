import { FormLabel, FormLabelProps } from "@chakra-ui/react";
import React from "react";

export default function MyFormLabel(props: FormLabelProps) {
  return <FormLabel {...props}>{props.children}</FormLabel>;
}
