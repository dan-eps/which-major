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
        DESC: "Focuses on AI and ML foundations, blending theory with hands-on programming and applications across fields. Graduates work on intelligent systems, analytics, and automation."
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
        DESC: "Covers core computing topics (algorithms, systems, software, networking) with options to specialize in areas like AI, security, graphics, etc."
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
        DESC: "Emphasizes practical computing and IT security skills, including networks, systems, and secure computing operations."
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
        DESC: "Teaches methods for extracting insights from data using statistics, programming, and analytical tools."
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
        DESC: "Combines business needs with tech solutions, teaching how organizations use tech to solve problems and manage information."
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
        DESC: "Applies engineering principles to the design and performance of buildings and their systems (structure, mechanical, electrical)."
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
        DESC: "Focuses on transforming raw materials into useful products via chemical processes and industrial applications."
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
        DESC: "Centers on infrastructure design and public works like roads, bridges, water systems, and structural systems."
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
        DESC: "Combines hardware and software foundations to design computing systems, embedded systems, processors, and networks."
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
        DESC: "Fundamentals of electricity, electronics, controls, signals, and systems with applications in robotics, communications, and power."
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
        DESC: "More application-focused than traditional engineering; prepares students to implement and maintain technology systems in real-world contexts."
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
        DESC: "Addresses environmental challenges (water quality, pollution, sustainability) using engineering solutions"
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
        DESC: "Studies the properties and design of materials (metals, ceramics, polymers) for use in technology and structures."
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
        DESC: "Covers mechanics, energy systems, and design of machines and devices across industries."
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
        DESC: "Merges engineering with life sciences to design medical devices, imaging systems, and health-related technologies."
    },
    "Neuroscience": {
        SCHOOL: "School of Biomedical Engineering and Science",
        MATH: 0.6,
        PROGRAMMING: 0.3,
        CREATIVITY: 0.6,
        THEORY: 0.7,
        SYSTEM: 0.2,
        SCIENCE: 0.95,
        LAB: 0.95,
        DESC: "Interdisciplinary study of the brain and nervous system, blending biology, psychology, math, engineering, and computation."
    }
}