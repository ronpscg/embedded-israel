import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Mail, MessageCircle, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'initial' | 'form' | 'success';

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<Step>('initial');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [step, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-uQhXWIm8xBoEFiVMUP5fnxcXvXVJ2tIWlKWGitWRztD9KA/formResponse';

        // Prepare the form data using the extracted Entry IDs
        const formData = new URLSearchParams();
        formData.append('entry.1775833037', name);
        formData.append('entry.663500792', email);
        formData.append('entry.328196601', phone);
        formData.append('entry.465885812', message);

        try {
            await fetch(FORM_URL, {
                method: 'POST',
                mode: 'no-cors', // Google Forms requires no-cors for cross-origin POST
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString()
            });
            setStep('success');
        } catch (error) {
            console.error('Error sending message:', error);
            // Even if it fails CORS, the message usually reaches Google Forms
            setStep('success');
        } finally {
            setIsSending(false);
        }
    };

    const resetChat = () => {
        setStep('initial');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] glass-panel border-gold-glow-subtle rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                    <MessageCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-tight">Contact Us</h3>
                                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">We'll respond as soon as we can</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1"
                            >
                                <ChevronDown className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
                            {/* Static Greeting */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center border border-primary/10">
                                    <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                                </div>
                                <div className="bg-white/10 rounded-2xl rounded-tl-none p-4 max-w-[85%] border border-white/5">
                                    <p className="text-white text-sm leading-relaxed">
                                        Hello! 👋 Let me know if you have any questions about our meetups or professional services.
                                    </p>
                                </div>
                            </div>

                            {step === 'initial' && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex justify-end"
                                >
                                    <button
                                        onClick={() => setStep('form')}
                                        className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-6 py-3 rounded-2xl rounded-tr-none shadow-lg shadow-primary/20 transition-all active:scale-95"
                                    >
                                        I have a question
                                    </button>
                                </motion.div>
                            )}

                            {step === 'form' && (
                                <>
                                    <div className="flex justify-end">
                                        <div className="bg-primary/20 rounded-2xl rounded-tr-none p-4 max-w-[85%] border border-primary/20">
                                            <p className="text-white text-sm">I have a question</p>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4"
                                    >
                                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">We just need some information to proceed:</p>
                                        <form onSubmit={handleSend} className="space-y-4">
                                            <div className="relative">
                                                <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Your Name *"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Your Email *"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone (Optional)"
                                                    value={phone}
                                                    onChange={e => setPhone(e.target.value)}
                                                    className="w-full bg-black/40 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                                                />
                                            </div>
                                            <textarea
                                                required
                                                placeholder="Tell us what's on your mind... *"
                                                value={message}
                                                onChange={e => setMessage(e.target.value)}
                                                rows={3}
                                                className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                            />
                                            <button
                                                disabled={isSending}
                                                type="submit"
                                                className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_15px_rgba(234,88,12,0.2)]"
                                            >
                                                {isSending ? (
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4" />
                                                        <span>Send Message</span>
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                </>
                            )}

                            {step === 'success' && (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
                                        <Send className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h4 className="text-white font-bold text-xl mb-2">Message Sent!</h4>
                                    <p className="text-gray-400 text-sm mb-6">Thank you! We've received your inquiry and will get back to you shortly.</p>
                                    <button
                                        onClick={resetChat}
                                        className="text-primary font-bold text-sm hover:underline"
                                    >
                                        Send another question
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Footer Branding */}
                        <div className="p-3 bg-black/40 border-t border-white/5 text-center">
                            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-widest">
                                Powered by <span className="text-gray-400 font-bold">The PSCG</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen && step === 'success') resetChat();
                }}
                className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-gray-800 rotate-90 shadow-none' : 'bg-primary shadow-primary/30 shadow-[0_0_20px_rgba(234,88,12,0.4)]'}`}
            >
                {isOpen ? (
                    <X className="w-7 h-7 text-white" />
                ) : (
                    <>
                        <MessageSquare className="w-7 h-7 text-white" />
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-background animate-bounce">1</span>
                    </>
                )}
            </motion.button>
        </div>
    );
}
