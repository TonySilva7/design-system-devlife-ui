import { Input, Prefix, TextInputContainer, InputProps } from './styles'

type TextInputProps = InputProps & {
  prefix?: string
}

function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

export { TextInput, type TextInputProps }
