import { Field, Fieldset, Input } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<any>;
}

const InputField = ({
  name,
  label,
  placeholder,
  type,
  register,
}: InputFieldProps) => {
  return (
    <Fieldset.Root mx="auto" size="lg">
      <Fieldset.Content>
        <Field.Root>
          <Field.Label color="gray.800" fontSize={16}>
            {label}
          </Field.Label>
          <Input
            placeholder={placeholder ? placeholder : label}
            type={type ? type : "text"}
            rounded="lg"
            fontSize={18}
            color="black"
            {...register(name)}
          />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default InputField;
