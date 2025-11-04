import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";
import ContentSection from "../components/ContentSection/ContentSection.jsx";

function Services() {
    return (
        <>
            {/* Banner Section */}
            <Banner
                imageSrc="/images/img__services-banner.jpg"
                imageAlt="Banner image showing a wooden house under construction"
                topper="Våga tänka nytt"
                title="Förändring ska vara förbättring"
            />

            <main>
                {/* Services Header Section */}
                <section className="content-section" id="cs__services">
                    <div className="cs__content-center">
                        <SectionHeader
                            topper="Tjänster"
                            title="Renovering & snickeri"
                        >
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum magnam beatae, adipisci nam
                                aperiam rerum ab sit laudantium, labore, obcaecati cum nihil omnis quasi amet aliquam voluptas
                                quibusdam. Dolores!
                            </p>
                        </SectionHeader>
                    </div>
                </section>

                {/* Featured Service*/}
                <ContentSection
                    imagePosition="left"
                    imageSrc="/images/img__service--featured-campfire.jpg"
                    imageAlt="Uteplats med grill"
                    topper="UTVALD TJÄNST"
                    title="UTEPLATS & GRILL"
                    buttonText="Boka hembesök"
                    buttonLink="#cs__contact"
                >
                    <p className="cs__bread-text">
                        Vissa jobb klassas som ROT-arbeten
                        och ger rätt till ROT-avdrag. Arbetet ska utföras i, eller i nära
                        anslutning till, en bostad du äger och bor i. Du måste själv
                        ha stått för kostnaden för att få göra avdraget.
                    </p>
                    <p className="cs__bread-text">
                        Du meddelar bara att du vill utnyttja avdraget
                        innan arbetet startar. På fakturan dras sedan 30 % av
                        arbetskostnaden av direkt. Det totala ROT- och RUT-avdraget
                        får uppgå till högst 50 000 kr per år.
                    </p>
                </ContentSection>

                {/* ROT-avdrag - obs placeholder om jag orkar fixa */}
                <section className="content-section">
                    <div className="cs__container --flex-column">
                        <div className="cs__content-center">
                            <h1 className="cs__title">ROT-avdrag</h1>
                            <p className="cs__bread-text">
                                Placeholder for ROT deduction calculator
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default Services;
