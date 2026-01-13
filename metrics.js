const MATH = "MATH"
const PROGRAMMING = "PROGRAMMING"
const CREATIVITY = "CREATIVITY"
const THEORY = "THEORY"
const SYSTEM = "SYSTEM"
const LAB = "LAB"
const SCIENCE = "SCIENCE"

var majors = {
    "Artificial Intelligence & Machine Learning": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.8,
        PROGRAMMING: 0.7,
        CREATIVITY: 0.4,
        THEORY: 0.85,
        SYSTEM: 0.0,
        SCIENCE: 0.35,
        LAB: 0.9,
        DESC: "Focuses on AI and ML foundations, blending theory with hands-on programming and applications across fields. Graduates work on intelligent systems, analytics, and automation.",
        EXP: "You like <b>math</b>, <b>theory</b>, and finding patterns, and you're comfortable working in <b>mostly digital systems to understand why things behave the way they do</b>.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/artificialintellicenceandmachinelearningbs/"
    },
    "Computer Science": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.9,
        PROGRAMMING: 0.8,
        CREATIVITY: 0.4,
        THEORY: 0.6,
        SYSTEM: 0.6,
        SCIENCE: 0.25,
        LAB: 0.6,
        DESC: "Covers core computing topics (algorithms, systems, software, networking) with options to specialize in areas like AI, security, graphics, etc.",
        EXP: "You enjoy <b>logical thinking</b>, <b>programming</b>, and abstract problem-solving, and want flexibility to explore <b>both theory and practical applications</b>.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/computerscience/"

    },
    "Computing & Security Tech": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.4,
        PROGRAMMING: 0.4,
        CREATIVITY: 0.2,
        THEORY: 0.3,
        SYSTEM: 0.5,
        SCIENCE: 0.2,
        LAB:0.95,
        DESC: "Emphasizes practical computing and IT security skills, including networks, systems, and secure computing operations.",
        EXP: "You care about systems working reliably and securely, prefer <b>applied work over heavy theory</b>, and like structured, <b>real-world problem solving</b>.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/computingandsecuritytechnology/"
    },
    "Data Science": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.8,
        PROGRAMMING: 0.5,
        CREATIVITY: 0.2,
        THEORY: 0.85,
        SYSTEM: 0.5,
        SCIENCE: 0.4,
        LAB: 0.95,
        DESC: "Teaches methods for extracting insights from data using statistics, programming, and analytical tools.",
        EXP: "You like <b>math and science</b>, enjoy <b>discovering patterns</b> in data, and care about turning analysis into <b>real-world insight</b>.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/datascience/"
    },
    "Software Engineering": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.7,
        PROGRAMMING: 0.9,
        CREATIVITY: 0.5,
        THEORY: 0.6,
        SYSTEM: 0.8,
        SCIENCE: 0.25,
        LAB: 0.7,
        DESC: "Focuses on designing, building, testing, and managing complex software systems, including teamwork and engineering practices",
        EXP: "You enjoy programming, building usable tools, and working within structured systems to make software that lasts and scales.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/softwareengineering/"
    },
    "Information Systems": {
        SCHOOL: "School of Computer and Information Sciences",
        MATH: 0.5,
        PROGRAMMING: 0.5,
        CREATIVITY: 0.4,
        THEORY: 0.4,
        SYSTEM: 0.7,
        SCIENCE: 0.2,
        LAB: 0.5,
        DESC: "Combines business needs with tech solutions, teaching how organizations use tech to solve problems and manage information.",
        EXP: "You like using technology to solve practical problems, prefer applied work over theory, and enjoy seeing systems used in real organizations.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofcomputingandinformatics/informationsystems/"
    },
    "Architectural Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.75,
        PROGRAMMING: 0.2,
        CREATIVITY: 0.8,
        THEORY: 0.6,
        SYSTEM: 0.7,
        SCIENCE: 0.7,
        LAB: 0.9,
        DESC: "Applies engineering principles to the design and performance of buildings and their systems (structure, mechanical, electrical).",
        EXP: "You like large physical systems, structured problem-solving, and understanding how buildings function as integrated systems.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/architecturalengineering/"
    },
    "Chemical Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.9,
        PROGRAMMING: 0.3,
        CREATIVITY: 0.4,
        THEORY: 0.8,
        SYSTEM: 0.8,
        SCIENCE: 0.95,
        LAB: 0.95,
        DESC: "Focuses on transforming raw materials into useful products via chemical processes and industrial applications.",
        EXP: "You're comfortable with math and science, enjoy physical processes, and want to understand how materials and reactions behave at scale.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/chemicalengineering//"
    },
    "Civil Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.8,
        PROGRAMMING: 0.3,
        CREATIVITY: 0.5,
        THEORY: 0.7,
        SYSTEM: 0.9,
        SCIENCE: 0.85,
        LAB: 0.9,
        DESC: "Centers on infrastructure design and public works like roads, bridges, water systems, and structural systems.",
        EXP: "You enjoy designing reliable, large-scale physical systems and care about safety, structure, and real-world impact.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/civilengineering/"
    },
    "Computer Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.9,
        PROGRAMMING: 0.8,
        CREATIVITY: 0.4,
        THEORY: 0.8,
        SYSTEM: 0.8,
        SCIENCE: 0.6,
        LAB: 0.9,
        DESC: "Combines hardware and software foundations to design computing systems, embedded systems, processors, and networks.",
        EXP: "You like digital systems but want to stay close to hardware, blending programming, math, and system-level thinking.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/computerengineering/"
    },
    "Electrical Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.9,
        PROGRAMMING: 0.6,
        CREATIVITY: 0.4,
        THEORY: 0.85,
        SYSTEM: 0.7,
        SCIENCE: 0.65,
        LAB: 0.9,
        DESC: "Fundamentals of electricity, electronics, controls, signals, and systems with applications in robotics, communications, and power.",
        EXP: "You enjoy math, systems, and physical phenomena like signals and circuits, and like understanding how complex systems interact.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/electricalengineering/"
    },
    "Engineering Technologies": {
        SCHOOL: "School of Engineering",
        MATH: 0.5,
        PROGRAMMING: 0.4,
        CREATIVITY: 0.3,
        THEORY: 0.4,
        SYSTEM: 0.8,
        SCIENCE: 0.5,
        LAB: 0.95,
        DESC: "More application-focused than traditional engineering; prepares students to implement and maintain technology systems in real-world contexts.",
        EXP: "You prefer hands-on, practical work, enjoy physical systems, and care more about implementation than abstract theory.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/engineeringtechnology/"
    },
    "Environmental Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.8,
        PROGRAMMING: 0.3,
        CREATIVITY: 0.6,
        THEORY: 0.7,
        SYSTEM: 0.9,
        SCIENCE: 0.7,
        LAB: 0.95,
        DESC: "Addresses environmental challenges (water quality, pollution, sustainability) using engineering solutions",
        EXP: "You're motivated by science and real-world impact, enjoy applied problem-solving, and want to improve environmental or public health systems.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/environmentalengineering/"
    },
    "Materials Science & Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.8,
        PROGRAMMING: 0.3,
        CREATIVITY: 0.4,
        THEORY: 0.75,
        SYSTEM: 0.6,
        SCIENCE: 0.9,
        LAB: 0.95,
        DESC: "Studies the properties and design of materials (metals, ceramics, polymers) for use in technology and structures.",
        EXP: "You like science and understanding why materials behave the way they do, often through experiments and physical analysis.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/materialsscienceandengineering/"
    },
    "Mechanical Engineering": {
        SCHOOL: "School of Engineering",
        MATH: 0.85,
        PROGRAMMING: 0.4,
        CREATIVITY: 0.6,
        THEORY: 0.75,
        SYSTEM: 0.85,
        SCIENCE: 0.8,
        LAB: 0.95,
        DESC: "Covers mechanics, energy systems, and design of machines and devices across industries.",
        EXP: "You enjoy physical systems, math, and structured problem-solving, and want to understand how and why machines work.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofengineering/mechanicalengineering/"
    },
    "Biomedical Engineering": {
        SCHOOL: "School of Biomedical Engineering and Science",
        MATH: 0.75,
        PROGRAMMING: 0.4,
        CREATIVITY: 0.6,
        THEORY: 0.8,
        SYSTEM: 0.6,
        SCIENCE: 0.95,
        LAB: 0.95,
        DESC: "Merges engineering with life sciences to design medical devices, imaging systems, and health-related technologies.",
        EXP: "You like applying engineering and science to physical and biological systems, especially when it leads to better healthcare.",
        LINK: "https://catalog.drexel.edu/undergraduate/schoolofbioengscienceandhealthsystems/biomedicalengineering/"
    },
    "Neuroscience": {
        SCHOOL: "School of Biomedical Engineering and Science",
        MATH: 0.6,
        PROGRAMMING: 0.2,
        CREATIVITY: 0.6,
        THEORY: 0.7,
        SYSTEM: 0.2,
        SCIENCE: 0.95,
        LAB: 0.95,
        DESC: "Interdisciplinary study of the brain and nervous system, blending biology, psychology, math, engineering, and computation.",
        EXP: "You're driven by scientific curiosity, enjoy experiments and theory, and want to understand how biological systems work.",
        LINK: "https://catalog.drexel.edu/undergraduate/collegeofartsandsciences/neuroscience/"
    }
}