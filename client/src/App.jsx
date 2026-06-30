import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Moon, Sun } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    timeOfBirth: '',
    location: ''
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      // 🚀 DEPLOYMENT UPDATE: Use Environment Variable for the API URL
      const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${BACKEND_URL}/api/astrology/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message || 'The cosmic alignment failed. Please try again.');
      }
    } catch (err) {
      setError('Server connection failed. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05010a] text-white overflow-x-hidden font-sans selection:bg-yellow-500 selection:text-black">
      
     {/* 1. COSMIC BACKGROUND ANIMATIONS */}
      {/* Deep Space Gradients (Base Layer) */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#2a0845] via-[#05010a] to-black pointer-events-none z-0"></div>
      
      {/* Glowing Auras */}
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-yellow-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 2. SACRED GEOMETRY (Rotating Mandala & Symbols) */}
      {/* Changed sizing to vh to ensure it fits on screen, fixed z-index, bumped opacity to 25% */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[120vh] md:h-[120vh] opacity-25 pointer-events-none z-0 flex items-center justify-center animate-[spin_120s_linear_infinite]">
        
        {/* Outer Cosmic Wheel */}
        <div className="absolute w-[85%] h-[85%] border-2 border-dashed border-yellow-500 rounded-full"></div>
        
        {/* Inner Yantra Circles */}
        <div className="absolute w-[65%] h-[65%] border border-purple-300 rounded-full flex items-center justify-center">
            <div className="absolute w-[80%] h-[80%] border-[3px] border-yellow-500/60 rotate-45"></div>
            <div className="absolute w-[80%] h-[80%] border-[3px] border-yellow-500/60 rotate-12"></div>
        </div>
        
        {/* Floating Mythology Symbols */}
        <span className="absolute top-[4%] text-5xl md:text-6xl text-yellow-400 -rotate-0 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">🔱</span>
        <span className="absolute bottom-[4%] text-5xl md:text-6xl text-yellow-400 rotate-180 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">🪷</span>
        <span className="absolute left-[4%] text-5xl md:text-6xl text-yellow-400 -rotate-90 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">✺</span>
        <span className="absolute right-[4%] text-5xl md:text-6xl text-yellow-400 rotate-90 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">🕉️</span>
      </div>

      {/* Giant Center Om */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] text-yellow-500/10 font-serif pointer-events-none z-0">
        ॐ
      </div>


      {/* 3. MAIN APPLICATION CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:py-24">
        
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center gap-4 mb-4 text-yellow-500">
            <Sun className="animate-[spin_10s_linear_infinite]" size={32} />
            <h1 className="text-5xl md:text-7xl font-['Cinzel',serif] text-transparent bg-clip-text bg-linear-to-r from-yellow-100 via-yellow-400 to-amber-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)] tracking-wide">
              Nakshatra
            </h1>
            <Moon className="animate-pulse" size={32} />
          </div>
          <p className="text-purple-200/80 text-lg md:text-xl font-light tracking-widest uppercase">
            Your Destiny Is Written In The Stars
          </p>
        </header>

        {/* Glassmorphism Cosmic Form */}
        {/* Completely Transparent Cosmic Form */}
        <form 
          onSubmit={handleSubmit}
          className="relative bg-transparent backdrop-blur-md border border-yellow-500/30 rounded-[2.5rem] p-8 md:p-14 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden group transition-all duration-500 hover:border-yellow-500/60 hover:shadow-[0_0_80px_rgba(234,179,8,0.2)]"
        >
          {/* Top Corner Temple Accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-[2.5rem]"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50 rounded-tr-[2.5rem]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            
            {/* Input Wrapper 1 */}
            <div className="flex flex-col gap-2 group/input">
              <label className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase ml-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500/50 group-focus-within/input:bg-yellow-400 animate-pulse"></span>
                Full Name
              </label>
              <input 
                type="text" 
                name="fullName" 
                required 
                placeholder="e.g. Arjun Sharma"
                value={formData.fullName} 
                onChange={handleChange}
                className="bg-transparent border-b-2 border-yellow-500/30 px-4 py-3 text-white placeholder-yellow-200/30 focus:outline-none focus:border-yellow-400 focus:bg-yellow-500/10 transition-all text-lg tracking-wide rounded-t-lg"
              />
            </div>

            {/* Input Wrapper 2 */}
            <div className="flex flex-col gap-2 group/input">
              <label className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase ml-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500/50 group-focus-within/input:bg-yellow-400 animate-pulse"></span>
                Place of Birth
              </label>
              <input 
                type="text" 
                name="location" 
                required 
                placeholder="e.g. Varanasi, UP"
                value={formData.location} 
                onChange={handleChange}
                className="bg-transparent border-b-2 border-yellow-500/30 px-4 py-3 text-white placeholder-yellow-200/30 focus:outline-none focus:border-yellow-400 focus:bg-yellow-500/10 transition-all text-lg tracking-wide rounded-t-lg"
              />
            </div>

            {/* Input Wrapper 3 */}
            <div className="flex flex-col gap-2 group/input">
              <label className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase ml-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500/50 group-focus-within/input:bg-yellow-400 animate-pulse"></span>
                Date of Birth
              </label>
              <input 
                type="date" 
                name="dob" 
                required 
                value={formData.dob} 
                onChange={handleChange}
                className="bg-transparent border-b-2 border-yellow-500/30 px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-500/10 transition-all text-lg tracking-wide rounded-t-lg scheme-dark"
              />
            </div>

            {/* Input Wrapper 4 */}
            <div className="flex flex-col gap-2 group/input">
              <label className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase ml-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500/50 group-focus-within/input:bg-yellow-400 animate-pulse"></span>
                Time of Birth
              </label>
              <input 
                type="time" 
                name="timeOfBirth" 
                required 
                value={formData.timeOfBirth} 
                onChange={handleChange}
                className="bg-transparent border-b-2 border-yellow-500/30 px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:bg-yellow-500/10 transition-all text-lg tracking-wide rounded-t-lg scheme-dark"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              type="submit" 
              disabled={loading}
              className="relative overflow-hidden bg-linear-to-r from-amber-600 to-yellow-500 text-black font-extrabold rounded-full px-12 py-5 tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed group/btn"
            >
              <span className="relative z-10">{loading ? 'Consulting the Stars...' : 'Unlock Destiny'}</span>
              <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-8 text-center bg-red-950/80 border-l-4 border-red-500 text-red-200 p-5 rounded-r-xl shadow-2xl backdrop-blur-md font-mono text-sm tracking-wide">
            ⚠ {error}
          </div>
        )}

        {loading && (
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-yellow-400">
            <div className="w-16 h-16 border-4 border-yellow-500/30 border-t-yellow-400 rounded-full animate-spin"></div>
            <p className="font-light tracking-[0.2em] uppercase text-sm animate-pulse text-yellow-500/80">
              Aligning Planetary Chakras...
            </p>
          </div>
        )}

        {/* 4. THE READING RESULTS (Divine Scroll) */}
        {result && !loading && (
          <div className="mt-16 bg-transparent backdrop-blur-md relative border border-yellow-500/30 rounded-3xl p-8 md:p-16 shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            
            {/* Numerology Badges */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 relative z-10 border-b border-yellow-500/20 pb-12">
              <div className="flex flex-col items-center gap-3">
                <span className="text-yellow-600 uppercase tracking-[0.2em] text-xs font-bold">Psychic / Mulank</span>
                <div className="w-24 h-24 rounded-full border-2 border-yellow-500/40 bg-yellow-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <span className="text-5xl font-['Cinzel',serif] text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">{result.numerology.mulank}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-yellow-600 uppercase tracking-[0.2em] text-xs font-bold">Destiny / Bhagyank</span>
                <div className="w-24 h-24 rounded-full border-2 border-yellow-500/40 bg-yellow-500/10 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                  <span className="text-5xl font-['Cinzel',serif] text-yellow-300 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">{result.numerology.bhagyank}</span>
                </div>
              </div>
            </div>
            
            {/* Markdown Astrology Content */}
            <div className="relative z-10 text-indigo-100/90 leading-[2.2] tracking-wide text-lg max-w-3xl mx-auto space-y-6 [&>h1]:text-4xl [&>h1]:text-yellow-400 [&>h1]:font-['Cinzel'] [&>h1]:text-center [&>h1]:mb-10 [&>h2]:text-2xl [&>h2]:text-yellow-500 [&>h2]:font-['Cinzel'] [&>h2]:border-b [&>h2]:border-yellow-500/20 [&>h2]:pb-3 [&>h2]:mt-12 [&>h3]:text-xl [&>h3]:text-yellow-300 [&>h3]:font-['Cinzel'] [&>h3]:mt-8 [&>ul]:list-none [&>ul>li]:relative [&>ul>li]:pl-8 [&>ul>li::before]:content-['✦'] [&>ul>li::before]:absolute [&>ul>li::before]:left-0 [&>ul>li::before]:text-yellow-600 [&>p]:mb-6">
              <ReactMarkdown>{result.reading}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;