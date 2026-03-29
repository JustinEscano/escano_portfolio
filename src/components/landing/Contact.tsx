"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper: returns inline motion props for a staggered fade-up reveal
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' } as const,
  transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 900);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Text & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-start text-left pt-2"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold mb-6 text-slate-900 leading-[1.1] tracking-tight">Let's Work Together</h2>
            <p className="text-slate-500 text-[17px] leading-relaxed mb-12 max-w-sm">
              Have a project in mind or just want to say hello? I'd love to hear from you. Feel free to reach out through the form or connect with me on social media.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 text-slate-800">
                <div className="w-[46px] h-[46px] bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[16px] font-bold text-slate-800">escanojustin678@gmail.com</span>
              </div>
              <div className="flex items-center gap-5 text-slate-800">
                <div className="w-[46px] h-[46px] bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[16px] font-bold text-slate-800">+63 917 670 0822</span>
              </div>
              <div className="flex items-center gap-5 text-slate-800">
                <div className="w-[46px] h-[46px] bg-blue-50 border border-blue-100/50 rounded-2xl flex items-center justify-center text-blue-500 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-[16px] font-bold text-slate-800">Philippines</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://github.com/JustinEscano" target="_blank" rel="noopener noreferrer" className="w-[46px] h-[46px] bg-white hover:bg-slate-50 rounded-2xl flex items-center justify-center text-blue-500 hover:text-blue-600 border border-slate-100 shadow-sm transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-[46px] h-[46px] bg-white hover:bg-slate-50 rounded-2xl flex items-center justify-center text-blue-500 hover:text-blue-600 border border-slate-100 shadow-sm transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form inside Light Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="bg-white border border-slate-100 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden">

              <AnimatePresence mode="wait">
                {submitted ? (
                  /* ── Success state ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring' as const, stiffness: 100, damping: 18 }}
                    className="flex flex-col items-center justify-center h-full min-h-[380px] gap-4 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring' as const, stiffness: 200, damping: 16, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
                    >
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-800 mt-4">Message Sent!</h3>
                    <p className="text-slate-500">Thanks for reaching out, I'll get back to you soon.</p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-2.5 rounded-xl font-semibold mt-6 bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Send Another
                    </motion.button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 relative z-10"
                  >
                    <motion.div {...fadeUp(0)}>
                      <label className="block text-sm font-bold text-slate-700 mb-2.5 tracking-wide">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                      />
                    </motion.div>

                    <motion.div {...fadeUp(0.1)}>
                      <label className="block text-sm font-bold text-slate-700 mb-2.5 tracking-wide flex items-center justify-between">
                        <span>Email Address</span>
                        <span className="inline-block w-2.5 h-2.5 rounded-full border-[2px] border-blue-500/30"></span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Where can I contact you?"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/50 transition-all font-medium"
                      />
                    </motion.div>

                    <motion.div {...fadeUp(0.2)}>
                      <label className="block text-sm font-bold text-slate-700 mb-2.5 tracking-wide">Message</label>
                      <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500/50 transition-all resize-none font-medium"
                      />
                    </motion.div>

                    <motion.div {...fadeUp(0.3)} className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.01, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-[18px] rounded-2xl font-bold text-[16px] shadow-[0_8px_20px_rgba(59,130,246,0.3)] overflow-hidden disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-3"
                      >
                        <span className="relative z-10 block tracking-wide">{loading ? 'Sending…' : 'Send Message'}</span>
                        {!loading && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] relative z-10 -ml-1 translate-y-[1px]">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                          </svg>
                        )}
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;