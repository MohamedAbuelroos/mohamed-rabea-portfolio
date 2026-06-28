export default function ContactHeader() {
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
          CONTACT
        </span>
      </div>

      <h2 className="text-4xl font-black lg:text-5xl">
        Let&apos;s Work Together
      </h2>

      <p className="mx-auto mt-6 max-w-3xl leading-8 text-muted-foreground">
        Have a project in mind or looking for a frontend developer? Let&apos;s
        discuss how we can build something amazing together.
      </p>
    </div>
  );
}
