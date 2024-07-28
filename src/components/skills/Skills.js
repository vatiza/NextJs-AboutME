import Image from "next/image";
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
    name: "NextJs",
    logo: "https://img.icons8.com/nolan/64/nextjs.png",
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
  {
    name: "tailwindcss",
    logo: "https://img.icons8.com/color/48/tailwindcss.png",
  },
  {
    name: "bootstrap",
    logo: "https://img.icons8.com/color-glass/48/bootstrap.png",
  },

  {
    name: "NodeJs",
    logo: "https://img.icons8.com/fluency/48/node-js.png",
  },
  {
    name: "ExpressJs",
    logo: "https://img.icons8.com/nolan/64/express-js.png",
  },
  {
    name: "MongoDB",
    logo: "https://img.icons8.com/nolan/64/mongo-db.png",
  },
  {
    name: "MySQL",
    logo: "https://img.icons8.com/color/48/mysql-logo.png",
  },
  {
    name: "Firebase",
    logo: "https://img.icons8.com/color/48/firebase.png",
  },
  {
    name: "Git",
    logo: "https://img.icons8.com/color/48/git.png",
  },
  {
    name: "GitHub",
    logo: "https://img.icons8.com/nolan/64/github.png",
  },
  {
    name: "Postman",
    logo: "https://img.icons8.com/dusk/64/postman-api.png",
  },
  {
    name: "ChartJs",
    logo: "https://www.chartjs.org/img/chartjs-logo.svg",
  },
  {
    name: "Java",
    logo: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
  },
  {
    name: "Dart",
    logo: "https://img.icons8.com/color/48/dart.png",
  },
  {
    name: "C",
    logo: "https://img.icons8.com/color/48/c-programming.png",
  },
  {
    name: "C++",
    logo: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png",
  },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div className={styles.skillCard} key={skill.name}>
          <Image
            priority={false}
            width={20}
            height={20}
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
