import { Monitor, Server, Zap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
const Skills = () => {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg text-gray-400">The tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Frontend Card */}
          <Card className="bg-gray-950 border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Monitor className="w-6 h-6 text-indigo-400" />
              </div>
              <CardTitle className="text-white">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">
                Crafting responsive, pixel-perfect user interfaces with modern frameworks.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">React</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Next.js</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Tailwind CSS</span>
              </div>
            </CardContent>
          </Card>

          {/* Backend Card */}
          <Card className="bg-gray-950 border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Server className="w-6 h-6 text-indigo-400" />
              </div>
              <CardTitle className="text-white">Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">
                Building scalable server-side logic and robust API architectures.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Node.js</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">PHP / Laravel</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">PostgreSQL</span>
              </div>
            </CardContent>
          </Card>

          {/* DevOps/Tools Card */}
          <Card className="bg-gray-950 border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg">
                <Zap className="w-6 h-6 text-indigo-400" />
              </div>
              <CardTitle className="text-white">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">
                Managing deployments, containers, and version control workflows.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Git</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Docker</span>
                <span className="px-2 py-1 text-xs font-medium bg-gray-900 text-indigo-300 border border-gray-800 rounded-md">Vercel</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
export default Skills