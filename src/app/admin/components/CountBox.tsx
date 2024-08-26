import { Card, CardBody } from "@nextui-org/react";

export type CountBoxProps = {
    count: number;
    text: string;
}

const CountBox = ({ count, text }: CountBoxProps) => {
    return (
        <Card shadow="sm">
            <CardBody className="overflow-visible h-[150px] px-6 py-8">
                <div className="w-full relative aspect-square rounded-2xl flex gap-2 flex-col justify-between items-start">
                    <span className="text-6xl text-white font-bold persian-number">
                        {Intl.NumberFormat("fa-IR", {}).format(count)}
                    </span>
                    <span className="text-foreground-600">{text}</span>
                </div>
            </CardBody>
        </Card>
    );
};

export default CountBox;