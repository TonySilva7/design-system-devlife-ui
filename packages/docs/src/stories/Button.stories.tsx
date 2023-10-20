import { Button, ButtonProps } from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  tittle: 'Button',
  component: Button,
  args: {
    children: 'Só clique',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {
  args: {
    children: 'Click me',
  },
}

export const Secondary: StoryObj = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    sizeVariant: 'big',
  },
}
