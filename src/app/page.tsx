"use client";

import AnimatedLink from "@/components/AnimatedLink";
import Episodes from "@/components/Episodes";
import Banner from "@/layout/Banner";
import Container from "@/layout/Container";
import Navigation from "@/layout/Navigation";
import Image from "next/image";

export default function Home() {
    return (
        <Container>
            <header className="flex w-full max-w-6xl justify-between items-center fixed top-6 ">
                <AnimatedLink linkHref="/">
                    <Image width={210} height={70} src={"/images/homepage/homepage.png"} alt="homepage" />
                </AnimatedLink>
                <Navigation />
            </header>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Banner />
                <Episodes />
            </main>
        </Container>
    );
}
