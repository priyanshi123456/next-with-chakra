"use client";
import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  Text,
  Form,
  FormLabel,
  Container,
  Textarea,
  Checkbox,
} from "@chakra-ui/react";

function Contact() {
  return (
    <div>
      <Container>
        <FormControl>
          <FormLabel>Task name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a decriptive task name</FormHelperText>
        </FormControl>
        <FormControl mt={"30px"}>
          <FormLabel>Task description</FormLabel>
          <Textarea placeholder="Enter the detail description"></Textarea>
        </FormControl>
        <FormControl display={"flex"} alignItems={"center"} mt={"10px"}>
          <Checkbox name="isPriority" size={"lg"}/>
          <FormLabel ml={"10px"}>Make this a Priority task</FormLabel>
        </FormControl>
      </Container>
    </div>
  );
}

export default Contact;
