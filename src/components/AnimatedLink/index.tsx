import Link from "next/link";
import { ReactNode } from "react";

const AnimatedLink = ({
    children,
    linkHref,
    isActive,
}: {
    children: ReactNode;
    linkHref: string;
    isActive?: boolean;
}) => (
    <Link
        className={`cursor-pointer ${isActive ? "text-primary" : "text-white"} hover:text-primary duration-300 `}
        href={linkHref}
    >
        {children}
    </Link>
);

export default AnimatedLink;
