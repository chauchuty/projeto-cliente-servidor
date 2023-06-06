import { ReactNode } from "react"

type ContentProps = {
    children: ReactNode | Array<ReactNode> | undefined
}

function ContentComponent(props: ContentProps) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">


            <div id="content">
                {
                    Array.isArray(props.children) && props.children[0]
                }

                <div className="container-fluid">
                    {Array.isArray(props.children) && props.children[1]}
                </div>
            </div>
        </div>
    )
}

export default ContentComponent