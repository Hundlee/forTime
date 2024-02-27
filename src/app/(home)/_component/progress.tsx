import CardProgress from "./cardProgress";

const Progress = () => {
    return (
        <>
            <div className="px-5 mt-5 w-full">
                <h1 className="text-xl font-semibold">Progress</h1>
            </div>
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-5 px-5 mt-2">
                <CardProgress />
                <CardProgress />
                <CardProgress />
            </div>
        </>
    );
};

export default Progress;
