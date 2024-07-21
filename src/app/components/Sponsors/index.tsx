import TitleBar from "@/components/TitleBar";
import Sponsor from "@/app/components/Sponsors/Sponsor";
import DividerShape from "@/components/DividerShape";

const Sponsors = () => {

    const sponsors: Sponsor[] = [
        {
            image: "/images/sponsors/noavari.jpg",
            title: "کارخانه نوآوری"
        },
        {
            image: "/images/sponsors/frontchapter.png",
            title: "فرانت چپتر"
        },
        {
            image: "/images/sponsors/shiraz-university.jpg",
            title: "دانشگاه شیراز"
        }
    ];

    const renderSponsors = () => {
        return sponsors.map((sponsor) => <Sponsor {...sponsor} />);
    };

    return (
        <section className="container mt-[40px]">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    اسپانسر های ما
                </span>
            </TitleBar>

            <div className="mt-[40px] mb-[30px] flex justify-center items-center gap-12 max-sm:flex-wrap">
                {renderSponsors()}
            </div>

            <DividerShape simple />
        </section>
    );
};

export default Sponsors;