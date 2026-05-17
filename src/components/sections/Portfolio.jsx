import { ExternalLink, Cat, Code2, Globe, Layers } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Portfolio = () => {
  return (
    <section className="bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-400">A collection of full-stack applications and digital solutions.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card className="bg-gray-950 border-gray-800 flex flex-col hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <Layers className="w-8 h-8 text-indigo-400" />
                <div className="flex gap-3">
                  <Cat className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                  <ExternalLink className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                </div>
              </div>
              <CardTitle className="text-white">ShopIQ</CardTitle>
              <CardDescription className="text-gray-400">
                A multi-vendor e-commerce platform built with the MEAN stack, featuring roles for customers, sellers, and admins.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase font-bold text-indigo-400">Angular</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Node.js</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">MongoDB</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-950 border-gray-800 flex flex-col hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <Code2 className="w-8 h-8 text-indigo-400" />
                <div className="flex gap-3">
                  <Cat className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                  <ExternalLink className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                </div>
              </div>
              <CardTitle className="text-white">IRB Digital System</CardTitle>
              <CardDescription className="text-gray-400">
                A research approval management system handling student registration, reviewer workflows, and payment integration.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase font-bold text-indigo-400">PHP</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">MySQL</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Bootstrap</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-950 border-gray-800 flex flex-col hover:border-indigo-500/50 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <Globe className="w-8 h-8 text-indigo-400" />
                <div className="flex gap-3">
                  <Cat className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                  <ExternalLink className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                </div>
              </div>
              <CardTitle className="text-white">Aian AI</CardTitle>
              <CardDescription className="text-gray-400">
                An exploration into multi-agent architecture and autonomous learning using modern AI frameworks.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] uppercase font-bold text-indigo-400">Next.js</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">LangChain</span>
                <span className="text-[10px] uppercase font-bold text-indigo-400">Python</span>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};


export default Portfolio