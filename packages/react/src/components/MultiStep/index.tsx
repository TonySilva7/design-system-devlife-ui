import {
  Label,
  MultiStepContainer,
  MultiStepContainerProps,
  Steps,
  Step,
} from './styles'

type MultiStepProps = MultiStepContainerProps & {
  size: number
  currentStep?: number
}

function MultiStep({ size, currentStep = 1, ...props }: MultiStepProps) {
  return (
    <MultiStepContainer {...props}>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size, width: '100%' }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

export { MultiStep, type MultiStepProps }
