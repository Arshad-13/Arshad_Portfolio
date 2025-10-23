'use client';

import { useState } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (field) => (event) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          projectType: formState.projectType,
          projectDetails: formState.projectDetails,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        projectDetails: "",
      });
      setStatus("success");
      setMessage("Thanks! I’ll get back to you within 24 hours.");
    } catch (error) {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again or reach out directly."
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute right-[-20%] top-[-10%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(142,45,226,0.25),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute left-[-12%] bottom-[-15%] h-112 w-md rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.18),transparent_75%)] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#00FFFF]/75">
            Hire Me
          </span>
          <h2 className="mt-4 font-heading text-2xl text-white sm:text-4xl lg:text-5xl">
            Let’s build the next intelligent product together
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
          <form
            className="glass-panel border-white/10 p-6 shadow-[0_30px_70px_rgba(8,8,15,0.65)] sm:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={handleChange("name")}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-[#8E2DE2]/60 focus:bg-[#0F0F18] focus:shadow-[0_0_20px_rgba(142,45,226,0.25)]"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange("email")}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-[#8E2DE2]/60 focus:bg-[#0F0F18] focus:shadow-[0_0_20px_rgba(142,45,226,0.25)]"
                  required
                />
              </div>
              <div>
                <label className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 88060 45005"
                  value={formState.phone}
                  onChange={handleChange("phone")}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-[#8E2DE2]/60 focus:bg-[#0F0F18] focus:shadow-[0_0_20px_rgba(142,45,226,0.25)]"
                />
              </div>
              <div>
                <label className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                  Project Type
                </label>
                <input
                  type="text"
                  placeholder="AI product, full-stack build, consultation..."
                  value={formState.projectType}
                  onChange={handleChange("projectType")}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-[#8E2DE2]/60 focus:bg-[#0F0F18] focus:shadow-[0_0_20px_rgba(142,45,226,0.25)]"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="font-mono text-[12px] uppercase tracking-[0.3em] text-[#00FFFF]/70">
                Project Details
              </label>
              <textarea
                rows={5}
                placeholder="Share the outcomes you’re targeting, timelines, and links or datasets I should review."
                value={formState.projectDetails}
                onChange={handleChange("projectDetails")}
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 outline-none transition focus:border-[#8E2DE2]/60 focus:bg-[#0F0F18] focus:shadow-[0_0_20px_rgba(142,45,226,0.25)]"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#8E2DE2] to-[#F948B7] px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(249,72,183,0.45)] transition duration-300 hover:shadow-[0_0_32px_rgba(249,72,183,0.65)] focus:outline-none focus:ring-2 focus:ring-[#F948B7]/60 focus:ring-offset-2 focus:ring-offset-[#0A0A0F] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
            {message && (
              <p
                className={`mt-4 text-sm ${
                  status === "success" ? "text-[#00FFFF]/80" : "text-red-400"
                } sm:text-center`}
              >
                {message}
              </p>
            )}
          </form>

          <div className="glass-panel space-y-8 border-white/10 p-6 sm:p-8">
            <div>
              <h3 className="font-heading text-2xl text-white text-center sm:text-left">My Contacts</h3>
            </div>
            <div className="space-y-4">
              <a
                href="tel:+918806045005"
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-[#00FFFF]/60 hover:text-white sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono uppercase tracking-[0.25em] text-xs text-[#00FFFF]/80">
                  Phone
                </span>
                <span className="font-heading text-lg sm:text-right">+91 88060 45005</span>
              </a>
              <a
                href="mailto:arshadkhatib.2006@gmail.com"
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-[#00FFFF]/60 hover:text-white sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono uppercase tracking-[0.25em] text-xs text-[#00FFFF]/80">
                  Email
                </span>
                <span className="font-heading text-lg sm:text-right">arshadkhatib.2006@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arshad-khatib-408637270/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-[#00FFFF]/60 hover:text-white sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono uppercase tracking-[0.25em] text-xs text-[#00FFFF]/80">
                  LinkedIn
                </span>
                <span className="font-heading text-lg sm:text-right">@arshad-khatib</span>
              </a>
              <a
                href="https://github.com/Arshad-13"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-[#00FFFF]/60 hover:text-white sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono uppercase tracking-[0.25em] text-xs text-[#00FFFF]/80">
                  GitHub
                </span>
                <span className="font-heading text-lg sm:text-right">@Arshad-13</span>
              </a>
              <a
                href="https://x.com/rationalist_13"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-[#00FFFF]/60 hover:text-white sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="font-mono uppercase tracking-[0.25em] text-xs text-[#00FFFF]/80">
                  X / Twitter
                </span>
                <span className="font-heading text-lg sm:text-right">@rationalist_13</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;