"use client";

import Image from "next/image";
import useSponsors from "@/hooks/api/sponsors/useSponsors";
import { useMemo } from "react";
import Link from "next/link";

const Sponsors = () => {
    const { data: sponsors, isLoading } = useSponsors();

    const renderSponsors = useMemo(() => {
        return sponsors?.filter(sponsor => sponsor.icon !== null).map((sponsor) => {
            return (
                <Link key={sponsor.id} href={sponsor.link} className="shrink-0 size-[35px] sm:size-[40px] md:size-[50px] relative">
                    <Image
                        className="w-full"
                        src={sponsor.icon!}
                        alt={sponsor.title}
                        fill
                    />
                </Link>
            );
        });
    }, [sponsors]);

    return (
        <div className="flex items-center gap-4">
            <Link
                referrerPolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=522399&Code=o8fqvvZMjohX11ANciXEsgcm2YoIl6av"
                className="shrink-0 size-[35px] sm:size-[40px] md:size-[50px] relative"
            >
                <Image
                    referrerPolicy="origin"
                    src="https://trustseal.enamad.ir/logo.aspx?id=522399&Code=o8fqvvZMjohX11ANciXEsgcm2YoIl6av"
                    alt=""
                    width={50} // Adjust to the desired size
                    height={50} // Adjust to the desired size
                    style={{ cursor: 'pointer' }}
                />
            </Link>
            {renderSponsors}
        </div>
    );
};

export default Sponsors;