import React, { useState } from "react";
import { ChakraProvider, Box, VStack, HStack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Button, useToast } from "@chakra-ui/react";
import { FaCalculator } from "react-icons/fa";

const Index = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");

  const toast = useToast();

  const handleCalculate = (operation) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    let calcResult = 0;
    switch (operation) {
      case "add":
        calcResult = num1 + num2;
        break;
      case "subtract":
        calcResult = num1 - num2;
        break;
      case "multiply":
        calcResult = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          toast({
            title: "Math Error",
            description: "Cannot divide by zero.",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          return;
        }
        calcResult = num1 / num2;
        break;
      default:
        return;
    }

    setResult(calcResult);
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Simple Calculator <FaCalculator />
          </Text>
          <HStack>
            <NumberInput value={value1} onChange={(valueString) => setValue1(valueString)}>
              <NumberInputField placeholder="Enter number 1" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <NumberInput value={value2} onChange={(valueString) => setValue2(valueString)}>
              <NumberInputField placeholder="Enter number 2" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <HStack justify="center" spacing={4}>
            <Button colorScheme="blue" onClick={() => handleCalculate("add")}>
              Add
            </Button>
            <Button colorScheme="green" onClick={() => handleCalculate("subtract")}>
              Subtract
            </Button>
            <Button colorScheme="purple" onClick={() => handleCalculate("multiply")}>
              Multiply
            </Button>
            <Button colorScheme="orange" onClick={() => handleCalculate("divide")}>
              Divide
            </Button>
          </HStack>
          <Text fontSize="xl">Result: {result}</Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
