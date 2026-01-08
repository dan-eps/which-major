const QUESTION = "question"
const ANSWERS = "answers"
const TEXT = "text"
const EFFECT = "effect"

const questions = [
    {
        QUESTION: "How do you feel about <i>math</i>?",
        ANSWERS: [
            { TEXT: "I love math!", EFFECT: [MATH, 0.8]},
            { TEXT: "I'm pretty good at math, but it's not my favorite", EFFECT: [MATH, 0.3] },
            { TEXT: "I'm okay at math, but I don't really like it", EFFECT: [MATH, -0.3] },
            { TEXT: "I despise math", EFFECT: [MATH, -0.8] }
        ]
    },
    {
        QUESTION: "Do you prefer physical or digital systems?",
        ANSWERS: [
            { TEXT: "Physical for sure!", EFFECT: [PROGRAMMING, -0.8]},
            { TEXT: "I prefer physical systems, but software is cool too", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "I prefer software, ", EFFECT: [PROGRAMMING, -0.3] },
            { TEXT: "Digital definitely", EFFECT: [PROGRAMMING, -0.8] }
        ]
    },
    {
        QUESTION: "What kind of problems do you enjoy most?",
        ANSWERS: [
            { TEXT: "Finding patterns and underlying structure", EFFECT: [THEORY, 0.7, MATH, 0.2] },
            { TEXT: "Building something people can actually use", EFFECT: [THEORY, -0.4, SYSTEM, -0.2, PROGRAMMING, 0.2] },
            { TEXT: "Designing systems that work reliably", EFFECT: [SYSTEM, 0.7, THEORY, 0.2, ] },
            { TEXT: "Understanding how the natural world works", EFFECT: [SCIENCE, 0.8, THEORY, -0.3] }
        ]
    },
    {
        QUESTION: "When starting a project, what excites you most?",
        ANSWERS: [
            { TEXT: "Exploring ideas and concepts", EFFECT: [THEORY, 0.6, CREATIVITY, 0.3] },
            { TEXT: "Creating and iterating on a solution", EFFECT: [CREATIVITY, 0.75, SYSTEM, -0.1] },
            { TEXT: "Making sure all parts fit together", EFFECT: [SYSTEM, 0.9, LAB, 0.3] },
            { TEXT: "Testing ideas in the real world", EFFECT: [LAB, -0.2, THEORY, 0.2, CREATIVITY, -0.2] }
        ]
    },
    {
        QUESTION: "Which type of class sounds most interesting?",
        ANSWERS: [
            { TEXT: "One focused on logic, proofs, and reasoning", EFFECT: [MATH, 0.7, THEORY, 0.8, PROGRAMMING, 0.1] },
            { TEXT: "One focused on building and designing things", EFFECT: [CREATIVITY, 0.6, SCIENCE, 0.2, PROGRAMMING, -0.5] },
            { TEXT: "One focused on large-scale systems", EFFECT: [SYSTEM, 0.85] },
            { TEXT: "One focused on experiments and observations", EFFECT: [SCIENCE, 0.6, CREATIVITY, -0.3] }
        ]
    },
    {
        QUESTION: "How do you prefer to work?",
        ANSWERS: [
            { TEXT: "Thinking deeply and independently", EFFECT: [THEORY, 0.5] },
            { TEXT: "Writing, building, or creating", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "Following structured processes", EFFECT: [SYSTEM, 0.5] },
            { TEXT: "Hands-on with physical or experimental work", EFFECT: [LAB, 0.6] }
        ]
    },
    {
        QUESTION: "What motivates you the most?",
        ANSWERS: [
            { TEXT: "Solving challenging abstract problems", EFFECT: [MATH, 0.5] },
            { TEXT: "Seeing something you made come to life", EFFECT: [CREATIVITY, 0.6] },
            { TEXT: "Ensuring reliability and efficiency", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Contributing to scientific understanding", EFFECT: [SCIENCE, 0.6] }
        ]
    },
    {
        QUESTION: "Which statement resonates most with you?",
        ANSWERS: [
            { TEXT: "I enjoy theoretical ideas, even if they aren't immediately practical", EFFECT: [THEORY, 0.6] },
            { TEXT: "I enjoy turning ideas into working solutions", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "I enjoy managing complexity across many parts", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "I enjoy observing and measuring real phenomena", EFFECT: [LAB, 0.6] }
        ]
    },
    {
        QUESTION: "What kind of result feels most rewarding?",
        ANSWERS: [
            { TEXT: "A new insight or model", EFFECT: [THEORY, 0.5] },
            { TEXT: "A finished tool or application", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "A system that works consistently over time", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Clear experimental results", EFFECT: [SCIENCE, 0.5] }
        ]
    },
    {
        QUESTION: "Which environment sounds most appealing?",
        ANSWERS: [
            { TEXT: "Research-focused and idea-driven", EFFECT: [THEORY, 0.5] },
            { TEXT: "Fast-paced and creative", EFFECT: [CREATIVITY, 0.5] },
            { TEXT: "Professional and highly structured", EFFECT: [SYSTEM, 0.5] },
            { TEXT: "Lab, field, or hands-on environments", EFFECT: [LAB, 0.6] }
        ]
    },
    {
        QUESTION: "When something fails, what's your first instinct?",
        ANSWERS: [
            { TEXT: "Re-examine the assumptions", EFFECT: [THEORY, 0.5] },
            { TEXT: "Rewrite or redesign the solution", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "Find the weakest link and strengthen it", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Test, measure, and iterate", EFFECT: [LAB, 0.6] }
        ]
    },
    {
        QUESTION: "Which scale of problems do you prefer?",
        ANSWERS: [
            { TEXT: "Abstract or mathematical", EFFECT: [MATH, 0.6] },
            { TEXT: "Individual components or features", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "Large interconnected systems", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Physical or biological systems", EFFECT: [SCIENCE, 0.6] }
        ]
    },
    {
        QUESTION: "Which impact matters most to you?",
        ANSWERS: [
            { TEXT: "Advancing theoretical understanding", EFFECT: [THEORY, 0.6] },
            { TEXT: "Making useful technology", EFFECT: [PROGRAMMING, 0.5] },
            { TEXT: "Protecting infrastructure or society", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Improving health or the environment", EFFECT: [SCIENCE, 0.6] }
        ]
    },
    {
        QUESTION: "Which description fits you best?",
        ANSWERS: [
            { TEXT: "Analytical and mathematically inclined", EFFECT: [MATH, 0.6] },
            { TEXT: "Creative builder and problem solver", EFFECT: [CREATIVITY, 0.6] },
            { TEXT: "Systems thinker who values reliability", EFFECT: [SYSTEM, 0.6] },
            { TEXT: "Scientifically curious and experimental", EFFECT: [SCIENCE, 0.6] }
        ]
    }

]