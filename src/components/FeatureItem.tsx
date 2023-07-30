import { HStack, Icon, StackProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface FeatureItemProps extends StackProps {
  icon: ElementType;
}

export function FeatureItem({ icon, children, ...rest }: FeatureItemProps) {
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text fontSize="lg" fontWeight="bold" textAlign="left">
        {children}
      </Text>
    </HStack>
  );
}
