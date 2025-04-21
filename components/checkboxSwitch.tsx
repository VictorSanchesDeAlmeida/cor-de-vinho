import { Switch, Text } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

interface CheckboxSwitchProps {
  name: string;
  register: UseFormRegister<any>;
}

export const CheckboxSwitch = ({ name, register }: CheckboxSwitchProps) => {
  return (
    <>
      <Text color="gray.800" fontWeight="semibold" fontSize={16}>
        Publicar
      </Text>
      <Switch.Root colorPalette="green" defaultChecked size={"lg"}>
        <Switch.HiddenInput {...register(name)} />
        <Switch.Control />
        <Switch.Label />
      </Switch.Root>
    </>
  );
};
