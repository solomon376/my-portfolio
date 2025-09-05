import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          e.target.reset();

          // Auto-hide after 5 seconds
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" name="user_name" placeholder="Your Name" required />
            <Input type="email" name="user_email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" rows="5" required />

            {/* Positioned button */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto ml-auto"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          {sent && (
            <p className="text-green-500 mt-4 text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
