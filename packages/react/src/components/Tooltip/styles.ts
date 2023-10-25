import { ComponentProps } from 'react'
import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  backgroundColor: '$gray900',
  minHeight: '2.75rem',
  minWidth: '13.6rem',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: 'small',
  color: '$gray100',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})

export type TooltipContainerProps = ComponentProps<typeof TooltipContent>
