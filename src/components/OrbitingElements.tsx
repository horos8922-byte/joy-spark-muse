export const OrbitingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Central orbit path */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cosmic-purple/10"
      />
      
      {/* Orbiting satellite 1 */}
      <div 
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] animate-orbit-1"
        style={{ marginLeft: -300, marginTop: -300 }}
      >
        <div 
          className="absolute w-3 h-3 rounded-full bg-cosmic-cyan shadow-lg"
          style={{ 
            boxShadow: '0 0 20px hsl(190 100% 50% / 0.8), 0 0 40px hsl(190 100% 50% / 0.4)',
            left: 0,
            top: '50%',
          }}
        />
      </div>
      
      {/* Orbiting satellite 2 */}
      <div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] animate-orbit-2"
        style={{ marginLeft: -200, marginTop: -200 }}
      >
        <div 
          className="absolute w-2 h-2 rounded-full bg-cosmic-pink"
          style={{ 
            boxShadow: '0 0 15px hsl(320 100% 60% / 0.8), 0 0 30px hsl(320 100% 60% / 0.4)',
            right: 0,
            top: '50%',
          }}
        />
      </div>
      
      {/* Orbiting satellite 3 */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] animate-orbit-3"
        style={{ marginLeft: -400, marginTop: -400 }}
      >
        <div 
          className="absolute w-4 h-4 rounded-full bg-cosmic-purple"
          style={{ 
            boxShadow: '0 0 25px hsl(280 100% 70% / 0.8), 0 0 50px hsl(280 100% 70% / 0.4)',
            left: '50%',
            top: 0,
          }}
        />
      </div>
    </div>
  );
};
