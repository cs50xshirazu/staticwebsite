export {};

declare global {
    type EventType = {
        id: number;
        photo: string;
        title: string;
        link: string;
    }

    type SponsorType = {
        id: number;
        title: string;
        photo: string;
        icon?: string;
        link: string;
    }

    type FaqType = {
        id: number;
        title: string;
        answer: string;
    }

    type TeamType = {
        id: number;
        name: string;
        job_elmi: string | null;
        job_tech: string | null;
        job_marketing: string | null;
        job_executive: string | null;
        job_mohtava: string | null;
        photo: string;
        counter: number;
        team_categories: {
            id: number,
            name: string;
        }[],
        team_socials: {
            id: number,
            team: string;
            link: string;
            icon: string;
            alt: string;
        }[]
    }

    type ApiPaginatedResponse<D> = {
        count: number;
        next: string;
        previous: string;
        results: D[];
    };
}