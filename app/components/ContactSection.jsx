'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Terminal, Wifi, Shield, AlertCircle, CheckCircle, ChevronRight } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, transmitting, success, error
  const [logs, setLogs] = useState(['> SYSTEM READY', '> WAITING FOR INPUT...']);
  const [activeField, setActiveField] = useState(null);

  const addLog = (msg) => {
    setLogs(prev => [...prev.slice(-4), `> ${msg}`]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');
    addLog('INITIATING SECURE HANDSHAKE...');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    addLog('ENCRYPTING PAYLOAD...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        addLog('TRANSMISSION COMPLETE');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Transmission failed');
      }
    } catch (error) {
      setStatus('error');
      addLog('ERROR: CONNECTION SEVERED');
    }
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Wifi className="w-3 h-3 animate-pulse" />
            <span>SECURE UPLINK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani text-white mb-4">
            ESTABLISH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">CONNECTION</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info / Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 overflow-hidden relative group font-mono">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-white/40">bash — 80x24</span>
              </div>

              <div className="text-sm space-y-2 h-48 overflow-y-auto">
                {logs.map((log, i) => (
                  <div key={i} className="text-green-400/80">{log}</div>
                ))}
                <div className="flex items-center gap-2 text-green-400/80">
                    <span>$</span>
                    <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Github, label: "GITHUB", href: "https://github.com/Arshad-264", color: "hover:text-purple-400" },
                { icon: Linkedin, label: "LINKEDIN", href: "https://www.linkedin.com/in/arshad-ahmed-khan-28491325a/", color: "hover:text-blue-400" },
                { icon: Mail, label: "EMAIL", href: "mailto:arshadkhan2642002@gmail.com", color: "hover:text-cyan-400" },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col items-center justify-center gap-2 transition-all hover:bg-white/10 ${item.color} group`}
                >
                  <item.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-mono text-white/60">{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-1 relative overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-white/5 p-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-white/40" />
                    <span className="text-xs font-mono text-white/40">user@portfolio:~/contact</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${status === 'error' ? 'bg-red-500' : status === 'success' ? 'bg-green-500' : 'bg-cyan-500'} animate-pulse shadow-[0_0_10px_currentColor]`} />
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6 font-mono text-sm">
              
              <div className="group">
                <label className="block text-white/40 text-xs mb-1"># Enter your identifier</label>
                <div className={`flex items-center gap-2 border-b ${activeField === 'name' ? 'border-cyan-500' : 'border-white/10'} pb-2 transition-colors`}>
                    <span className="text-cyan-500">{'>'}</span>
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                        required
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/20"
                        placeholder="guest_user"
                    />
                </div>
              </div>

              <div className="group">
                <label className="block text-white/40 text-xs mb-1"># Enter contact point</label>
                <div className={`flex items-center gap-2 border-b ${activeField === 'email' ? 'border-cyan-500' : 'border-white/10'} pb-2 transition-colors`}>
                    <span className="text-cyan-500">{'>'}</span>
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                        required
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/20"
                        placeholder="email@address.com"
                    />
                </div>
              </div>

              <div className="group">
                <label className="block text-white/40 text-xs mb-1"># Subject line</label>
                <div className={`flex items-center gap-2 border-b ${activeField === 'subject' ? 'border-cyan-500' : 'border-white/10'} pb-2 transition-colors`}>
                    <span className="text-cyan-500">{'>'}</span>
                    <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        required
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/20"
                        placeholder="Collaboration Request"
                    />
                </div>
              </div>

              <div className="group">
                <label className="block text-white/40 text-xs mb-1"># Message payload</label>
                <div className={`flex items-start gap-2 border-b ${activeField === 'message' ? 'border-cyan-500' : 'border-white/10'} pb-2 transition-colors`}>
                    <span className="text-cyan-500 mt-1">{'>'}</span>
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        required
                        rows={3}
                        className="w-full bg-transparent text-white outline-none placeholder:text-white/20 resize-none"
                        placeholder="Enter your message here..."
                    />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'transmitting' || status === 'success'}
                className={`w-full py-3 rounded border border-dashed font-bold tracking-wider flex items-center justify-center gap-2 transition-all hover:bg-white/5
                  ${status === 'success' 
                    ? 'text-green-400 border-green-500/50' 
                    : status === 'error'
                    ? 'text-red-400 border-red-500/50'
                    : 'text-cyan-400 border-cyan-500/50'
                  }`}
              >
                {status === 'transmitting' ? (
                  <>
                    <span className="animate-pulse">_</span> TRANSMITTING...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    SENT
                  </>
                ) : (
                  <>
                    <span className="mr-1">./send_message.sh</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
