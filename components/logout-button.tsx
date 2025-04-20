"use client";

import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase/browser";
import { FiLogOut } from "react-icons/fi";
import { redirect } from "next/navigation";

export function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth
      .signOut({
        scope: "global",
      })
      .finally(redirect("/"));
  };

  return (
    <Box w="full" bg="white" rounded="xl" p={4}>
      <Flex
        w="full"
        h="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image h="40px" w="40px" rounded="full" src="/aboutImage.png" />
        <Text color="black" fontSize={16}>
          Configurar Conta
        </Text>
        <Button onClick={handleLogout} size="xs">
          <Icon size="md">
            <FiLogOut />
          </Icon>
        </Button>
      </Flex>
    </Box>
  );
}
