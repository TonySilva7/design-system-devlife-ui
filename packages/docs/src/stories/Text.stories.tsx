import { Text, TextProps } from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secondary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
