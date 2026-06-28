import ContactCards from "./contact-cards";
import ContactFooter from "./contact-footer";
import ContactHeader from "./contact-header";


export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <ContactHeader />

        <ContactCards />

        <ContactFooter />
      </div>
    </section>
  );
}
