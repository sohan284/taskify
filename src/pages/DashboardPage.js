import CustomCard from "../components/DashboardPage/CustomCard";

function DashboardPage() {
    return (
        <div className="lg:ml-64 mt-20 sm:ml-64">
            <div className="grid grid-cols-4 gap-5">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </div>
        </div>
    )
}
export default DashboardPage;