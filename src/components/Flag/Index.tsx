import { FlagContainer, Rounded, TBackgroundColor } from './styles.ts'
import { ReactNode } from 'react'

interface FlagProps {
  icon: ReactNode
  children: ReactNode
  backgroundColor: TBackgroundColor
}

export function Flag({ icon, backgroundColor, children }: Readonly<FlagProps>) {
  return (
    <FlagContainer>
      <Rounded $backgroundColor={backgroundColor}>{icon}</Rounded>
      <div>{children}</div>
    </FlagContainer>
  )
}
