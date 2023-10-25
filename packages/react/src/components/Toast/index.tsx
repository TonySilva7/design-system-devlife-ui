import * as RToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { FC } from 'react'
import { Heading } from '../Heading'
import { Text } from '../Text'
import {
  ToastAction,
  ToastButton,
  ToastContainer,
  ToastContainerProps,
  ToastText,
  ToastTitle,
} from './styles'

type ToastProps = ToastContainerProps & {
  title: string
  description?: string
}

const ToastAppProvider: FC<RToast.ToastProviderProps> = ({ children }) => {
  return <RToast.Provider>{children}</RToast.Provider>
}

function Toast({ title, description, ...props }: ToastProps) {
  return (
    <>
      <ToastContainer {...props}>
        <ToastTitle>
          <Heading css={{ fontSize: '$xl', color: '$white' }}>{title}</Heading>
        </ToastTitle>
        <RToast.Description asChild>
          <ToastText>{description}</ToastText>
        </RToast.Description>
        <ToastAction asChild altText="x">
          <ToastButton>
            <X />
          </ToastButton>
        </ToastAction>
      </ToastContainer>
      <RToast.Viewport />
    </>
  )
}

Toast.displayName = 'Toast'

export { Toast, ToastAppProvider, type ToastProps }
