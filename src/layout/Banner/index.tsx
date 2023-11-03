import Image from "next/image";
import Container from "../Container";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../../public/font/ricknmorty.ttf" });
export default function Banner() {
    return (
        <Container>
            <section className="flex justify-between py-40">
                <div className="flex-col">
                    <h1 className="h1 text-primary text-4xl max-w-lg ">
                        Welcome, great to see you! <br />
                    </h1>
                    <p className="max-w-lg pt-3 text-secondary ">
                        This is my portfolio website or skills showcase which happens to be
                        <span className={`px-2 text-xl whitespace-nowrap font-semibold ${myFont.className}`}>
                            Rick and Morty
                        </span>
                        encyclopedia.
                    </p>
                </div>
                <div>
                    <Image
                        width={300}
                        height={290}
                        alt="portal"
                        src="/images/homepage/dimension-portal.jpg"
                        className="rounded-full"
                    />
                </div>
            </section>
        </Container>
    );
}
