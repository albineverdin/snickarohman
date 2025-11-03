import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import ContentSection from "../components/ContentSection/ContentSection.jsx";
import StatsCards from "../components/StatsCards/StatsCards.jsx";

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
                    imageSrc="/images/img-1.jpg"
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
                        icon: "/images/icon__saw.svg",
                        iconAlt: "Icon of a saw",
                        number: "10+",
                        text: "Års erfarenhet"
                    },
                    {
                        icon: "/images/icon__handshake.svg",
                        iconAlt: "Icon of handshake",
                        number: "500+",
                        text: "Nöjda kunder"
                    },
                    {
                        icon: "/images/icon__medal.svg",
                        iconAlt: "Icon of medal",
                        number: "1000+",
                        text: "Slutförda projekt"
                    }
                ]} />

                {/* FAQ Section */}
                <section className="content-section cs__faq">

                    <SectionHeader
                        topper="Vanliga frågor"
                        title="FAQ"
                    />
                    <div className="faq__container">

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Vad ingår i en offert?</h3>
                                <span className="faq-icon">&#8963;</span>
                            </div>
                            <div className="faq-answer">
                                <p>En offert innehåller en detaljerad beskrivning av arbetet, materialkostnader, arbetskostnader och
                                    beräknad tidsåtgång. Vi går också igenom eventuella ROT-avdrag som kan vara aktuella.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Hur lång tid tar ett projekt?</h3>
                                <span className="faq-icon">&#8963;</span>
                            </div>
                            <div className="faq-answer">
                                <p>Tidsåtgången beror på projektets omfattning. Ett mindre projekt kan ta några dagar, medan större
                                    renoveringar kan ta flera veckor. Vi ger alltid en tidsuppskattning i offerten.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Erbjuder ni garantier på arbetet?</h3>
                                <span className="faq-icon">&#8963;</span>
                            </div>
                            <div className="faq-answer">
                                <p>Ja, vi erbjuder garanti på både arbete och material enligt branschstandard. Exakt garantitid
                                    diskuteras för varje projekt.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default About;