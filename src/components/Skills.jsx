import SkillBox from "./SkillBox";

function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center mt-16 sm:mt-[110px] px-4"
    >
      <div className="title">Skills</div>
      {/* <!-- Skills Row 1 --> */}
      <div
        id="row1"
        className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-6 max-w-4xl"
      >
        <SkillBox skillName={"React"} />
        <SkillBox skillName={"Tailwindcss"} />
        <SkillBox skillName={"Python"} />
        <SkillBox skillName={"Java"} />
        <SkillBox skillName={"MySql"} />
      </div>
      {/* <!-- Skills Row 2 --> */}
      <div
        id="row2"
        className="flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-6 mt-4 sm:mt-7 max-w-4xl"
      >
        <SkillBox skillName={"IDA"} />
        <SkillBox skillName={"Figma"} />
        <SkillBox skillName={"Photoshop"} />
      </div>
    </section>
  );
}

export default Skills;
