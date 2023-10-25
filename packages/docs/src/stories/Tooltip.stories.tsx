import {
  Tooltip,
  TooltipProps,
  Button,
  Text,
  TooltipAppWrapper,
} from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    textContent: 'Click to something',
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
    children: (
      <Button variant="primary" size="sm">
        Hover me
      </Button>
    ),
  },
}

export const WithText: StoryObj<TooltipProps> = {
  args: {
    children: <Text css={{ width: 'fit-content' }}>Hover me</Text>,
    textContent: 'Only read me',
  },
}
