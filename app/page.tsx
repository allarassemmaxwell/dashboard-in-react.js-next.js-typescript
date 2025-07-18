
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper, User, Folders, MessageCircle } from "lucide-react";
import PostsTable from "@/components/dashboard/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-content gap-5 mb-5">
                <DashboardCard title="Posts" count={100} icon={<Newspaper className="text-slate-500" size={72} />} />
                <DashboardCard title="Categories" count={12} icon={<Folders className="text-slate-500" size={72} />} />
                <DashboardCard title="Users" count={750} icon={<User className="text-slate-500" size={72} />} />
                <DashboardCard title="Comments" count={1200} icon={<MessageCircle className="text-slate-500" size={72} />} />
            </div>
            <AnalyticsChart />
            <PostsTable title="Latest Posts" limit={5} />
        </>
    );
}
