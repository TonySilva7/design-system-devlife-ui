import { ComponentProps } from 'react'
import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  borderRadius: '$md',
  maxWidth: '20rem',
  padding: '1rem',
  listStyle: 'none',
  position: 'relative',
})
export const ToastTitle = styled(Toast.Title, {
  color: '$gray100',
})

export const ToastDescription = styled(Toast.Description, {
  color: 'red',
})

export const ToastAction = styled(Toast.Action, {
  lineHeight: 0,
  position: 'absolute',
  top: '$2',
  right: '$2',
})

export const ToastButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  svg: {
    color: '$gray100',
  },
})

export type ToastContainerProps = ComponentProps<typeof ToastContainer>
