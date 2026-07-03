import "./HeroSectionSkeleton.css";

function HeroSkeleton() {
    return (
        <section id="heroSkeleton" className="hero-skeleton">

            <div className="weather">

                <div className="weather-box">

                    <div className="sk-weather-icon shimmer"></div>

                    <div className="w-info">

                        <div className="sk-temp shimmer"></div>

                        <div className="sk-location shimmer"></div>

                        <div className="sk-row">

                            <div className="sk-pill shimmer"></div>

                            <div className="sk-pill shimmer"></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default HeroSkeleton;