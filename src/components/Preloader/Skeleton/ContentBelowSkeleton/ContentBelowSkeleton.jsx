import "./ContentBelowSkeleton.css";

function ContentBelowSkeleton() {
    return (
        <section id="content-below" className="content-skeleton">

            <div className="container">

                {/* LEFT COLUMN */}
                <div className="left-col">

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            className="left-col-box skeleton-card"
                            key={item}
                            style={{ animationDelay: `${item * 0.12}s` }}
                        >

                            <div className="icon shimmer">
                                <div className="icon-circle"></div>
                            </div>

                            <div className="info">

                                <div className="sk-title shimmer"></div>

                                <div className="sk-value shimmer"></div>

                            </div>

                        </div>
                    ))}

                </div>

                {/* RIGHT COLUMN */}
                <div className="right-col">

                    <div className="location-details skeleton-card">

                        {/* Header */}
                        <div className="loc-head">

                            <div className="sk-head-icon shimmer"></div>

                            <div className="sk-head-title shimmer"></div>

                        </div>

                        {/* Location Rows */}
                        <div className="location-cont">

                            {[1, 2, 3, 4].map((item) => (

                                <div
                                    className="location-box"
                                    key={item}
                                    style={{ animationDelay: `${item * 0.15}s` }}
                                >

                                    <div className="icon shimmer">
                                        <div className="icon-circle"></div>
                                    </div>

                                    <div className="loc-info">

                                        <div className="sk-small shimmer"></div>

                                        <div className="sk-large shimmer"></div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ContentBelowSkeleton;