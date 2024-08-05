"use client";

import TitleBar from "@/components/TitleBar";
import FaqBox from "@/app/components/Faq/FaqBox";
import { useMemo, useState } from "react";
import useFaqs from "@/hooks/api/faqs/useFaqs";

const Faq = () => {
    const [activeId, setActiveId] = useState(-1);
    const { data: faqs, isLoading } = useFaqs();

    const renderQuestions = useMemo(() => {
        return faqs?.map((question, index) => {
            return (
                <FaqBox
                    key={question.title}
                    title={question.title}
                    id={question.id}
                    activeId={activeId}
                    setActiveId={setActiveId}
                >
                    {question.answer}
                </FaqBox>
            );
        });
    }, [faqs, activeId]);

    return (
        <section className="container" id="frequently-asked-questions">
            <TitleBar className="gap-6">
                <span className="font-black whitespace-nowrap  text-xl sm:text-2xl">
                    سوالات متداول
                </span>
            </TitleBar>
            <div className="mt-[40px] flex flex-col gap-4">
                {renderQuestions}
            </div>
        </section>
    );
};

export default Faq;