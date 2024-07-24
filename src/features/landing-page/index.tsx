import Avatar from "../../assets/avatar.jpg";
import EducationCard from "../../components/education-card";
import ProjectCard from "../../components/project-card";

interface Project {
  name: string;
  year: string;
  description: string;
}

interface Education {
  level: string;
  year: string;
  school: string;
  bgColor?: string;
}

const LandingPage = () => {
  const projects: Project[] = [
    {
      name: "Project A",
      year: "2019 - 2020",
      description: "Lorem ipsum",
    },
    {
      name: "Project B",
      year: "2020 - 2021",
      description: "Lorem ipsum",
    },
    {
      name: "Project C",
      year: "2021 - 2022",
      description: "Lorem ipsum",
    },
    {
      name: "Project D",
      year: "2022 - 2023",
      description: "Lorem ipsum",
    },
  ];

  const educations: Education[] = [
    {
      level: "SMK Multimedia",
      year: "2020 - 2030",
      school: "Pustek Serpong",
    },
    {
      level: "S1 Teknik Informatika",
      year: "2050 - present",
      school: "Esa Unggul University",
    }
  ];
  
  return (
    <div className="flex flex-col">
      <section className="flex flex-row justify-around items-center m-5">
        <div className="flex flex-col">
          <h1>Hello World,</h1>
          <p>I'm, Pranata</p>
        </div>
        <img src={Avatar} className="w-60 rounded-lg" />
      </section>

      <section className="flex flex-col px-5 py-10 bg-gray-100">
        <label className="font-semibold text-lg">Summary</label>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section className="flex flex-col px-5 py-10 gap-5">
        <label className="font-semibold text-lg">Projects</label>
        {projects.map((item: Project, index: number) => (
          <ProjectCard
            key={index}
            name={item.name}
            year={item.year}
            description={item.description}
            bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
          />
        ))}
      </section>

      <section className="flex flex-col px-5 py-10 gap-5 rounded-3xl">
        <label className="font-semibold text-lg">Education</label>
        {educations.map((item: Education, index: number) => (
          <EducationCard
            key={index}
            level={item.level}
            year={item.year}
            school={item.school}
            bgColor={`${index % 2 === 0 ? "bg-green-200" : "bg-green-100"}`}
          />
        ))}
      </section>
    </div>
  );
};

export default LandingPage;
