import React from "react";
import  Hero  from "~/components/homepage/hero";
import StepProcess from "~/components/homepage/step-process";

export default function HomePage(): React.JSX.Element {
    return (
        <>
            <Hero />
            <StepProcess />
        </>
    )
}