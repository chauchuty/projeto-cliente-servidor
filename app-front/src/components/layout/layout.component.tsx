import { ReactNode } from "react"
import SidebarComponent from "./sidebar.component"
import ContentComponent from "./content.component"
import NavComponent from "./nav.component"

type LayoutProps = {
    children: ReactNode
}

function LayoutComponent(props: LayoutProps) {
    return (
        <div id="wrapper">
            <SidebarComponent />
            <ContentComponent>
                <NavComponent />
                {props.children}
            </ContentComponent>
        </div>
    )
}

export default LayoutComponent