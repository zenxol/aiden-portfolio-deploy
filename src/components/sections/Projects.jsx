import { RevealOnScroll } from "../RevealOnScroll"


export const Projects = () => {
    return (
        <section
         id="projects"
        className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> ReadyToClaim</h3>
                            <p className="text-gray-400 mb-4"> A web platform that uses AI-powered item detection to automatically identify and organize household possessions, helping homeowners document and value items for insurance and disaster-recovery claims.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Typescript", "Flask", "Supabase", "PostgreSQL", "Docker","Vercel", "TailwindCSS", "YoloV8"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 items-center">
                                <a href="https://readytoclaim.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Live Demo </a>
                                <a href="https://github.com/zenxol/tbgpt" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> ProdHacks | SHOOT</h3>
                            <p className="text-gray-400 mb-4"> Mobile-first next.js app with pose matching to instantly capture aesthetic photos of users.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "MediaPipe Pose Match", "Supabase", "Vercel"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 items-center">
                                <a href="https://shoot-iota.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Live Demo </a>
                                <a href="https://github.com/zenxol/prodhacksshoot" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Definitely Not Wordle</h3>
                            <p className="text-gray-400 mb-4">A fullstack Wordle clone built for the GoLinks 2026 Fullstack Internship Project. Didn't get it.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "FastAPI", "Python", "Tailwind CSS", "Vercel", "Railway", "PyTest"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4 items-center">
                                <a href="https://golinks-wordle-three.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Live Demo </a>
                                <a href="https://github.com/zenxol/golinks-wordle" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Computer Systems Projects (18-213)</h3>
                            <p className="text-gray-400 mb-4">Systems-level software in C including a multithreaded HTTP proxy server, Unix-like shell with job control and signal handling, cache simulator, and dynamic memory allocator — applying concurrency, synchronization, virtual memory, and network communication.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C", "Linux", "Multithreading", "Concurrency", "Networking", "Virtual Memory"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Sweetwater Center for the Arts</h3>
                            <p className="text-gray-400 mb-4"> A public-facing membership website that allows users to explore programs, join memberships, and engage with a local arts organization online.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Javascript", "Bootstrap", "Figma"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/emilysohn/67240_sweetwater_project" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2"> Dog Breed Identifier App</h3>
                            <p className="text-gray-400 mb-4"> An image-based application that identifies and compares dog breeds by finding visually similar matches from a large image dataset.</p>
                            <div className="flex flex-wrap gap-2 mb-4">

                                {["Resnet", "Qdrant", "Streamlit", "Ollama LLM"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/zenxol/dog-similarity-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">c0vm</h3>
                            <p className="text-gray-400 mb-4">A JVM-inspired, stack-based virtual machine that executes compiled C0 bytecode, handling function calls, control flow, and memory operations while enforcing runtime safety checks similar to those in Java’s execution model.</p>
                            <div className="flex flex-wrap gap-2 mb-4">

                                {["C", "Linux", "Valgrind"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>    
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">15-112-Term-Project</h3>
                            <p className="text-gray-400 mb-4">A 2D scrolling car racing game where players navigate a three-lane highway, avoid dynamically generated obstacles, collect coins, unlock vehicles, and compete for high scores across multiple difficulty levels.</p>
                            <div className="flex flex-wrap gap-2 mb-4">

                                {["Python", "JSON", "OOD", "OOP"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/zenxol/15-112-Term-Project" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>                   
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">HACK112 | Motion Mentor</h3>
                            <p className="text-gray-400 mb-4">A real-time fitness application that analyzes body movement to provide feedback on exercise form and repetitions.</p>
                            <div className="flex flex-wrap gap-2 mb-4">

                                {["Python", "MediaPipe", "OpenCV"].map((tech, key) => (
                                    <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/zenxol/Motion-Mentor" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}