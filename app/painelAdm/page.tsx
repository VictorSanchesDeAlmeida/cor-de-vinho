"use client";

import { FindUserById } from "@/api/user/findUser";
import CardWellcome from "@/components/cardWellcome/cardWellcome";
import { supabase } from "@/lib/supabase/browser";
import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function PainelAdmPage() {
  "use cache";

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    async function getUserName() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const userData = await FindUserById({ id: user.id });
        setFirstName(userData?.first_name || "");
      }
    }

    getUserName();
  }, []);

  return (
    <Box w="full" h="full">
      <Stack>
        <CardWellcome userName={firstName} />
      </Stack>
    </Box>
  );
}
