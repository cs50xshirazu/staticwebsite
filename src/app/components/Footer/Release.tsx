"use client";

import useReleaseTag from "@/hooks/api/vcs/useReleaseTag";

const Release = () => {
    const { data: releaseTag } = useReleaseTag()

    return (
        <div className="text-white max-sm:text-center">
            {releaseTag ? (
                `website : ${releaseTag.latest_website_version} - api : ${releaseTag.latest_api_version}`
            ) : "درحال بارگذاری ورژن ها"}
        </div>
    );
};

export default Release;