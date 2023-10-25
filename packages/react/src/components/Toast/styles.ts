import { ComponentProps } from 'react'
import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'
import { Text } from '../Text'

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  color: '$gray100',
  fontFamily: '$default',
  borderRadius: '$md',
  width: '22.5rem',
  padding: '1rem',
  listStyle: 'none',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$gray100',
})
export const ToastText = styled(Text, {
  color: '$gray200',
  fontWeight: '$regular',
  fontSize: 'small',
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
    fill: '$gray200',
  },
})

export type ToastContainerProps = ComponentProps<typeof ToastContainer>
