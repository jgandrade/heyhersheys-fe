import React from 'react'
import { Box } from "@mui/material"
import { webStyle } from "./styles/AppWrapper.styles"

interface ReactWrapper {
    children: React.ReactNode;
}
export const AppWrapper = ({ children }: ReactWrapper) => {
    return (
        <Box sx={webStyle.AppStyle}>{children}</Box>
    )
}