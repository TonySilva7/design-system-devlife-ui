import { User } from 'phosphor-react'
import {
  AvatarContainer,
  AvatarContainerProps,
  AvatarFallback,
  AvatarImage,
} from './styles'

type AvatarProps = AvatarContainerProps

function Avatar({ ...props }: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={500}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

export { Avatar, type AvatarProps }
