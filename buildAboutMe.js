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
    Image: string;
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

let data = {
    personal_info: {
        full_name: "Muhammad Nayeem",
        full_name_uppercase: "MUHAMMAD NAYEEM",
        short_name: "Nayeem",
        email: "naye2m@outlook.com",
        phone: "+880 1303 571 531",
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
        // "Muhammad Nayeem",
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
        { name: "facebook", link: "https://facebook.com/naye2m" },
        { name: "twitter", link: "https://x.com/_naye2m" },
        { name: "telegram", link: "https://t.me/naye2m" },
        { name: "linkedin", link: "https://linkedin.com/in/naye2m" },
        { name: "whatsapp", link: "https://wa.me/+8801303571531" },
        { name: "github", link: "https://github.com/naye2m" },
        { name: "instagram", link: "https://instagram.com/naye2m" },
        { name: "discord", link: "https://discord.gg/user/naye2m#1718" },
        { name: "blog", link: "https://moontreee.com/blog" },
        { name: "youtube", link: "https://youtube.com/c/naye2m" }
    ],
    portfolio: {
        portfolio_link: "https://moontreee.com",
        github_link: "https://github.com/naye2m",
    },
    about_meCK: {
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
                name: "Animations I in JavaScript",
                date: "12-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description:
                    "Learned JavaScript animations to enhance user interfaces.",
            },
            {
                name: "Animations II in JavaScript",
                date: "14-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Advanced knowledge in JavaScript animations.",
            },
            {
                name: "Array Methods in JavaScript",
                date: "12-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description:
                    "Mastered array methods in JavaScript for better data manipulation.",
            },
            {
                name: "Automation in JavaScript",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Gained expertise in automating tasks using JavaScript.",
            },
            {
                name: "Automation With Google Apps in Google Script",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Learned to automate tasks using Google Apps Script.",
            },
            {
                name: "Coding Fundamentals in JavaScript",
                date: "04-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Acquired a strong foundation in JavaScript basics.",
            },
            {
                name: "Coding Fundamentals II in JavaScript",
                date: "09-12-2020",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Deepened knowledge in JavaScript fundamentals.",
            },
            {
                name: "Debugging Code in JavaScript",
                date: "15-05-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Developed skills for debugging JavaScript code.",
            },
            {
                name: "Intro to Interviewing in JavaScript",
                date: "10-02-2021",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description: "Prepared for JavaScript-related job interviews.",
            },
            {
                name: "Intro to Webpages in JavaScript",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
                file_link: "",
                valid_until: null,
                description:
                    "Learned how to build and manage webpages using JavaScript.",
            },
            {
                name: "Using a Code Editor in JavaScript",
                date: "01-06-2022",
                issued_by: "Grasshopper - Google",
                validation_link: "https://grasshopper.app/certificates",//!offline //? update
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
    skillsCK: {
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
    },
    work_experience: [
        // {
        //     title: "Junior Developer",
        //     company: "Freelancing",
        //     start_date: "2020",
        //     end_date: "2022",
        //     description:
        //         "Worked on various web development projects, focusing on both front-end and back-end aspects.",
        //     location: "Remote",
        //     responsibilities: [
        //         "Developed and maintained websites for small businesses",
        //         "Implemented front-end designs with HTML, CSS, and JavaScript",
        //         "Collaborated with clients to meet their needs",
        //     ],
        // },
        {
            title: "Full Stack Developer",
            company: "Freelancing",
            start_date: "2022",
            end_date: "Present",
            description:
                "Developed dynamic web applications, integrated APIs, and optimized performance.",
            location: "Remote",
            responsibilities: [
                "Built full-stack applications using client preferred technologies",
                "Created RESTful APIs and optimized performance",
                "Collaborated with clients to ensure their requirements were met",
            ],
        },
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
            name: "Wiki Clone",
            description:
                "A responsive web platform that accepts content in Markdown files. Includes search functionality, random page, editing, and optimized UI.",
            link: "https://projwiki.moontreee.com",
            Image: "",
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
            Image: "",
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
            Image: "",
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
            Image: "",
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
            Image: "",
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
                "Developed a web app for generating and validating QR-coded vouchers with automatic email delivery. Implemented using Google Apps Script, allowing easy voucher entry without a database.",
            link: "",
            Image: "",
            technologies_used: [
                "HTML",
                "CSS",
                "JavaScript",
                "Google Apps Script",
                "JavaScript",
            ],
        },
        {
            name: "FPS Ball Shooting Game (Three.js)",
            description:
                "Developed a first-person ball-shooting game using Three.js. The game focused on simple mechanics and 3D environments for interactive gameplay.",
            link: "https://github.com/naye2m/fpsgamefrontend",
            Image: "",
            technologies_used: ["HTML", "CSS", "ReactJS", "Three.js", "JavaScript"],
        },
    ],
    achievements: [
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
};
// build to ./about_me.json


function add_certificate_to_data() {
    data.certificates = [];
    for (const certificate_type in data.certifications_types) {
        // console.log(certificate_type);
        for (const certificate in data.certifications_types[certificate_type]) {

            let certificate_obj = { ...data.certifications_types[certificate_type][certificate] };
            certificate_obj.category = certificate_type.replace("_", " ");
            if (certificate_obj.category.endsWith("s"))
                certificate_obj.category = certificate_obj.category.slice(0, -1);

            data.certificates.push(certificate_obj);
        }
    }
}

function build() {

    add_certificate_to_data();


    try {

        fs = require("fs");
        function build() {
            const JSON_str = JSON.stringify(data);
            fs.writeFile("about_me.json", JSON_str, console.error);
        }
        build();
        console.log('%c\x1b[32mDone!\x1b[0m ', 'background: #222; color: #bada55');
        console.log('%c\x1b[33mReady To Go!\x1b[0m ', 'background: #222; color: #bada55');
    } catch (error) {
        console.log("\x1b[31mError: \x1b[0m", "Could not write to file\x1b[0m");
        throw error;
    }

}