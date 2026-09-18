const Logo = (props) => {
 return (
  <div className="flex items-center gap-2.5">
   <svg
    width="147"
    height="40"
    viewBox="0 0 147 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
   >
    {/* Mark */}
    <circle
     cx="20"
     cy="20"
     r="20"
     fill="#030712"
     className="dark:fill-[#FFFFFF]"
    />

    {/* Monograma F */}
    <path
     d="M15 12v16M15 12h10M15 19.7h7"
     stroke="#FFFFFF"
     className="dark:stroke-[#030712]"
     strokeWidth="2.8"
     strokeLinecap="round"
     strokeLinejoin="round"
    />

    {/* Wordmark */}
    <text
     x="50"
     y="26.8"
     fill="#030712"
     className="dark:fill-[#FFFFFF]"
     fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif"
     fontSize="21"
     fontWeight="700"
     letterSpacing="-0.6"
    >
     Fluxora
    </text>
   </svg>
  </div>
 );
};

export default Logo;
