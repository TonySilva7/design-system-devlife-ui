import { ComponentProps } from 'react'
import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  padding: '$2 $4',
  fontFamily: '$default',
  color: '$gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export type TooltipContainerProps = ComponentProps<typeof TooltipContent>
