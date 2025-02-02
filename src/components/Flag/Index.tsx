import { FlagContainer, Rounded, TBackgroundColor } from './styles.ts'
import { ReactNode } from 'react'

interface FlagProps {
  icon: ReactNode
  text: string
  backgroundColor: TBackgroundColor
}

export function Flag({ icon, text, backgroundColor }: Readonly<FlagProps>) {
  return (
    <FlagContainer>
      <Rounded $backgroundColor={backgroundColor}>{icon}</Rounded>
      <span>{text}</span>
    </FlagContainer>
  )
}
