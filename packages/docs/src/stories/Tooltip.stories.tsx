import {
  Box,
  Text,
  Tooltip,
  TooltipAppWrapper,
  TooltipProps,
} from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    textContent: '21 de Outubro - Indisponível',
  },
  decorators: [
    (Story) => (
      <TooltipAppWrapper>
        <Story />
      </TooltipAppWrapper>
    ),
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'É necessário que você envolva a sua aplicação com o componente `TooltipAppWrapper` para que o tooltip funcione corretamente.',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Box css={{ width: '$20', color: '$gray200' }}>Hover me</Box>,
  },
}

export const WithText: StoryObj<TooltipProps> = {
  args: {
    children: <Text css={{ width: 'fit-content' }}>Hover me</Text>,
    textContent: 'Only read me',
  },
}
