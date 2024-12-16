/*k
type personal_info = {
    full_name: string;
    full_name_uppercase: string;
    short_name: string;
    email: string;
    phone: string;
    website: string;
    bio: string;
    mailing_address: string;
    date_of_birth: string;
    nationality: string;
    religion: string;
    title: string;
    photo_url: string;
    gender: string;
}
type social_media = {
    name: string;
    link: string;
}
type certificate = {
    name: string;
    date: string;
    issued_by: string;
    validation_link: string;
    image_link: string;
    file_link: string;
    valid_until: null;
    description: string;
}
type work_experience = {
    title: string;
    company: string;
    start_date: string;
    end_date: string;
    description: string;
    location: string;
    responsibilities: string[];
}
type course = {
    cirtification: string;
    institution: string;
    start_date: null;
    end_date: string;
    resulttmp: string;
    result: string;
    cirtification_type: string;
    institution_location: string;
    field_of_study: string;
}
type projects= {
    name: string;
    description: string;
    link: string;
    image: string;
    technologies_used: string[];
}

type return_JSON_type = {
    personal_info: personal_info;
    social_media: social_media[];
    certificates: certificate[];
    work_experience: work_experience[];
    courses: course[];
    projects: projects[];
    // others
}

 */

const { title } = require("process");

let data = {
    personal_info: {
        full_name: "Muhammad Nayeem",
        full_name_uppercase: "MUHAMMAD NAYEEM",
        short_name: "Nayeem",
        email: "naye2m@outlook.com",
        phone_txt: "+880 1303 571 531",
        phone: "+8801303571531",
        website: "https://moontreee.com",
        bio: "Passionate and technically skilled Full Stack Developer with solid expertise in front-end and back-end technologies. Highly proficient in Python, JavaScript, with a strong focus on web development and programming problem-solving. Experienced in building functional and responsive applications, including a Sudoku solver, vouchering web app, and web-based games. Constantly seeking opportunities to enhance my skills and contribute to innovative projects.",
        mailing_address:
            "House#29, Word#5, Post Office Road, Middle Badda, Badda, Dhaka",
        date_of_birth: "2004-11-04",
        nationality: "Bangladeshi",
        religion: "Islam",
        title: "Full Stack Developer | Software Programmer",
        photo_url: "",
        gender: "Male",
    },
    names: [
        "Muhammad Nayeem",
        "MUHAMMAD NAYEEM",
        "Nayeem",
    ],
    titles: [
        "Full Stack Developer",
        "Web Developer",
        "Programmer",
        "Software Developer",
        "Website Devloper",
        "UI/UX Designer",
        "3D Designer",
        "Basic Animator",
        "Dot NET | C# Devloper",
    ],
    social_media: [
        { name: "facebook", icon: "facebook2", link: "https://facebook.com/naye2m" },
        { name: "twitter", icon: "twitter2", link: "https://x.com/_naye2m" },
        { name: "telegram", icon: "telegram", link: "https://t.me/naye2m" },
        { name: "linkedin", icon: "linkedin3", link: "https://linkedin.com/in/naye2m" },
        { name: "whatsapp", icon: "whatsapp", link: "https://wa.me/+8801303571531" },
        { name: "github", icon: "github2", link: "https://github.com/naye2m" },
        { name: "instagram", icon: "instagram2", link: "https://instagram.com/naye2m" },
        // { name: "discord",icon:"discord", link: "https://discord.gg/user/naye2m#1718" },
        { name: "blog", icon: "quill", link: "https://moontreee.com/blog" },
        { name: "youtube", icon: "youtube", link: "https://youtube.com/c/naye2m" }
    ],
    portfolio: {
        portfolio_link: "https://moontreee.com",
        github_link: "https://github.com/naye2m",
    },
    about_me: {
        introduction:
            "Hello! I'm Muhammad Nayeem, a Full Stack Developer with expertise in both front-end and back-end technologies. I am passionate about creating responsive, user-friendly web applications. I have worked on various projects, including building dynamic websites, games, and utilities. I always seek to improve my skills and contribute to meaningful projects.",
        experience:
            "With a deep understanding of programming fundamentals and a diverse range of technical expertise, I've contributed to both small and large-scale projects, focusing on functionality, scalability, and user experience.",
    },
    certifications_types: {
        courses: [
            {
                name: "CS50X: Introduction to Computer Science (2023)",
                date: "2023",
                issued_by: "Harvard University",
                validation_link:
                    "https://certificates.cs50.io/896753ec-89b3-4367-b947-4d7c300a7bc0.pdf?size=A4",
                image_link:
                    "https://certificates.cs50.io/896753ec-89b3-4367-b947-4d7c300a7bc0.png?size=A4",
                file_link: "",
                valid_until: null,
                description:
                    "Completed with 100% score. A strong foundation in programming fundamentals, algorithms, and web development.",
            },
        ], JavaScript_certifications: [
            {
                name: "Animations I",
                date: "12-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Animations.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/animations.jpg",
                file_link: "",
                valid_until: null,
                description:
                    "Learned JavaScript animations to enhance user interfaces.",
            },
            {
                name: "Animations II",
                date: "14-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Animations_II.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/animations_II.jpg",
                file_link: "",
                valid_until: null,
                description: "Advanced knowledge in JavaScript animations.",
            },
            {
                name: "Array Methods",
                date: "12-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/Array_Methods.jpg",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/Array_Methods.jpg",
                file_link: "",
                valid_until: null,
                description:
                    "Mastered array methods in JavaScript for better data manipulation.",
            },
            // {
            //     name: "Automation",
            //     date: "01-06-2022",
            //     issued_by: "Grasshopper - Google",
            //     validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/",
            //     image_link:"",
            //     file_link: "",
            //     valid_until: null,
            //     description: "Gained expertise in automating tasks using JavaScript.",
            // },
            {
                name: "Automation With Google Apps in Google Script",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Automation.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Automation.png",
                file_link: "",
                valid_until: null,
                description: "Learned to automate tasks using Google Apps Script.",
            },
            {
                name: "Coding Fundamentals",
                date: "09-12-2020",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Coding_Fundamentals.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/Coding_fundamentals.jpg",
                file_link: "",
                valid_until: null,
                description: "Acquired a strong foundation in JavaScript basics.",
            },
            {
                name: "Coding Fundamentals II",
                date: "04-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Coding_Fundamentals_II.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/Coding_fundamental_II.jpg",
                file_link: "",
                valid_until: null,
                description: "Deepened knowledge in JavaScript fundamentals.",
            },
            {
                name: "Debugging Code",
                date: "15-05-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Debugging_Code.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/Debugging_Code.jpg",
                file_link: "",
                valid_until: null,
                description: "Developed skills for debugging JavaScript code.",
            },
            {
                name: "Intro to Interviewing",
                date: "10-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Intro_to_Interviewing.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/intro_to_interviewing.jpg",
                file_link: "",
                valid_until: null,
                description: "Prepared for JavaScript-related job interviews.",
            },
            {
                name: "Intro to Webpages",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Intro_to_Webpages.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Intro_to_Webpages.png",
                file_link: "",
                valid_until: null,
                description:
                    "Learned how to build and manage webpages using JavaScript.",
            },
            {
                name: "Using a Code Editor",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Using_A_Code_Editor.pdf",
                image_link: "https://raw.githubusercontent.com/naye2m/certificates-files/refs/heads/master/Programming/grasshopper/__new_formate__Using_A_Code_Editor.png",
                file_link: "",
                valid_until: null,
                description:
                    "Gained proficiency in using code editors for JavaScript development.",
            },
        ], website_skills: [
            {
                name: "jQuery",
                date: "23-01-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CT-UVIPRMOP/pdf",
                image_link: "https://www.sololearn.com/Certificate/CT-UVIPRMOP/png",
                file_link: "",
                valid_until: null,
                description: "Learned jQuery for dynamic web development.",
            },
            {
                name: "Responsive Web Design",
                date: "26-04-2022",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CT-JKRVDQ8A/pdf",
                image_link: "https://www.sololearn.com/Certificate/CT-JKRVDQ8A/png",
                file_link: "",
                valid_until: null,
                description:
                    "Proficient in CSS3, HTML5, JavaScript (ES6), and RDW. Mastered the responsive design principles.",
            },
        ], programming_languages: [
            {
                name: "JavaScript Programming Fundamentals",
                date: "2023",
                issued_by: "Sololearn",
                validation_link: "https://www.sololearn.com/Certificate//pdf",
                image_link: "https://www.sololearn.com/Certificate//png",
                file_link: "",
                valid_until: null,
                description:
                    "Certified in JavaScript, focusing on animation, automation, debugging, and coding fundamentals.",
            },
            {
                name: "C#",
                date: "16-11-2022",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CT-JE9RVXCT/pdf",
                image_link: "https://www.sololearn.com/Certificate/CT-JE9RVXCT/png",
                file_link: "",
                valid_until: null,
                description: "Acquired strong C# programming skills.",
            },
            {
                name: "C++ Fundamentals",
                date: "13-09-2024",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-EHT4V9M9/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-EHT4V9M9/png",
                file_link: "",
                valid_until: null,
                description:
                    "Acquired strong C++ programming skills. For optimizing code and improving performance.",
            },
            {
                name: "C intermidiate",
                date: "02-03-2024",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-MUFGA4SO/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-MUFGA4SO/png",
                file_link: "",
                valid_until: null,
                description:
                    "Also completed C programming course with Harvard University.",
            },
            {
                name: "HTML5",
                date: "15-05-2022",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CT-PXZGURAF/pdf",
                image_link: "https://www.sololearn.com/Certificate/CT-PXZGURAF/png",
                file_link: "",
                valid_until: null,
                description: "Mastered HTML5 for building modern web applications.",
            },
            {
                name: "CSS3",
                date: "01-06-2022",
                issued_by: "Sololearn",
                validation_link: "https://www.sololearn.com/Certificate//pdf",
                image_link: "https://www.sololearn.com/Certificate//png",
                file_link: "",
                valid_until: null,
                description: "Gained expertise in CSS3 for styling modern websites.",
            },
            {
                name: "PHP",
                date: "26-04-2022",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CT-IP4ANTKT/pdf",
                image_link: "https://www.sololearn.com/Certificate/CT-IP4ANTKT/png",
                file_link: "",
                valid_until: null,
                description: "Proficient in PHP for back-end development.",
            },
            {
                name: "Python Developer",
                date: "06-03-2024",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-L0GUOAR8/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-L0GUOAR8/png",
                file_link: "",
                valid_until: null,
                description: "Completed Python developer certification.",
            },
            {
                name: "JavaScript",
                date: "15-08-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-JV5PF4XE/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-JV5PF4XE/png",
                file_link: "",
                valid_until: null,
                description:
                    "Proficient in JavaScript for both front-end and back-end development.",
            },
            // {
            //     name: "SCSS",
            //     date: "N/A",
            //     issued_by: "Sololearn",
            //     validation_link: "https://www.sololearn.com/Certificate//pdf",
            //     image_link: "https://www.sololearn.com/Certificate//png",
            //     file_link: "",
            //     valid_until: null,
            //     description: "Learned SCSS for modern, responsive web design."
            // },
        ], database: [
            {
                name: "Introduction to SQL",
                date: "27-03-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-XI9VDZ8W/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-XI9VDZ8W/png",
                file_link: "",
                valid_until: null,
                description: "Introduced to SQL for managing relational databases.",
            },
            {
                name: "SQL",
                date: "04-10-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-ABND5T1G/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-ABND5T1G/png",
                file_link: "",
                valid_until: null,
                description: "SQL for relational database management.",
            },
            {
                name: "SQL",
                date: "04-10-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-ABND5T1G/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-ABND5T1G/png",
                file_link: "",
                valid_until: null,
                description: "SQL for relational database management.",
            },
            {
                name: "SQL Intermediate",
                date: "04-10-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-OORSKZWW/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-OORSKZWW/png",
                file_link: "",
                valid_until: null,
                description: "Proficient in SQL and MySQL.",
            },
            {
                name: "SQL",
                date: "04-10-2023",
                issued_by: "Sololearn",
                validation_link:
                    "https://www.sololearn.com/Certificate/CC-ABND5T1G/pdf",
                image_link: "https://www.sololearn.com/Certificate/CC-ABND5T1G/png",
                file_link: "",
                valid_until: null,
                description: "Proficient in MySQL for relational database management.",
            },
        ], others: [
        ],
    },
    /*     skills_p: {
        programming_languages: [
            {
                name: "Python",
                percent_acquired: "88%",
                date_acquired: "2023",
                level: "Advanced",
            },
            {
                name: "JavaScript",
                percent_acquired: "98%",
                date_acquired: "2023",
                level: "Advanced",
            },
            {
                name: "C",
                percent_acquired: "83%",
                date_acquired: "2023",
                level: "Intermediate",
            },
            {
                name: "C++",
                percent_acquired: "75%",
                date_acquired: "2023",
                level: "Basics",
            },
            {
                name: "PHP",
                percent_acquired: "87%",
                date_acquired: "2022",
                level: "Advanced",
            },
            {
                name: "C#",
                percent_acquired: "87%",
                date_acquired: "2023",
                level: "Advanced",
            },
        ],
        web_development: [
            {
                name: "React.js",
                percent_acquired: "85%",
                date_acquired: "2023",
                level: "Advanced",
            },
            {
                name: "TypeScript",
                percent_acquired: "70%",
                date_acquired: "2023",
                level: "Intermediate",
            },
            {
                name: "Flask",
                percent_acquired: "85%",
                date_acquired: "2023",
                level: "Advanced",
            },
            {
                name: "Django",
                percent_acquired: "80%",
                date_acquired: "2023",
                level: "Intermediate",
            },
            {
                name: "FastAPI",
                percent_acquired: "80%",
                date_acquired: "2023",
                level: "Intermediate",
            },
        ],
        databases: [
            {
                name: "MySQL",
                percent_acquired: "84%",
                date_acquired: "2023",
                level: "Intermediate",
            },
            {
                name: "SQLite3",
                percent_acquired: "70%",
                date_acquired: "2023",
                level: "Beginner",
            },
        ],
        additional_skills: [
            {
                name: "Version Control (GIT)",
                percent_acquired: "90%",
                date_acquired: "2023",
                level: "Advanced",
            },
            {
                name: "Linux System Administration",
                percent_acquired: "70%",
                date_acquired: "2023",
                level: "Intermediate",
            },
            {
                name: "Object-Oriented Programming (OOP)",
                percent_acquired: "92%",
                date_acquired: "2023",
                level: "Advanced",
            },
        ],
    }, */

    skills: [
        // Programming Languages
        { name: "Python", percent_acquired: 85, date_acquired: "2023", level: "Advanced" },
        { name: "JavaScript", percent_acquired: 89, date_acquired: "2023", level: "Advanced" },
        { name: "C", percent_acquired: 83, date_acquired: "2023", level: "Intermediate" },
        { name: "C++", percent_acquired: 75, date_acquired: "2023", level: "Basic" },
        { name: "PHP", percent_acquired: 80, date_acquired: "2022", level: "Advanced" },
        { name: "C#", percent_acquired: 80, date_acquired: "2023", level: "Advanced" },
        { name: "HTML5", percent_acquired: 92, date_acquired: "2022", level: "Advanced" },
        { name: "CSS3", percent_acquired: 93, date_acquired: "2022", level: "Advanced" },
        { name: "SQL", percent_acquired: 84, date_acquired: "2023", level: "Intermediate" },
        { name: "Java", percent_acquired: 68, date_acquired: "2022", level: "Intermediate" },
        { name: "RESTful APIs", percent_acquired: 89, date_acquired: "2022", level: "Advanced" },
        { name: "Django", percent_acquired: 80, date_acquired: "2023", level: "Intermediate" },

    ],
    subskills: [
        // Web Development Frameworks
        { name: "React.js", percent_acquired: 80, date_acquired: "2023", level: "Advanced" },
        { name: "TypeScript", percent_acquired: 73, date_acquired: "2023", level: "Intermediate" },
        { name: "Flask", percent_acquired: 80, date_acquired: "2023", level: "Advanced" },
        { name: "FastAPI", percent_acquired: 75, date_acquired: "2023", level: "Intermediate" },
        { name: "Node.js", percent_acquired: 60, date_acquired: "2023", level: "Basic" },
        { name: "Express.js", percent_acquired: 60, date_acquired: "2023", level: "Intermediate" },
        { name: "mongoDB", percent_acquired: 65, date_acquired: "2023", level: "Intermediate" },

        // Databases
        { name: "SQLite3", percent_acquired: 70, date_acquired: "2023", level: "Basic" },
        { name: "PostgreSQL", percent_acquired: 75, date_acquired: "2023", level: "Intermediate" },
        // Additional Skills
        { name: "Version Control (GIT)", percent_acquired: 80, date_acquired: "2023", level: "Advanced" },
        { name: "Linux System", percent_acquired: 70, date_acquired: "2023", level: "Intermediate" },
        { name: "Object-Oriented Programming (OOP)", percent_acquired: 85, date_acquired: "2023", level: "Advanced" },
        { name: "Responsive Web Design (RWD)", percent_acquired: 97, date_acquired: "2023", level: "Advanced" },
        { name: "Debugging", percent_acquired: 85, date_acquired: "2023", level: "Advanced" },
        { name: "Functional Programming", percent_acquired: 89, date_acquired: "2023", level: "Intermediate" },
        { name: "3D Design (Three.js)", percent_acquired: 65, date_acquired: "2023", level: "Basic" }, // Suggestion: Improve this for better 3D and game design applications.
        { name: "Data Structures", percent_acquired: 70, date_acquired: "2023", level: "Intermediate" },
        { name: "Algorithms", percent_acquired: 70, date_acquired: "2023", level: "Intermediate" },
        { name: "Command Line Interface (CLI)", percent_acquired: 76, date_acquired: "2023", level: "Intermediate" },
        { name: "CLI Tools Making", percent_acquired: 84, date_acquired: "2023", level: "Advanced" },
        { name: "Math Related Problem Solving", percent_acquired: 93, date_acquired: "2023", level: "Advanced" },
    ],
    work_experience: [
        /*     {
                title: "Computer Operator & Phone Technician",
                company: "Bismillah Telecom",
                start_date: "12-2023",
                end_date: "06-2024",
                description:
                    "Provided technical support, repaired devices, and developed innovative solutions for operational efficiency in a small business environment.",
                location: "Onsite (Part-time)",
                responsibilities: [
                    "Assisted junior technicians and beginner computer operators.",
                    "Provided technical support for PC and phone hardware/software issues.",
                    "Streamlined operations as the sole computer operator in a small business.",
                    "Repaired approximately 15 devices daily.",
                    "Assisted 10–15 clients weekly with technical support, achieving a ~95% success rate.",
                    "Delivered MS Office document support to ~20 satisfied customers daily."
                ],
                key_achievements: [
                    "Developed an Online Voucher Feature that included QR code stamping for online validation.",
                    "Enabled scanning of QR codes to access, validate, or print an online copy of vouchers.",
                    "Automated email delivery of vouchers to customers."
                ]
            }, */
        {
            title: "Junior Developer",
            company: "Freelancing",
            start_date: "2020",
            end_date: "2022",
            description:
                "Worked on various web development projects, focusing on both front-end and back-end aspects.",
            location: "Remote",
            responsibilities: [
                "Developed and maintained websites for small businesses.",
                "Implemented front-end designs with HTML, CSS, and JavaScript.",
                "Collaborated with clients to meet their needs."
            ]
        },
        {
            title: "Full Stack Developer",
            company: "Freelancing",
            start_date: "2023",
            end_date: "Present",
            description:
                "Developed dynamic web applications, integrated APIs, and optimized performance.",
            location: "Remote",
            responsibilities: [
                "Built full-stack applications using client-preferred technologies.",
                "Created RESTful APIs and optimized performance.",
                "Collaborated with clients to ensure their requirements were met."
            ]
        }
    ],
    education: [
        {
            degree: "CS50X: Introduction to Computer Science",
            institution: "Harvard University",
            start_date: null,
            end_date: "2023",
            // resulttmp: "Completed with 100% score",
            result: "Certified by Harvard University with 100% score",
            degree_type: "Certificate",
            institution_location: "Cambridge, USA",
            field_of_study: "Computer Science",
        },
        {
            degree: "HSC in Business Management and Technology",
            institution: "Bangladesh Technical Education Board",
            start_date: null,
            end_date: "2024",
            result: "GPA: 4.29 (out of 5.00)",
            degree_type: "High School Certificate",
            institution_location: "Bangladesh",
            field_of_study: "Business Management and Technology",
        },
        {
            degree: "SSC in Business Studies",
            institution: "Barisal Board",
            start_date: null,
            end_date: "2022",
            result: "GPA: 4.22 (out of 5.00)",
            degree_type: "Secondary School Certificate",
            institution_location: "Bangladesh",
            field_of_study: "Business Studies",
        },
    ],
    projects: [
        {
            name: "Encyclopedia",
            description:
                "A responsive Wiki like web platform that accepts content in Markdown files. Includes search functionality, random page, editing, and optimized UI.",
            link: "https://projwiki.moontreee.com",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/encyclopedia.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Markdown",
                "Django",
            ],
        },
        {
            name: "Auctioning Website",
            description:
                "Developed a dynamic e-commerce platform with features like user authentication, product listing, watchlist, and product categorization. Includes bidding, commenting, and user-specific pages.",
            link: "https://projauction.moontreee.com",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/auction.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Django",
                "Jinja",
                "RWD",
                "Single page application (SPA)",
            ],
        },
        {
            name: "Mail Web App",
            description:
                "Built a seamless SPA with API integration. Features email composition, reading, replying, archiving, and sending to multiple recipients. Optimized UI for better user experience.",
            link: "https://projmail.moontreee.com",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/mailapp.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Django",
                "Jinja",
                "RWD",
                "Single page application (SPA)",
            ],
        },
        {
            name: "Network",
            description:
                "A social networking app with functionalities such as tweeting, commenting, liking/unliking posts, and profile organization. Includes pagination, following features, and post editing.",
            link: "https://projnetwork.moontreee.com",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/network.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Python",
                "Django",
                "Jinja",
                "RWD",
                "Single page application (SPA)",
            ],
        },
        {
            name: "Sudoku Solver",
            description:
                "The Sudoku Solver project, implemented in C with a backtracking algorithm, includes both a command-line tool and a web interface via Flask. Users can input puzzles manually or as a string and share solutions via URLs. Also have features like API, CLI and others mini featues.",
            link: "https://github.com/naye2m/sudoku-solver",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/sudoku.solver.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "C",
                "Python",
                "Flask",
                "Jinja",
                "SQLite",
            ],
        },
        {
            name: "Vouchering Web App",
            description:
                "Developed a web application for managing vouchers with a simple interface. Features include Google Apps Script integration for automation, easy product entry, and flexible printing options. Requires no database setup.",
            link: "https://naye2m.github.io/institutevouchering/",
            github_repo: "https://github.com/naye2m/institutevouchering",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/institutevouchering.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Google Apps Script"
            ]
        },
        {
            name: "Online Voucher Feature",
            description:
                "Designed an innovative feature for QR-stamped vouchers, enabling online validation, viewing, and printing via QR code scanning. Includes automated email delivery for customer convenience.",
            link: "https://naye2m.github.io/instituteonlinevoucher/?demo=true",
            github_repo: "https://github.com/naye2m/instituteonlinevoucher",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/instituteonlinevoucher.png",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "QRcode.js"
            ]
        },
        {
            name: "FPS Ball Shooting Game (Three.js)",
            description:
                "Developed a first-person ball-shooting game using Three.js. The game focused on simple mechanics and 3D environments for interactive gameplay.",
            link: "https://github.com/naye2m/fpsgamefrontend",
            image: "https://raw.githubusercontent.com/naye2m/image-store/refs/heads/main/webapps_screenshots_single/fpsgamefrontend.png",
            technologies_used: ["HTML", "CSS", "ReactJS", "Three.js", "JavaScript"],
        },
    ],
    achievements: [
        {
            "name": "Microsoft Learn Achievements",
            "awarded_by": "Microsoft",
            "date_awarded": "2024-12-01",
            "description": "Earned 150+ badges and 35+ trophies certifications showcasing expertise in C# programming, Azure DevOps, Azure services, AI and Machine Learning, and DevOps pipelines. More than 100 hours of training completed in Microsoft Learn.  <a href=\"https://learn.microsoft.com/en-us/users/naye2m/transcript\" >Microsoft Transcript link https://learn.microsoft.com/en-us/users/naye2m/transcript</a> ",
        },
        // {
        //     name: "Best Web Developer 2024",
        //     awarded_by: "TechCon",
        //     date_awarded: "2024-06-01",
        //     description: "Recognized for exceptional work in web development.",
        // },
    ],
    references: [
        // {
        //     name: "John Doe",
        //     title: "Senior Developer",
        //     contact_info: "john.doe@email.com"
        // }
    ],
    languages: [
        {
            language: "English",
            proficiency: "A2 Intermediate",
        },
        {
            language: "Bangla",
            proficiency: "Native",
        },
    ],
    interests: [
        "Programming (MAIN)",
        "Working with Electronic devices",
        "Developing web applications",
        "Developing Electronic devices",
        "Traveling",
        "Reading",
    ],
    availability: {
        available_for_work: true,
        available_for_interview: true,
        preferred_technologies: [
            "Python",
            "JavaScript",
            "Flask",
            "Django",
            "RESTful APIs",
            "FastAPI",
            "C",
            "C++",
            "C#",
            "Java",
            "PHP",
            "SQL",
            "HTML",
            "CSS",
            "MySQL",
            "SQLite3",
            "Git",
        ],
        available_for_remotework: true,
        preferred_job_type: "Full-time",
    },
    services: [
        {
            "icon": "laptop2",
            "title": "Full Stack Dev",
            "description": "Expert in developing scalable front-end and back-end systems using modern technologies like Django, Node.js, and React."
        },
        {
            "icon": "mobile2",
            "title": "Responsive Design",
            "description": "Build visually appealing and mobile-friendly web interfaces optimized for all devices."
        },
        {
            "icon": "code",
            "title": "API Integration",
            "description": "Integrate RESTful and GraphQL APIs for seamless communication between services and systems."
        },
        {
            "icon": "database2",
            "title": "Web Security",
            "description": "Implement secure authentication, data encryption, and server-side validation for robust applications."
        },
        {
            "icon": "tools2",
            "title": "E-Commerce Apps",
            "description": "Develop feature-rich e-commerce solutions, including inventory, cart, and checkout functionalities."
        },
        {
            "icon": "printer2",
            "title": "ERP Systems",
            "description": "Design enterprise-level ERP solutions for inventory, sales, and employee management with role-based access."
        },
        {
            "icon": "game-controller",
            "title": "Game Dev Basics",
            "description": "Create basic game frontends using tools like Three.js and responsive mechanics for browsers."
        },
        // {
        //     "icon":"magnifying-glass",
        //     "title": "SEO Optimization",
        //     "description": "Enhance website visibility and ranking through modern SEO best practices."
        // },
        {
            "icon": "chat",
            "title": "Custom Dashboards",
            "description": "Design interactive admin dashboards tailored to track key metrics and manage data effectively."
        },
        {
            "icon": "gauge",
            "title": "Speed Optimization",
            "description": "Optimize website performance and load times to ensure a smooth user experience."

        },
        {
            "icon": "star-full",
            "title": "Desing Optimization",
            "description": "Optimize website design to ensure a consistent user experience across all devices."

        },
        {
            "icon": "database",
            "title": "Database Design",
            "description": "Develop efficient database schemas and ORM integration using SQL or NoSQL technologies."
        },
        {
            "icon": "chat2",
            "title": "Support",
            "description": "Provide support for clients and colleagues, including troubleshooting, debugging, and training."
        },
    ]

    // medium_posts:[
    //     {
    //         date: "2022-05-01",
    //         title: "How to Build a Sudoku Solver in C with Backtracking Algorithm",
    //         link: "https://medium.com/@nayeem.moontreee/how-to-build-a-sudoku-solver-in-c-with-backtracking-algorithm-1a7d5d5d5d9d",
    //         description: "In this article, I will show you how to build a Sudoku Solver in C with backtracking algorithm. I will also explain the algorithm and how to use it to solve Sudoku puzzles. I will also provide a step-by-step guide on how to compile and run the program on Windows, Linux, and macOS.",
    //         image: "https://miro.medium.com/max/1400/1*y6j7y9y3-y6j7y9y3.png",
    //         tags: ["C", "Sudoku", "Algorithm", "Backtracking"],
    //         likes: 100,
    //         views: 1000,
    //         author: "nayeem.moontreee",
    //         author_image: "https://miro.medium.com/fit/c/96/96/1*y6j7y9y3-y6j7y9y3.png",
    //     }
    // ]
};
// build to ./about_me.json
const { argv } = require('node:process');
// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

let minify = argv.includes("minify");
if (minify) {
    // remove long string values recursively
    function remove_long_strings(obj, len, convertto) {
        for (let key in obj) {
            if (typeof obj[key] === "object") {
                remove_long_strings(obj[key], len, convertto);
            } else if (typeof obj[key] === "string" && obj[key].length > len) {
                obj[key] = obj[key].slice(0, convertto) + "...";
            }
        }
        data.skills = [];
        data.subskills = [];
    }
    remove_long_strings(data, 40, 10);
}

function add_certificate_to_data() {
    data.certificates = [];
    for (const certificate_type in data.certifications_types) {
        let category = certificate_type.replace("_", " ");
        if (category.endsWith("s"))
            category = category.slice(0, -1);

        for (const certificate in data.certifications_types[certificate_type]) {
            let certificate_obj = { ...data.certifications_types[certificate_type][certificate] };
            certificate_obj.category = category;
            data.certificates.push(certificate_obj);
        }
    }
    return true;
}

function build() {
    if (!minify)
        add_certificate_to_data();
    else
        console.log("Skipping certificate data");

    try {
        const fs = require("fs");
        function writeToFile() {
            const JSON_str = JSON.stringify(data);
            const FILENAME = `about_me${minify ? "_min" : ""}.json`;
            fs.writeFile(FILENAME, JSON_str, console.error);
        }
        writeToFile();
        console.log('%c\x1b[32mDone!\x1b[0m ', 'background: #222; color: #bada55');
        console.log('%c\x1b[33mReady To Go!\x1b[0m ', 'background: #222; color: #bada55');
    } catch (error) {
        console.log("\x1b[31mError: \x1b[0m", "Could not write to file\x1b[0m");
        throw error;
    }
}

build();