import React from "react";
import { Header } from "../componends/header";
import { Footer } from "../componends/footer";
import { About } from "../componends/about";


export function AboutPage(){
    return(
        <>
        <section>
            <Header />
            <About />
            <Footer />
        </section>
        </>
    )
}