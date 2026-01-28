import React from "react";

const Btn = ({ children, className = "" }) => {
  return (
    <div
      className={`relative flex items-center gap-3 py-3 w-full
                 rounded-xl text-white font-medium
                 bg-primary backdrop-blur-3xl
                 border border-white/40
                 shadow-[0_28px_60px_-14px_rgba(87,191,255,0.6),inset_0_2px_2px_rgba(255,255,255,0.4),inset_0_-10px_20px_rgba(0,0,0,0.35)]



                 overflow-hidden ${className}`}
    >
      
      <span
        className="absolute inset-0 z-10 opacity-[0.22]
                   bg-[url('/realnoise.png')] bg-repeat
                   pointer-events-none"
      />

      
      <span
        className="absolute inset-0 -z-10 rounded-xl
                   bg-linear-to-r from-[#008BFF]/40 to-[#77C0FF]/40
                   blur-xl opacity-60"
      />

      

      <span className="z-20 flex items-center gap-3 px-3">{children || 'Settings'}</span>
    </div>
  );
};

export default Btn;
