import { MainLayoutProps } from "./MainLayout.type";
import { Header } from "@/components/screen";

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
