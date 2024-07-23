export {};

declare global {
    type Course = {
        image: string;
        title: string;
        link: string;
    }

    type Sponsor = {
        title: string;
        image: string;
        link: string;
    }

    type QuestionAnswer = {
        title: string;
        description: description;
    }

    type Employee = {
        name: string;
        job: string;
        image : string;
        socialMedias?: {
            title: string,
            link: string;
            icon: string;
        }[]
    }
}