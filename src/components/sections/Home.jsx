import { RevealOnScroll } from "../RevealOnScroll"
import NeuralBackground from "../ui/flow-field-background"

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <NeuralBackground 
                    color="#3b82f6"
                    trailOpacity={0.1}
                    particleCount={600}
                    speed={0.8}
                />
            </div>
            <RevealOnScroll>
                <div className="text-center relative z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Aiden Nguyen
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a sophomore studying Electrical & Computer Engineering at Carnegie Mellon University. I enjoy building full stack applications and applying AI driven solutions. In my free time, I regulary play pickleball, weightlift, and listen to house music. 
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                            Contact Me
                        </a>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}