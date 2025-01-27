import React from 'react';
import Slider from 'react-slick';
import { SponsorCard } from './sponsor-card';

export const SponsorCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <div style={{ fontSize: '60px', cursor: 'pointer' }}>→</div>,
        prevArrow: <div style={{ fontSize: '60px', cursor: 'pointer' }}>←</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            <SponsorCard
                    type="sunflower"
                    name="Snowflake"
                    website="https://snowflake.com/"
                    photo="/images/leedshack/snowflake-logo.png"
                    photoHeight={613}
                    photoWidth={2560}
                    description="Snowflake makes enterprise AI easy, efficient, and trusted. Thousands of companies worldwide, including hundreds of the largest, use Snowflake's AI Data Cloud to share data, build applications, and power their businesses with AI. Its platform enables seamless data storage, processing, and analysis, empowering teams to innovate faster and tackle complex challenges.
                    As a proud sponsor of LeedsHack 2025, Snowflake is here to support your creativity. Whether you're building AI applications or addressing data challenges, you'll have the tools to succeed. The era of enterprise AI is here—let's innovate together! "
            />
            <SponsorCard
                type="sunflower"
                name="IMDb"
                website="https://imdb.com/"
                photo="/images/leedshack/imdb-logo.png"
                photoHeight={200}
                photoWidth={415}
                description="IMDb is the world's most popular and authoritative source for information on movies, TV shows, and celebrities. Hundreds of millions of customers all over the world rely on IMDb to discover and decide what to watch, advance their professional entertainment careers through IMDbPro, and grow their businesses using IMDb data and trending insights. Col Needham is the founder and CEO of IMDb. After starting a computer games software business at the age of 14, he went on to complete a computer science degree at Leeds University before commencing a career in technology research in Bristol, England."
            />
            <SponsorCard
                type="sunflower"
                name="The Data City"
                website="https://thedatacity.com/"
                photo="/images/leedshack/the-data-city-logo.png"
                photoHeight={128}
                photoWidth={400}
                description="The Data City is a Leeds-based tech scale-up on a mission to revolutionise the way governments and industries make decisions. We are building the world's first real-time global industrial classification system, transforming outdated economic models with innovative, actionable insights. By integrating cutting-edge technology and machine learning, we empower policymakers, investors, and businesses to foster growth, innovation, and investment in a way that has never been done before. To fuel our ambitious global expansion, we're hiring up to six talented individuals for roles including front-end developers, back-end developers, data scientists, statisticians, and product managers."
            />
            <SponsorCard
                type="sunflower"
                name="Rebuilding Society"
                website="https://rebuildingsociety.com/"
                photo="/images/leedshack/rebuilding-society-logo.png"
                photoHeight={200}
                photoWidth={500}
                description="rebuildingsociety.com is a Leeds-based fintech that specialises in decentralised finance with over 10 years experience in peer-to-peer lending and crypto. Regulated by the FCA."
            />
            <SponsorCard
                type="sprout"
                name="Pexip"
                website="https://pexip.com/"
                photo="/images/leedshack/pexip-logo.png"
                photoHeight={130}
                photoWidth={400}
                description="Pexip's mission is to provide seamless video communication to all organisations regardless of technology platforms and security requirements. We have a strong position in a growing market, driven by key partnerships with all the major industry players, and our goal is to be the world's leading provider of video interoperability and the number one self-hosted video meeting solution. Our success is driven by our people, and our core values of One Team, Freedom and Responsibility, Professional and Fun, and No Bullsh*t."
            />
            <SponsorCard
                type="sprout"
                name="Glean"
                website="https://glean.co/"
                photo="/images/leedshack/glean-logo.svg"
                photoHeight={572}
                photoWidth={1841}
                description="Glean creates better learners with study software that improves confidence, boosts grades, and supports 100,000s of students worldwide."
            />
            <SponsorCard
                type="seed"
                name="Hetzner"
                website="https://hetzner.com/"
                photo="/images/leedshack/hetzner-logo.jpg"
                photoHeight={400}
                photoWidth={400}
                description="Hetzner was founded 1997 and is one of Europe's biggest web hosting companies. We offer dedicated servers, cloud solutions, web hosting, storage products and much more - at unbelievably low prices."
            />
            <SponsorCard
                type="seed"
                name="Audacia"
                website="https://audacia.co.uk/"
                photo="/images/leedshack/audacia-logo.png"
                photoHeight={204}
                photoWidth={204}
                description="Step into the world of tech innovation with Audacia - Leeds' award-winning consultancy specialising in engineering, data, AI and cloud innovation. Trusted by global leaders, we help organisations across multiple industries improve, scale and innovate through technology - from optimising offshore wind farms to enhancing rail journeys with AI-powered chatbots. Curious to find out more? Take a closer look at our work."
            />
        </Slider>
    );
};