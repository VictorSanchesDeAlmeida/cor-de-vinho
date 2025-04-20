import { Field, Fieldset, Input } from "@chakra-ui/react";
import { register } from "module";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
}

const InputField = ({ label, placeholder, type }: InputFieldProps) => {
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
          />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
};

export default InputField;
