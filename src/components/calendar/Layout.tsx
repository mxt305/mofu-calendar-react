import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}
function Layout({ children }: LayoutProps) {
    return <div className="mc-layout">{children}</div>;
}

export default Layout;
