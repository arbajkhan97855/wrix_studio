import React from "react";
import { Header } from "../componends/header";
import { ContactForm } from "../componends/contacForm";
import { Footer } from "../componends/footer";

export function ContactPage(){
    return(
        <>
        <section>
            <Header />
            <ContactForm />
            <Footer />
        </section>
        </>
    )
}