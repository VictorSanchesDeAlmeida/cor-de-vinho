"use client";

import {
  Box,
  Button,
  Container,
  Field,
  Fieldset,
  Input,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { supabase } from "@/lib/supabase/browser";
import { redirect } from "next/navigation";

type LoginInputForm = {
  email: string;
  password: string;
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm<LoginInputForm>();

  const onSubmit: SubmitHandler<LoginInputForm> = async (e) => {
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword(e);

    if (error) {
      setLoading(false);
      return setError(error.message);
    }

    redirect("/painelAdm");
  };

  return (
    <Container py={40}>
      <Box
        w="full"
        maxW="lg"
        mx="auto"
        bg="#851732"
        p={10}
        rounded="xl"
        shadow="lg"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Root mx="auto" size="lg">
            <Stack>
              <Fieldset.Legend color="white" fontSize={30} fontWeight="bold">
                Acessar painel
              </Fieldset.Legend>
              <Fieldset.HelperText>
                Acesse o painel com as suas credenciais.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label color="white">Email address</Field.Label>
                <Input
                  {...register("email", { required: "Email obrigatório" })}
                  type="email"
                  bg="white"
                  color="black"
                />
              </Field.Root>

              <Field.Root>
                <Field.Label color="white">Senha</Field.Label>
                <Input
                  {...register("password", { required: true })}
                  type="password"
                  bg="white"
                  color="black"
                />
              </Field.Root>
            </Fieldset.Content>
            {error ? <ErrorMessage text={error} /> : ""}
            <Button type="submit" alignSelf="flex-start">
              {loading ? <Spinner size="md" /> : "logar"}
            </Button>
          </Fieldset.Root>
        </form>
      </Box>
    </Container>
  );
}

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <>
      <Text>{text}</Text>
    </>
  );
};
