"use client";
import { Field, Fieldset, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ITourSearch {
  search: string;
}

export function SearchTour() {
  const { register, handleSubmit } = useForm<ITourSearch>();

  const onSubmit: SubmitHandler<ITourSearch> = (data) => {
    console.log(data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root>
        <Fieldset.Content>
          <Field.Root>
            <Input
              type="text"
              color="black"
              bg="white"
              rounded="md"
              placeholder="Pesquisar Passeio"
              _placeholder={{ color: "gray.500" }}
              fontSize={16}
              fontWeight="medium"
            />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </form>
  );
}
