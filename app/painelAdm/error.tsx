"use client";

import { Container, Text } from "@chakra-ui/react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <Container>
      <Text>Error</Text>
    </Container>
  );
}
