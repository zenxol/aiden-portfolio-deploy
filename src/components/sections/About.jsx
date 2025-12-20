import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "HTML", "CSS", "Javascript", "Typescript", "TailwindCSS", "Bootstrap", "Figma"];
    const backendSkills = ["Supabase", "Python", "C", "SQL", "PostgreSQL", "Qdrant"];
    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            Aspiring software engineer with experiences in simple full stack development, natural language processing, and AI prompting. Also love to backpack the world and explore new places.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S. in Electrical & Computer Engineering</strong> - Carnegie Mellon University (2024-2028)
                                </li>
                                <li>
                                    <strong>Relevant Coursework:</strong> Computer Systems, Foundations of Software Engineering, Data Structures and Algorithms, Mobile Web Design & Development, Signal Processing &
Systems Analysis, Discrete Mathematics, Fundamentals of Programming, Introduction to ECE
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Work Experiences</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Software Engineering Intern at Proforma (May 2025 - August 2025)</h4>
                                    <p> 
                                        ● Developed a secure, AI/ML-driven product recommendation engine leveraging RAG workflows with LlamaIndex,
Qdrant (vector database), and PrivateGPT to deliver personalized suggestions from a catalog of over 1 million
promotional products <br></br>
● Implemented an NLP filtering pipeline using TextBlob, spaCy, and NLTK to extract key attributes and phrases from
user prompts, improving prompt comprehension and reducing irrelevant LLM suggestions by 30%
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Research Assistant at CMU HCI (January 2025 - May 2025)</h4>
                                    <p> 
                                        ● Constructed automation tools utilizing Google Apps Script and JSON parsing to structure quantitative participant
data; filtered data to analyze high-activity periods for simulation design and AI model refinement <br></br>
● Recruited 10+ participants and conducted qualitative interviews to support development of a multi-agent AI care
coordination system; obtained real-world data from user call logs, transcripts, and Google Maps Timeline

                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}