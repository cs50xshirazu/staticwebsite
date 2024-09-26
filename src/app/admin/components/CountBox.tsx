import { Card, CardBody } from "@nextui-org/react";

export type CountBoxProps = {
    count: number;
    text: string;
}

const CountBox = ({ count, text }: CountBoxProps) => {
    return (
        <Card shadow="sm">
            <CardBody className="overflow-visible px-6 py-8">
                <div className="w-full relative rounded-2xl">
                    <div className="text-6xl text-white font-bold persian-number text-right">
                        {Intl.NumberFormat("fa-IR", {}).format(count)}
                    </div>
                    <div className="text-foreground-600 text-right pt-2">{text}</div>
                </div>
            </CardBody>
        </Card>
    );
};

export default CountBox;