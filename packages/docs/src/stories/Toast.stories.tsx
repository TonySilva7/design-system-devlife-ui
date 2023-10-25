import { ToastProps, ToastAppProvider, Toast } from '@devlife-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    title: 'Hello!',
    description: 'This is a toast',
    duration: 3000,
    defaultOpen: true,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <ToastAppProvider swipeDirection="right">
        <Story />
      </ToastAppProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Este componente deve ser usado dentro do `ToastAppProvider`.',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
