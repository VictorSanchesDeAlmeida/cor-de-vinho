import CardWellcome from "@/components/cardWellcome/cardWellcome";
import { Box, Stack } from "@chakra-ui/react";

export function AdminPanel({
  user,
}: {
  user: {
    first_name: string;
    last_name: string;
  };
}) {
  const username = [user.first_name].join(" ");

  return (
    <Box w="full" h="full">
      <Stack>
        <CardWellcome userName={username} />
      </Stack>
    </Box>
  );
}
