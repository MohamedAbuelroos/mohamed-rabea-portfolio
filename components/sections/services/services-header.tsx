export default function ServicesHeader() {
  return (
    <div className="mb-16 text-center">
      <div className="mb-5">
        <span
          className="
            rounded-md
            bg-violet-500/10
            px-4
            py-2
            text-sm
            font-medium
            text-violet-500
          "
        >
          SERVICES
        </span>
      </div>

      <h2 className="text-4xl font-black lg:text-5xl">
        What I Can Build
      </h2>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
        I build modern, responsive and
        business-focused web applications
        designed to provide exceptional user
        experiences and real business value.
      </p>
    </div>
  );
}