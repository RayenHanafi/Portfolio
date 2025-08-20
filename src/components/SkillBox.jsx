function SkillBox({ skillName }) {
  return (
    <div class="skillBox">
      <img
        className="w-[70px] h-[70px] object-contain"
        src={`/images/Skills logos/${skillName}.png`}
        alt={skillName}
      />
    </div>
  );
}

export default SkillBox;
