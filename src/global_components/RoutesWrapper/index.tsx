import { Routes, Route } from "react-router-dom"

export const RoutesWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
        </Routes>
    )
}