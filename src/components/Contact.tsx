import { useState } from "react";
import { Mail, MapPin, Globe, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ahishm430@gmail.com" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Phone, label: "Contact No", value: "+91 9080189736" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const ref = useScrollAnimation();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     alert("Message sent! (demo)");
  //     setForm({ name: "", email: "", message: "" });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Prepare the data object
    // Web3Forms needs the 'access_key' to know where to send the email
    const formData = {
      ...form,
      access_key: "9dc6a84f-67c0-4f41-ac2d-d85894a61df2", // Paste your key here
      subject: `Portfolio JOB${form.name}`, // Optional: Customizes email subject
    };

    try {
      // 2. Use the native fetch API to send the data
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Success! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-transition">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Let's work together.
        </p>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 scroll-animate">
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-card border border-dashed border-primary/30 rounded-xl p-5 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{item.label}</h4>
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-all focus:scale-[1.01]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-all focus:scale-[1.01]"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none transition-all focus:scale-[1.01]"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-[1.02] transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
