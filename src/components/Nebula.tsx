export const Nebula = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Purple nebula */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(280 100% 50% / 0.15), transparent 70%)',
          top: '-20%',
          right: '-10%',
          animationDuration: '8s',
        }}
      />
      
      {/* Cyan nebula */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(190 100% 50% / 0.12), transparent 70%)',
          bottom: '10%',
          left: '-5%',
          animationDuration: '10s',
          animationDelay: '2s',
        }}
      />
      
      {/* Pink nebula */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(320 100% 50% / 0.1), transparent 70%)',
          top: '40%',
          left: '30%',
          animationDuration: '12s',
          animationDelay: '4s',
        }}
      />
    </div>
  );
};
