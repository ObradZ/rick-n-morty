"use client";

import AnimatedLink from "@/components/AnimatedLink";
import Episodes from "@/components/Episodes";
import ImageGallery from "@/components/Gallery";
import Banner from "@/layout/Banner";
import Container from "@/layout/Container";
import Navigation from "@/layout/Navigation";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <header className="w-screen fixed top-0 z-10 bg-bg flex justify-center py-1">
                <div className="flex w-full max-w-6xl justify-between items-center">
                    <AnimatedLink linkHref="/">
                        <Image width={210} height={70} src={"/images/homepage/homepage.png"} alt="homepage" />
                    </AnimatedLink>
                    <Navigation />
                </div>
            </header>
            <Container>
                <main className="flex min-h-screen flex-col items-center justify-between p-24">
                    <Banner />
                    <Episodes />
                    <ImageGallery />
                </main>
            </Container>
        </>
    );
}
