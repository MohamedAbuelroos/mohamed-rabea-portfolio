import ContactCard from "./contact-card";


export default function ContactCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <ContactCard
        type="whatsapp"
        title="WhatsApp"
        description="
          Let's discuss your project and turn your
          ideas into modern digital experiences.
        "
      />

      <ContactCard
        type="email"
        title="Email"
        description="
          Send me your project requirements and
          I'll get back to you as soon as possible.
        "
      />
    </div>
  );
}
