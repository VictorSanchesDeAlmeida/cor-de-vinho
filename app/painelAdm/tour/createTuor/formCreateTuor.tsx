"use client";

import { AgeRangeInput } from "@/components/ageRangeInput";
import { CheckboxSwitch } from "@/components/checkboxSwitch";
import EditorChakra from "@/components/editorChakra";
import { ImageUpload } from "@/components/imageUpload";
import InputField from "@/components/inputField";
import { SelectWee } from "@/components/selectWee";
import { SetHours } from "@/components/setHours";
import { Box, Button, Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { saveTour } from "./actions";
import { Toaster, toaster } from "@/components/ui/toaster";
import { redirect } from "next/navigation";

export interface FormDataTour {
  name: string;
  description: string;
  comission: string;
  publish: boolean;
  linkTour: string;
  selectedDays: string[];
  hours: string[];
  highSeason: boolean;
  angeRange: {
    descricao: string;
    preco: number;
  }[];
  imagem: FileList;
}

export function FormCreateTour() {
  const [description, setDescription] = useState("");
  const [diasSelecionados, setDiasSelecionados] = useState<string[]>([]);
  const [horarios, setHorarios] = useState<string[]>([""]);
  const [faixas, setFaixas] = useState([{ descricao: "", preco: 0 }]);
  const { register, control, handleSubmit } = useForm<FormDataTour>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormDataTour) => {
    setLoading(true);

    toaster.loading({
      id: "loading",
      title: "Criando passeio...",
      description: "Aguarde enquanto criamos o passeio.",
    });

    data.description = description;
    data.selectedDays = diasSelecionados;
    data.hours = horarios;
    data.angeRange = faixas;

    const response = await saveTour(data);

    toaster.dismiss("loading");

    if (!response.error) {
      toaster.success({
        title: "Passeio criado com sucesso!",
        description: "O passeio foi criado com sucesso.",
      });

      setLoading(false);

      redirect("/painelAdm/Tour");
    } else {
      toaster.error({
        title: `Erro ao criar passeio: ${response.error.message}`,
        description: "Tente novamente mais tarde.",
      });

      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Box>
          <Text color="black" fontSize={30} fontWeight="semibold" mb={2}>
            Novo Passeio
          </Text>
          <Text color="black" fontSize={20} mb={6}>
            Preencha todos os campos para adicionar um novo passeio na
            plataforma
          </Text>
        </Box>

        <Box textAlign="right">
          <Button
            type="submit"
            bg="#a6ce39"
            color="white"
            fontSize={20}
            fontWeight="semibold"
            _hover={{ bg: "lime.500" }}
            rounded="md"
          >
            {loading ? <Spinner size="md" /> : "Salvar"}
          </Button>
        </Box>
      </Flex>

      <Stack gap={4}>
        <InputField
          name="name"
          label="Nome do Passeio"
          type="text"
          register={register}
        />
        <EditorChakra value={description} onChange={setDescription} />
        <InputField
          name="comission"
          label="Porcentagem de Comissão"
          type="text"
          register={register}
        />
        <CheckboxSwitch name="publish" register={register} />
        <InputField
          name="linkTour"
          label="Link do Passeio"
          type="text"
          register={register}
        />
        <SelectWee
          diasSelecionados={diasSelecionados}
          setDiasSelecionados={setDiasSelecionados}
        />
        <SetHours horarios={horarios} setHorarios={setHorarios} />
        <CheckboxSwitch name="highSeason" register={register} />
        <AgeRangeInput faixas={faixas} setFaixas={setFaixas} />
        <ImageUpload register={register} />
      </Stack>
      <Toaster />
    </form>
  );
}
