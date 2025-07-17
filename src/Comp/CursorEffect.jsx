import React, { useEffect, useState } from "react";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 400); // Reset after animation
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none w-5 h-5 bg-red-500/60 rounded-full transition-transform duration-200 ease-out z-[9999] ${
        isClicked ? "animate-spread" : ""
      }`}
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}


// import React, { useEffect, useState } from "react";

// export default function CursorEffect() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleClick = () => {
//       const newParticles = Array.from({ length: 8 }, (_, i) => ({
//         id: Date.now() + i,
//         x: position.x,
//         y: position.y,
//         angle: (360 / 8) * i,
//       }));

//       setParticles((prev) => [...prev, ...newParticles]);

//       setTimeout(() => {
//         setParticles((prev) => prev.slice(8));
//       }, 500);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("click", handleClick);
//     };
//   }, [position]);

//   return (
//     <>
//       {/* Cursor circle */}
//       <div
//         className="fixed z-[9999] w-5 h-5 bg-red-500/70 rounded-full pointer-events-none"
//         style={{
//           top: position.y,
//           left: position.x,
//           transform: "translate(-50%, -50%)",
//         }}
//       />

//       {/* Particles */}
//       {particles.map((p) => {
//         const distance = 40;
//         const rad = (p.angle * Math.PI) / 180;
//         const dx = Math.cos(rad) * distance;
//         const dy = Math.sin(rad) * distance;

//         return (
//           <div
//             key={p.id}
//             className="fixed w-2 h-2 bg-red-400 rounded-full pointer-events-none animate-particle z-[9998]"
//             style={{
//               top: p.y,
//               left: p.x,
//               transform: `translate(${dx}px, ${dy}px)`,
//             }}
//           />
//         );
//       })}
//     </>
//   );
// }












// import React, { useEffect, useState } from "react";

// export default function CursorEffect() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [particles, setParticles] = useState([]);
//   const [showMain, setShowMain] = useState(true);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleClick = () => {
//       const burstParticles = Array.from({ length: 10 }, (_, i) => {
//         const angle = (2 * Math.PI * i) / 10; // circular
//         const distance = 40;
//         return {
//           id: Date.now() + i,
//           x: position.x,
//           y: position.y,
//           dx: Math.cos(angle) * distance,
//           dy: Math.sin(angle) * distance,
//         };
//       });

//       // Hide main circle temporarily
//       setShowMain(false);
//       setParticles(burstParticles);

//       setTimeout(() => {
//         setParticles([]);
//         setShowMain(true);
//       }, 400);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("click", handleClick);
//     };
//   }, [position]);

//   return (
//     <>
//       {/* Main cursor circle */}
//       {showMain && (
//         <div
//           className="fixed z-[9999] w-5 h-5 bg-red-500/70 rounded-full pointer-events-none transition-transform duration-75"
//           style={{
//             top: position.y,
//             left: position.x,
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//       )}

//       {/* Burst particles */}
//       {particles.map((p) => (
//         <div
//           key={p.id}
//           className="fixed w-2 h-2 bg-red-500 rounded-full pointer-events-none animate-burst z-[9998]"
//           style={{
//             top: p.y,
//             left: p.x,
//             transform: `translate(${p.dx}px, ${p.dy}px)`,
//           }}
//         />
//       ))}
//     </>
//   );
// }
