import { Card, CardFooter, Skeleton } from "@nextui-org/react";

const SponsorsPlaceholder = () => {

    const renderPlaceholders = () => {
        return Array.from({length : 8}).fill(" ").map((i) => {
            return (
                <Card key={i as string} className="w-[200px]" shadow="sm">
                    <div className="p-3">
                        <Skeleton className="rounded-lg aspect-square w-full">
                        </Skeleton>
                    </div>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <div className="h-3 w-[50%] rounded-lg bg-default-400"></div>
                        <div className="h-3 w-full rounded-lg bg-default-200"></div>
                    </CardFooter>
                </Card>
            )
        });
    }

    return (
        <div className="w-full flex flex-wrap gap-10">
            {renderPlaceholders()}
        </div>
    )
}

export default SponsorsPlaceholder;