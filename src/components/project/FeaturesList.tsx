import React from 'react';

interface FeaturesListProps {
  features: string[];
}

export default function FeaturesList({ features }: FeaturesListProps) {
  return (
    <section id="key-features" className="scroll-mt-32 bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-10 mb-12 shadow-2xl backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-blue-500/50 text-accent flex items-center gap-3">
        <span className="w-2 h-8 bg-accent rounded-full inline-block"></span>
        Key Features
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-secondary/20 border border-white/5 rounded-xl p-6 transition-transform hover:-translate-y-1 hover:border-white/10">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" /></svg>
            </div>
            <p className="text-gray-300 font-medium">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
