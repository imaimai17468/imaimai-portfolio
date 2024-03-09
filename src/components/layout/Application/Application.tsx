import { RefObject } from 'react'

import { AppLinkCard } from '@/components/feature/AppLinkCard'

export interface ApplicationProps {
  applicationRef?: RefObject<HTMLDivElement>
}

const Application: React.FC<ApplicationProps> = ({ applicationRef }: ApplicationProps) => (
  <div ref={applicationRef}>
    <AppLinkCard />
  </div>
)

export default Application
