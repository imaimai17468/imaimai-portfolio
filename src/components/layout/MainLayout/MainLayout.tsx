import { Header } from '@/components/screen'

import { MainLayoutProps } from './MainLayout.type'

export const MainLayout: React.FC<MainLayoutProps> = ({ children }: MainLayoutProps) => (
  <div>
    <Header />
    {children}
  </div>
)

export default MainLayout
