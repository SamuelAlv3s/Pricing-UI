import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ListItem } from "./ListItem";

export function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="2xl"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px">
            <Text
              fontSize="24px"
              fontWeight="800"
              textAlign={["center", "center", "left"]}
            >
              Premium PRO
            </Text>
            <Heading
              as="h3"
              fontSize="60px"
              mt="16px"
              textAlign={["center", "center", "left"]}
            >
              $320
            </Heading>
            <Text
              color="#171923"
              fontSize="18px"
              fontWeight="500"
              mt="8px"
              textAlign={["center", "center", "left"]}
            >
              billed just once
            </Text>
            <Button
              colorScheme="purple"
              size="lg"
              w={["100%", "100%", "282px"]}
              mt="24px"
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
