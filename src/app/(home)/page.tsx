import Header from "./_component/header";
import { Button } from "../_components/ui/button";
import Carousel from "./_component/carouselComponent";
import Progress from "./_component/progress";

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

            <Progress />
        </main>
    );
}
