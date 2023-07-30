import { HStack, StackProps, Icon, Text } from "@chakra-ui/react";
import { CheckIcon } from "../icons/Icons";

export function ListItem({ children, ...rest }: StackProps) {
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text>{children}</Text>
    </HStack>
  );
}
