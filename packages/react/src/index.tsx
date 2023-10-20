import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$devlife300',
  borderRadius: '$sm',
  border: 'none',
  fontWeight: '$bold',
  color: '$white',

  variants: {
    sizeVariant: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    sizeVariant: 'small',
  },
})

export type ButtonProps = {
  sizeVariant: 'small' | 'big'
}
