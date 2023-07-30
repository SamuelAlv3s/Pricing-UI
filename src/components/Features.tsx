import { Box, Stack } from "@chakra-ui/react";
import { FeatureItem } from "./FeatureItem";
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icons";

export function Features() {
  return (
    <Box as="section" maxW="1024px" margin="auto" pt="60px" pb="8">
      <Stack
        direction={["column", "column", "row"]}
        px="12"
        spacing={["6", "6", "5"]}
      >
        <FeatureItem icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </FeatureItem>
        <FeatureItem icon={HassleFreeIcon}>
          No setup fees 100% hassle-free
        </FeatureItem>
        <FeatureItem icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </FeatureItem>
      </Stack>
    </Box>
  );
}
