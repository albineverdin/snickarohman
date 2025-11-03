import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import SectionHeader from "../components/SectionHeader/SectionHeader.jsx";

function Inspiration() {
    return (
        <>
            {/* Banner Section */}
            <Banner
                imageSrc="/images/img__services-banner.jpg"
                imageAlt="Banner image showing beautiful carpentry work"
                topper="Föränderligt och fantastiskt"
                title="Trä är magiskt"
            />

            <main>
                {/* Inspiration Header Section */}
                <section className="content-section">
                    <div className="cs__content-center">
                        <SectionHeader
                            topper="Tidigare projekt"
                            title="Galleri"
                        >
                            <p>
                                Utforska våra tidigare projekt och se kvaliteten i vårt arbete.
                                Varje projekt är ett exempel på precision, hantverk och passion för trä.
                            </p>
                        </SectionHeader>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Inspiration;