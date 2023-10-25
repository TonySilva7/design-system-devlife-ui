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

function Tooltip({ children, textContent, ...props }: TooltipProps) {
  return (
    <TT.Provider>
      <TooltipContainer {...props}>
        <TT.Trigger asChild>{children}</TT.Trigger>

        <TT.Portal>
          <TooltipContent sideOffset={5}>
            {textContent}
            <TooltipArrow />
          </TooltipContent>
        </TT.Portal>
      </TooltipContainer>
    </TT.Provider>
  )
}

Tooltip.displayName = 'Tooltip'

export { Tooltip, type TooltipProps }
