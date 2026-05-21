import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Figma"];
    const backendSkills = ["Python", "Java", "C", "x86-64 Assembly", "MATLAB", "SQL", "FastAPI", "Flask", "Node.js", "PostgreSQL", "Supabase", "Qdrant"];
    const toolSkills = ["Git", "Docker", "Linux", "AWS", "Azure", "PyTest", "Jest", "Vercel", "Railway", "Figma"];
    const aiSkills = ["LlamaIndex", "PrivateGPT", "YOLOv8", "OpenCV", "MediaPipe", "spaCy", "NLTK"];
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
                            Aspiring software engineer with experiences in full stack development, natural language processing, and AI. Also love to backpack the world and explore new places.
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Tools </h3>
                                <div className="flex flex-wrap gap-2">
                                    {toolSkills.map((tech, key) => (
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
                                <h3 className="text-xl font-bold mb-4"> AI / Machine Learning </h3>
                                <div className="flex flex-wrap gap-2">
                                    {aiSkills.map((tech, key) => (
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
                                    <h4 className="font-semibold"> Software Engineering Intern at Proforma (May 2025 - August 2026)</h4>
                                    <p> 
                                        Natural language processing pipeline for an AI product recommendation engine
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Research Assistant at CMU HCI (January 2025 - May 2025)</h4>
                                    <p> 
                                        Automation tools using Google Apps Script and JSON parsing to process participant activity data for AI care coordination research and simulation development.

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