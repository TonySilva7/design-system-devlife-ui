import { ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer, InputProps } from './styles'

type TextInputProps = InputProps & {
  prefix?: string
}

const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput, type TextInputProps }
