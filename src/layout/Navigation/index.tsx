"use client";

import { useEffect, useState } from "react";
import AnimatedLink from "../../components/AnimatedLink";
import { useParams } from "next/navigation";

const anchors = [
    { label: "Home", href: "" },
    { label: "Episodes", href: "#episodes" },
    { label: "Characters", href: "#characters" },
    { label: "Gallery", href: "#gallery" },
];

const Navigation = () => {
    const params = useParams();
    const [hash, seHash] = useState("");
    useEffect(() => {
        seHash(window.location.hash);
    }, [params]);

    return (
        <nav>
            <ul className="list-none flex space-x-4">
                {anchors.map((link) => (
                    <li key={link.label}>
                        <AnimatedLink isActive={hash === link.href} linkHref={link.href}>
                            {link.label}
                        </AnimatedLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
