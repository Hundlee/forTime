import { Sidebar } from "lucide-react";
import Header from "./_component/header";

export default function Home() {
    return (
        <main>
            <Header />
            <section className="mt-5 px-5">
                <h1 className="text-3xl font-semibold">
                    Hello, <span className="font-bold">Gabriel!</span>
                </h1>
                <h3 className="text-xl text-primary">Have a nice day!</h3>
            </section>
        </main>
    );
}
