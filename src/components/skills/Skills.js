import styles from "./Skills.module.css";

const skills = [
  {
    name: "React Js",
    logo: "https://img.icons8.com/nolan/64/react-native.png",
  },
  {
    name: "JavaScript",
    logo: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  {
    name: "Flutter",
    logo: "https://img.icons8.com/color/48/flutter.png",
  },
  {
    name: "html",
    logo: "https://img.icons8.com/color/48/html-5--v1.png",
  },
  {
    name: "CSS",
    logo: "https://img.icons8.com/stickers/100/css3.png",
  },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div className={styles.skillCard} key={skill.name}>
          <img
            src={skill.logo}
            alt={`${skill.name} logo`}
            className={styles.skillLogo}
          />
          <p className={styles.skillName}>{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
