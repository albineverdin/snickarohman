import React from "react";

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="hero">
                <div className="hero__video-container">
                    <div className="hero__video-container--overlay"></div>
                    <video autoPlay muted loop className="hero__video">
                        <source src="/videos/hero__background-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="hero__content">
                    <h1 className="hero__title">SNICKARÖHMAN</h1>
                    <p className="hero__subtitle">Professionellt snickeri & renovering i Umeå</p>
                    <a href="#cs__contact" className="hero__button">Kontakta oss idag ↓</a>
                </div>
            </div>

            <main>
                {/* Welcome Section */}
                <section className="content-section">
                    <div className="cs__container --side-flex">
                        <div className="cs__image">
                            <img src="/images/img-1.jpg" alt="Test image" />
                        </div>
                        <div className="cs__content-side">
                            <span className="cs__title-topper">Välkommen till</span>
                            <h1 className="cs__title">Snickaröhman</h1>

                            <p className="cs__bread-text">
                                Med över 10 års erfarenhet inom bygg- och renoveringsbranschen erbjuder vi kvalitetsarbete
                                som håller över tid. Vi är stolta över att leverera professionella snickeritjänster
                                till privatpersoner och företag i Umeå och omnejd.
                            </p>
                            <p className="cs__bread-text">
                                Oavsett om det handlar om nybyggnation, renovering eller specialsnickeri, så tar vi oss an
                                alla uppdrag med samma noggrannhet och dedikation. Kontakta oss idag för en kostnadsfri offert!
                            </p>

                            <div className="cs__button">
                                <a href="/about">Mer om mig</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merits Section */}
                <section className="content-section" id="cs__index-merits">
                    <div className="cs__container">
                        <ul className="merits__card-container">
                            <li className="merits__card">
                                <img src="/images/icon__saw.svg" alt="Icon of a saw" className="merits__card-icon" />
                                <h2 className="merits__card--number">10+</h2>
                                <p className="merits__card--text">Års erfarenhet</p>
                            </li>
                            <li className="merits__card">
                                <img src="/images/icon__handshake.svg" alt="Icon of a medal" className="merits__card-icon" />
                                <h2 className="merits__card--number">500+</h2>
                                <p className="merits__card--text">Nöjda kunder</p>
                            </li>
                            <li className="merits__card">
                                <img src="/images/icon__medal.svg" alt="Icon of shaking hands" className="merits__card-icon" />
                                <h2 className="merits__card--number">1000+</h2>
                                <p className="merits__card--text">Slutförda projekt</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Services Section */}
                <section className="content-section" id="cs__index-services">
                    <div className="cs__container --center-flex">
                        <div className="cs__content-center">
                            <span className="cs__title-topper">Tjänster</span>
                            <h1 className="cs__title">Renovering & snickeri</h1>
                        </div>

                        <div className="services__card-wrapper">
                            <div className="services__card">
                                <img src="/images/icon__sauna.svg" alt="Icon of a house" className="services__card-icon" />
                                <h2 className="services__card-title">Bygg & konstruktion</h2>
                                <p className="services__card-text">Från grunden till taknocken - vi bygger allt från garage
                                    och altaner till kompletta tillbyggnader.</p>
                            </div>

                            <div className="services__card">
                                <img src="/images/icon__fireplace.svg" alt="Icon of a house" className="services__card-icon" />
                                <h2 className="services__card-title">Ytskikt och finish</h2>
                                <p className="services__card-text">Målning, tapetsering, golvläggning och andra ytbehandlingar
                                    som ger ditt hem den perfekta finishen.</p>
                            </div>

                            <div className="services__card">
                                <img src="/images/icon__garage.svg" alt="Icon of a house" className="services__card-icon" />
                                <h2 className="services__card-title">Utomhus & exteriör</h2>
                                <p className="services__card-text">Altaner, staket, fasadarbeten och annat utvändigt snickeri
                                    som förhöjer husets karaktär och värde.</p>
                            </div>
                        </div>
                        <div className="cs__button">
                            <a href="/services">Se alla tjänster</a>
                        </div>
                    </div>
                </section>

                {/* Inspiration/Slideshow Section */}
                <section className="content-section" id="cs__inspiration">
                    <div className="cs__container --side-flex">
                        <div className="cs__content-side">
                            <span className="cs__title-topper">Inspiration</span>
                            <h1 className="cs__title">Lite saker jag kan göra</h1>

                            <p className="cs__bread-text">
                                Låt dig inspireras av våra tidigare projekt! Här hittar du exempel på
                                renoveringar, nybyggnationer och specialuppdrag vi genomfört.
                                Varje projekt genomförs med omsorg och precision.
                            </p>
                            <div className="cs__button">
                                <a href="/inspiration">Mer inspiration</a>
                            </div>
                        </div>

                        <div className="slideshow__container">
                            <button className="slideshow__btn-prev">&#10094;</button>

                            <div className="slideshow__slide">
                                <img src="/images/slideshow/slideshow__img1.jpg" alt="" />
                            </div>
                            <div className="slideshow__slide">
                                <img src="/images/slideshow/slideshow__img2.jpg" alt="" />
                            </div>
                            <div className="slideshow__slide">
                                <img src="/images/slideshow/slideshow__img3.jpg" alt="" />
                            </div>

                            <button className="slideshow__btn-next">&#10095;</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Back to top button */}
            <button className="button__to-top" title="Back to top">&#8593;</button>
        </>
    );
}

export default Home;
