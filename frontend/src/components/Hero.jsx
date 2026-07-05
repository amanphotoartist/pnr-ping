const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">

      <div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 text-sm font-medium">
        🚆 Free Beta • No Login Required
      </div>

      <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
        Never Miss Your
        <br />
        <span className="text-indigo-600">
          Train Confirmation
        </span>
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-8">
        Track your train PNR automatically and receive email updates whenever
        your ticket status changes. Once your ticket is confirmed, tracking
        stops automatically.
      </p>

    </section>
  );
};

export default Hero;