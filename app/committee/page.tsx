import Navbar from "../../components/navbar";
import { CommitteeMemberCard } from "../../components/committee-card";

export default function Committee() {
    return (
        <main className="flex min-h-screen flex-col items-center space-y-6 p-24">
        <Navbar />
        <h1 className="text-6xl font-bold text-center">Meet the committee</h1>
        <p className="text-2xl text-center">
            Our committee work to ensure the society runs smoothly and that we have a range of events for everyone to enjoy. Please feel free to get in touch with any of us if you have any questions or suggestions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CommitteeMemberCard
            name="Aodhán Gallagher"
            role="President"
            roleDescription="Chairs the committee, coordinates the society's activities, and communicates with sponsors and the School of Computing."
            email="aodhan@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        <CommitteeMemberCard
            name="Jacob Stockwell"
            role="Vice President"
            roleDescription="Supports the President and other committee members in their roles, and promotes the society within the community."
            email="jacob@luucompsoc.co.uk"
            photo="/images/committee/committee-jacob.jpg"
        />
        <CommitteeMemberCard
            name="Luca McAtarsney"
            role="Secretary"
            roleDescription="Organises the day-to-day running of the committee, manages tasks, and leads admininstrative activities."
            email="luca@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        <CommitteeMemberCard
            name="Eschal Najmi"
            role="Treasurer"
            roleDescription="Manages the budget and finances of the society, and ensures that events are fully funded and run smoothly."
            email="eschal@luucompsoc.co.uk"
            photo="/images/committee/committee-eschal.jpg"
        />
        <CommitteeMemberCard
            name="Jibran Raja"
            role="Social Secretary"
            roleDescription="Organises and runs social events for members such as pub quizzes, fridge-to-fridges, and the famous annual Summer Ball."
            email="jibran@luucompsoc.co.uk"
            photo="/images/committee/committee-jibran.jpg"
        />
        <CommitteeMemberCard
            name="Linton Fogden"
            role="Social Secretary"
            roleDescription="Organises and runs social events for members such as pub quizzes, fridge-to-fridges, and the famous annual Summer Ball."
            email="linton@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        <CommitteeMemberCard
            name="Evan Madurai"
            role="Academic Events Secretary"
            roleDescription="Organises and runs events such as the first hackathon coming up in 2025, and coordinates industry collaborations."
            email="evan@luucompsoc.co.uk"
            photo="/images/committee/committee-evan.jpg"
        />
        <CommitteeMemberCard
            name="Louis Bishop"
            role="Gaming and Interests Secretary"
            roleDescription="Organises and runs social events linked to the interests and hobbies of members, such as Pixel Bar gaming tournaments."
            email="louis@luucompsoc.co.uk"
            photo="/images/committee/committee-louis.jpg"
        />
        <CommitteeMemberCard
            name="Miranda Gough"
            role="Equality, Diversity and Inclusion Secretary"
            roleDescription="Leads efforts to ensure the society is inclusive and welcoming to all students, and manages initiatives to promote diversity."
            email="miranda@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        <CommitteeMemberCard
            name="Paige Uppal"
            role="Branding Secretary"
            roleDescription="Creates and manages the society's branding guidelines, including the website design, logo, posters, and merchandise."
            email="paige@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        <CommitteeMemberCard
            name="Abbie Heelas"
            role="Social Media Officer"
            roleDescription="Maintains the society's social media presence across platforms to update members on events, news, and opportunities."
            email="abbie@luucompsoc.co.uk"
            photo="/images/committee/committee-abbie.jpg"
        />
        <CommitteeMemberCard
            name="Diya Anegundi"
            role="Social Media Officer"
            roleDescription="Maintains the society's social media presence across platforms to update members on events, news, and opportunities."
            email="diya@luucompsoc.co.uk"
            photo="/images/committee/committee-miranda.jpg"
        />
        </div>
        </main>
    );
}