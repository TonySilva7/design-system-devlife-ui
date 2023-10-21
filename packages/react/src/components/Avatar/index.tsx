import { ComponentProps } from 'react'
import { AvatarContainer } from './styles'

type AvatarProps = ComponentProps<typeof AvatarContainer>

function Avatar({ ...props }: AvatarProps) {
  return (
    <AvatarContainer {...props}>
      <h1>Hello Avatar</h1>
    </AvatarContainer>
  )
}

export { Avatar, type AvatarProps }
