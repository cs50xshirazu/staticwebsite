"use client";

import {NextUIProvider} from '@nextui-org/react'

export type NextUiProviderWrapperProps = {
    children: React.ReactNode;
}

const NextUiProviderWrapper = ({ children }: NextUiProviderWrapperProps) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}

export default NextUiProviderWrapper;