import { Tooltip, TooltipProps, Button, Text } from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    textContent: 'Click to something',
  },
  argTypes: {
    children: {
      control: {
        type: null,
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
