const About = () => {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        <div className="md:col-span-4">
          <h2 className="text-indigo-500 text-sm font-bold uppercase tracking-widest mb-2">
            Discovery
          </h2>
          <h3 className="text-white text-4xl md:text-5xl font-extrabold">
            About <span className="text-indigo-400">Me</span>
          </h3>
          <div className="h-1.5 w-20 bg-indigo-600 mt-6 rounded-full"></div>
        </div>

        <div className="md:col-span-8 space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About