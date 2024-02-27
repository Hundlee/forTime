import Header from "./_component/header";
import { Button } from "../_components/ui/button";
import Carousel from "./_component/carouselComponent";
import Progress from "./_component/progress";
import CardProgress from "./_component/progress";

export default function Home() {
    return (
        <main>
            <Header />
            <section className="mt-5 px-5">
                <h1 className="text-3xl font-semibold">
                    Hello, <span className="font-bold">Gabriel!</span>
                </h1>
                <h3 className="text-xl text-primary ">Have a nice day!</h3>
            </section>
            <div className="mt-10 px-5">
                <Button className="mr-4 rounded-full bg-secondary-foreground font-bold text-black gap-4 shadow-md">
                    My tasks{" "}
                    <span className="border-2 border-primary rounded-full">
                        {" "}
                    </span>
                </Button>
                <Button className="mr-4 rounded-full bg-secondary-foreground text-secondary font-bold gap-4">
                    Project
                </Button>
                <Button className="mr-4 rounded-full bg-secondary-foreground text-secondary font-bold gap-4">
                    Note
                </Button>
            </div>
            <section className="mt-5 overflow-x-auto [&::-webkit-scrollbar]:hidden flex">
                <Carousel />
            </section>

            <div className="px-5 mt-5 w-full">
                <h1 className="text-xl font-semibold">Progress</h1>

                <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex gap-3">
                    <CardProgress />
                </div>
            </div>
        </main>
    );
}
