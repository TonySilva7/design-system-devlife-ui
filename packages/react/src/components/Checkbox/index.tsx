import { Check } from 'phosphor-react'
import {
  CheckboxContainer,
  CheckboxContainerProps,
  CheckboxIndicator,
} from './styles'

type CheckBoxProps = CheckboxContainerProps

function CheckBox({ ...props }: CheckBoxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

export { CheckBox, type CheckBoxProps }
