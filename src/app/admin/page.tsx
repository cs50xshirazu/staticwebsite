import AuthValidationProvider from "@/providers/AuthValidationProvider";
import CountBox from "@/app/admin/components/CountBox";
import axios from "@/utils/axios";
import customFetch from "@/utils/fetch";
import SectionTitle from "@/app/admin/components/SectionTitle";

type AnalyticsResponse = {
    views_today: 248,
    unique_views_today: 1,
    all_views: 12176,
    unique_views: 1
}

const Admin = async () => {

    const response = await customFetch<AnalyticsResponse>("api/analytics_post/stats/");

    return (
        <AuthValidationProvider>
            <SectionTitle title="آمار و ارقام وبسایت" />
            <div className="flex items-center gap-8">
                <CountBox count={response.views_today} text="تعداد بازدید امروز" />
                <CountBox count={response.all_views} text="تعداد بازدید کل" />
            </div>
        </AuthValidationProvider>
    );
};

export default Admin;