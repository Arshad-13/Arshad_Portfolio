'use client';

import { useState } from "react";
import { FloatingDock } from "@/app/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

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

  const contactLinks = [
    {
      title: "Phone",
      icon: (
        <IconPhone className="h-full w-full text-white/80" />
      ),
      href: "tel:+918806045005",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-white/80" />
      ),
      href: "mailto:arshadkhatib.2006@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white/80" />
      ),
      href: "https://www.linkedin.com/in/arshad-khatib-408637270/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white/80" />
      ),
      href: "https://github.com/Arshad-13",
    },
    {
      title: "X / Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white/80" />
      ),
      href: "https://x.com/rationalist_13",
    },
    {
      title: "LeetCode",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full text-white/80"
        >
          <path d="m13.585 2.59 1.414 1.414-6.293 6.293a2 2 0 0 0 0 2.828l6.278 6.278-1.414 1.414-6.278-6.278a4 4 0 0 1 0-5.656l6.293-6.293Zm4.243 3.536 3.536 3.536-1.414 1.414-3.536-3.536 1.414-1.414Zm-1.414 7.07 3.536 3.535-1.414 1.415-3.536-3.536 1.414-1.414Z" />
        </svg>
      ),
      href: "https://leetcode.com/rationalist_13/",
    },
    {
      title: "Codeforces",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full text-white/80"
        >
          <path d="M5 3h4v18H5V3Zm5 6h4v12h-4V9Zm5-4h4v16h-4V5Z" />
        </svg>
      ),
      href: "https://codeforces.com/profile/arshadkhatib.2006",
    },
  ];

  return (
    <>
      <section id="contact" className="relative py-24 sm:py-32 pb-32">
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

        <div className="mt-16 mx-auto max-w-3xl">
          <form
            className="glass-panel border-white/10 p-6 shadow-[0_30px_70px_rgba(8,8,15,0.65)] sm:p-8"
            onSubmit={handleSubmit}
            suppressHydrationWarning
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
                  placeholder="Enter your contact number"
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
        </div>
      </div>
    </section>

    {/* Floating Dock - Sticky at bottom */}
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={contactLinks} />
    </div>
  </>
  );
};

export default ContactSection;