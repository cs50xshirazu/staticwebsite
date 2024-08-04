'use client'

import {
    isServer,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (isServer) {
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}

export type TanstackQueryProviderProps = {
    children: React.ReactNode
}

const TanstackQueryProvider = ({ children } : TanstackQueryProviderProps) => {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <div dir="ltr">
                <ReactQueryDevtools buttonPosition="bottom-right"/>
            </div>
        </QueryClientProvider>
    )
}

export default TanstackQueryProvider;