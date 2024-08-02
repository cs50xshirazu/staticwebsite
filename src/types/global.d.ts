export {};

declare global {
    type CourseType = {
        image: string;
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
        job: string;
        photo: string;
        category: string;
        counter: number;
        team_category: {
            id: number,
            team: string;
            category: string;
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