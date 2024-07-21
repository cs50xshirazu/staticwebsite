"use client";

import TitleBar from "@/components/TitleBar";
import FaqBox from "@/app/components/Faq/FaqBox";
import { useState } from "react";

const Faq = () => {
    const [activeId, setActiveId] = useState(0);

    const questions: QuestionAnswer[] = [
        {
            title: "آیا برای ثبت نام حتما باید ساکن شیراز باشم؟",
            description: `
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.
            `
        }
    ];

    return (
        <section className="container">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    سوالات متداول
                </span>
            </TitleBar>
            <div className="mt-[40px] flex flex-col gap-4">
                <FaqBox title="آیا برای ثبت نام حتما باید ساکن شیراز باشم؟" id={0} activeId={activeId}
                        setActiveId={setActiveId}>
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.
                </FaqBox>
                <FaqBox title="test test" id={1} activeId={activeId} setActiveId={setActiveId}>
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.
                </FaqBox>
                <FaqBox title="test test" id={2} activeId={activeId} setActiveId={setActiveId}>
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.
                </FaqBox>
                <FaqBox title="test test" id={3} activeId={activeId} setActiveId={setActiveId}>
                    این گواهی به این علت معتبر است که می توانید آن را در وبسایت دانشگاه هاروارد استعلام کنید و همچنین
                    تمام فرایند تصحیح تمرینات و صدور گواهی از طریق سی اس فیفتی دانشگاه هاروارد آمریکا انجام خواهد شد.
                </FaqBox>
            </div>
        </section>
    );
};

export default Faq;