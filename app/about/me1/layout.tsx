import { Suspense } from "react"

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense >
            <h1>这是about的layout</h1>
            {children}
        </Suspense>
    )
}
        