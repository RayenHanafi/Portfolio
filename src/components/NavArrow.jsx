function NavArrow({ d, id, onClick }) {
  return (
    <div id={id} className="chevronBtn" onClick={onClick}>
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d={d}
        ></path>
      </svg>
    </div>
  );
}

export default NavArrow;
