"use client";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";
interface Props extends ModalProps {}
export default function Dialog(props: Props) {
  return (
    <Modal {...props} isCentered>
      <ModalOverlay />
      <ModalContent>{props.children}</ModalContent>
    </Modal>
  );
}
