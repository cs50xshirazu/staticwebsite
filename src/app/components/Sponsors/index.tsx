import TitleBar from "@/components/TitleBar";
import Sponsor from "@/app/components/Sponsors/Sponsor";
import DividerShape from "@/components/DividerShape";
import Paragraph from "@/components/Paragraph";

const Sponsors = () => {

    const sponsors: SponsorType[] = [
        {
            id : 1,
            photo: "/images/sponsors/shiraz-university.jpg",
            title: "دانشگاه شیراز",
            link: "https://shirazu.ac.ir/"
        },
        {
            id : 2,
            photo: "/images/sponsors/sponser.png",
            title: "ارسال درخواست اسپانسری",
            link: "https://sponsor.cs50xshiraz.ir"
        }
    ];

    const renderSponsors = () => {
        return sponsors.map((sponsor) => <Sponsor {...sponsor} key={sponsor.title}/>);
    };

    return (
        <section className="container mt-[40px]" id="spnsor">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    اسپانسر های ما
                </span>
            </TitleBar>

            <Paragraph className="!text-center mt-[40px] !text-lg !font-bold px-8 !leading-[180%]">
                با پذیرش نقش اسپانسر در ، شما به عنوان عضو ارزشمند در ترویج دانش و فرهنگ در جامعه شناخته خواهید شد.
                <br />
                ما منتظر همکاری با شما هستیم تا با هم، یک همایش علمی بی‌نظیر را برگزار کنیم.
            </Paragraph>

            <div className="mt-[40px] mb-[30px] flex justify-center items-center gap-12 max-sm:flex-wrap">
                {renderSponsors()}
            </div>

            <DividerShape simple />
        </section>
    );
};

export default Sponsors;