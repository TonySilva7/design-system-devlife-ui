import { ComponentProps } from 'react'
import { keyframes, styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})

const slideOut = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-100%)' },
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$devlife300',
    borderColor: '$devlife300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $devlife300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 150ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 150ms ease-out`,
  },
})

export type CheckboxContainerProps = ComponentProps<typeof CheckboxContainer>
