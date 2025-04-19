"use client";

import { Button } from "@chakra-ui/react";
import { supabase } from "@/lib/supabase/browser";

export function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth
      .signOut({
        scope: "global",
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}
