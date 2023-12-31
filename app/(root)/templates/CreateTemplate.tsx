"use client";
import MyButton from "@/components/ui/MyButton";
import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";

//
//цей компонент створює шаблони його бачить лише адмін
//

function CreateTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MyButton onClick={() => setIsOpen(true)}>Додати</MyButton>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Створення шаблону</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Назва документу</FormLabel>
              <Select>
                <option hidden>Виберіть назву</option>
                {["Первинний документ", "Проект", "Бізнес-план"].map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Організаційно-правова форма (ОПФ)</FormLabel>
              <Select>
                <option hidden>Виберіть форму</option>
                {[
                  "Всі",
                  "(110) Фермерське господарство",
                  "(240) Товариство з обмеженою відповідальністю",
                  "(910) Підприємець - фізична особа",
                ].map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Тип організаційної структури</FormLabel>
              <Select>
                <option hidden>Виберіть тип</option>
                {["Лінійна", "Функціональна", "Проектно-функціональна"].map(
                  (el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  )
                )}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Період розрахунку</FormLabel>
              <Select>
                <option hidden>Виберіть період</option>
                {["За рік помісячно", "За рік поквартально", "За рік"].map(
                  (el) => (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  )
                )}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <MyButton onClick={() => {}}>Зберегти</MyButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateTemplate;
