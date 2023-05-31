import { Routes, Route } from "react-router-dom"
import * as PAGE from "../../pages/index"

export const RoutesWrapper = () => {
    return (
        <Routes>
            <Route path="/" element={<PAGE.Home />} />
        </Routes>
    )
}