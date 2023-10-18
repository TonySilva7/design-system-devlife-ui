import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$devlife500',
  borderRadius: '$md',
})

export const App: React.FC = () => <Button>Hello, world!</Button>
