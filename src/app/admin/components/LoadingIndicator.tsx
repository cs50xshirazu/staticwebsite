"use client";

import { Progress } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

export type LoadingIndicatorProps = {
    queries: string[];
}

const LoadingIndicator = ({ queries }: LoadingIndicatorProps) => {
    const { isFetching } = useQuery({
        queryKey: queries
    });

    return (
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-400 ${isFetching ? "opacity-100" : "opacity-0"}`}
        />
    );
};

export default LoadingIndicator;
