"use client";

import { FindUserById } from "@/api/user/findUser";
import { supabase } from "@/lib/supabase/browser";
import { Box, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PainelAdmPage() {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserName() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        console.error("Erro ao buscar usuário:", error);
        setLoading(false);
        return;
      }

      const userData = await FindUserById({ id: user.id });

      if (userData?.first_name) {
        setFirstName(userData.first_name);
      }

      setLoading(false);
    }

    loadUserName();
  }, []);

  return (
    <Box w="full" h="full">
      <Stack>
        <Box w="full" minH={20} bg="white" rounded="xl" p={6} shadow="sm">
          <Text color="black" fontSize={20} fontWeight="medium">
            Seja bem vindo,
          </Text>
          <Text color="black" fontSize={26} fontWeight="semibold">
            {loading ? `Carregando nome` : `${firstName} 👋`}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
