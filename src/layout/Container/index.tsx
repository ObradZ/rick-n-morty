import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => (
    <div className="flex-col justify-center max-w-6xl w-full relative">{children}</div>
);

export default Container;
