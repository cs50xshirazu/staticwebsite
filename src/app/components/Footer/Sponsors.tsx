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
                <Link key={sponsor.id} href={sponsor.link}
                      className="shrink-0 size-[35px] sm:size-[40px] md:size-[50px] relative">
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
            <a referrerPolicy="origin" target="_blank"
               href="https://trustseal.enamad.ir/?id=522399&amp;Code=o8fqvvZMjohX11ANciXEsgcm2YoIl6av"><img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=522399&amp;Code=o8fqvvZMjohX11ANciXEsgcm2YoIl6av" alt=""
                // @ts-ignore
                code="o8fqvvZMjohX11ANciXEsgcm2YoIl6av" /></a>
            {renderSponsors}
        </div>
    );
};

export default Sponsors;