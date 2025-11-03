import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import ContentSection from "../components/ContentSection/ContentSection.jsx";
import StatsCards from "../components/StatsCards/StatsCards.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";

function About() {
    return (
        <>
            {/* Banner Section */}
            <Banner
                imageSrc="/images/img__services-banner.jpg"
                imageAlt="Banner image showing a wooden house under construction"
                topper="Välkommen till"
                title="Den lokala snickaren i Umeå"
            />

            <main>
                {/* About Content Section */}
                <ContentSection
                    imagePosition="left"
                    imageSrc="/images/img__snickarohman-headshot.jpeg"
                    imageAlt="Snickare vid arbete"
                    topper="Min historia"
                    title="Passion för hantverk"
                >
                    <p className="cs__bread-text">
                        Jag har arbetat som snickare i över 10 år och har under denna tid byggt upp en gedigen erfarenhet
                        inom både renovering och nybyggnation. Min passion för hantverk började tidigt och har bara växt
                        starkare med åren.
                    </p>
                    <p className="cs__bread-text">
                        Varje projekt är unikt och jag tar mig an varje uppdrag med samma engagemang och noggrannhet,
                        oavsett om det handlar om en liten reparation eller en större renovering. Kvalitet och kundnöjdhet
                        står alltid i fokus.
                    </p>
                </ContentSection>

                {/* Stats Section */}
                <StatsCards cards={[
                    {
                        icon: "/images/icon__star-shine.svg",
                        iconAlt: "Icon of a star",
                        number: "Kvalité",
                        text: ""
                    },
                    {
                        icon: "/images/icon__pen-ruler.svg",
                        iconAlt: "Icon of handshake",
                        number: "Noggrant",
                        text: ""
                    },
                    {
                        icon: "/images/icon__mop.svg",
                        iconAlt: "Icon of a mop",
                        number: "Städat",
                        text: ""
                    }
                ]} />

                {/* FAQ Section */}
                <section className="content-section cs__faq">
                    <SectionHeader
                        topper="Vanliga frågor"
                        title="FAQ"
                    />
                    <FAQ
                        faqs={[
                            {
                                question: "Vad ingår i en offert?",
                                answer: "En offert innehåller en detaljerad beskrivning av arbetet, materialkostnader, arbetskostnader och beräknad tidsåtgång. Vi går också igenom eventuella ROT-avdrag som kan vara aktuella."
                            },
                            {
                                question: "Hur lång tid tar ett projekt?",
                                answer: "Tidsåtgången beror på projektets omfattning. Ett mindre projekt kan ta några dagar, medan större renoveringar kan ta flera veckor. Vi ger alltid en tidsuppskattning i offerten."
                            },
                            {
                                question: "Erbjuder ni garantier på arbetet?",
                                answer: "Ja, vi erbjuder garanti på både arbete och material enligt branschstandard. Exakt garantitid diskuteras för varje projekt."
                            }
                        ]}
                    />
                </section>

            </main>
        </>
    );
}

export default About;