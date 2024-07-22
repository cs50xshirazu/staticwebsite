import TitleBar from "@/components/TitleBar";
import Sponsor from "@/app/components/Sponsors/Sponsor";
import DividerShape from "@/components/DividerShape";

const Sponsors = () => {

    const sponsors: Sponsor[] = [
        {
            image: "/images/sponsors/noavari.jpg",
            title: "کارخانه نوآوری",
            link: "https://shirazsuf.ir/"
        },
        {
            image: "/images/sponsors/shiraz-university.jpg",
            title: "دانشگاه شیراز",
            link: "https://shirazu.ac.ir/"
        },
        {
            image: "/images/sponsors/sponser.png",
            title: "ارسال درخواست اسپانسری",
            link: "https://shirazidev.ir"
        }
    ];

    const renderSponsors = () => {
        return sponsors.map((sponsor) => <Sponsor {...sponsor} key={sponsor.title}/>);
    };

    return (
        <section className="container mt-[40px]">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    اسپانسر های ما
                </span>
            </TitleBar>
            <div className="mt-[40px] gap-12 text-center">
                <span className="font-black whitespace-nowrap">با پذیرش نقش اسپانسر در ، شما به عنوان عضو ارزشمند در ترویج دانش و فرهنگ در جامعه شناخته خواهید شد.</span>
            </div>
            <div className="text-center">
                <span className="font-black whitespace-nowrap">ما منتظر همکاری با شما هستیم تا با هم، یک همایش علمی بی‌نظیر را برگزار کنیم.</span>
            </div>

            <div className="mt-[40px] mb-[30px] flex justify-center items-center gap-12 max-sm:flex-wrap">
                {renderSponsors()}
            </div>

            <DividerShape simple />
        </section>
    );
};

export default Sponsors;