import Header from "./_component/header";
import { Button } from "../_components/ui/button";
import Progress from "./_component/progress";
import Navigator from "../_components/navigator";
import CarouselProject from "./_component/carouselProject";
import { auth } from "../_services/auth";

export default async function Home() {
    const session = await auth();

    return (
        <main>
            <Header />
            <section className="mt-5 px-5">
                <h1 className="text-3xl font-semibold">
                    Hello,{" "}
                    {session ? (
                        <span className="font-bold">!</span>
                    ) : (
                        <span className="font-bold">Go to Login!</span>
                    )}
                </h1>
                <h3 className="text-xl text-primary ">Have a nice day!</h3>
            </section>

            <section className="overflow-x-auto [&::-webkit-scrollbar]:hidden flex">
                <CarouselProject />
            </section>

            {session && <Progress />}
            <Navigator />
        </main>
    );
}
