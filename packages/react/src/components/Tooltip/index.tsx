import { FC } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContainerProps,
  TooltipContent,
} from './styles'

import * as TT from '@radix-ui/react-tooltip'

type TooltipProps = TooltipContainerProps & {
  textContent: string
}

const TooltipAppWrapper: FC<TT.TooltipProviderProps> = ({ children }) => {
  if (!children) {
    throw new Error('TooltipAppWrapper must have children')
  }

  return <TT.TooltipProvider>{children}</TT.TooltipProvider>
}

function Tooltip({ children, textContent, ...props }: TooltipProps) {
  return (
    <TooltipContainer {...props}>
      <TT.Trigger asChild>{children}</TT.Trigger>

      <TT.Portal>
        <TooltipContent sideOffset={5}>
          {textContent}
          <TooltipArrow />
        </TooltipContent>
      </TT.Portal>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip, TooltipAppWrapper, type TooltipProps }
