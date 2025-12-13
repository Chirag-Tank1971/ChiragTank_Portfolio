import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const projectData = {
  swiftmart: {
    title: 'SwiftMart',
    description: 'This page contains the case study of SwiftMart Website which includes the Project Overview, Tools Used and Live Links to the official product.',
    liveLink: 'https://ecommerce-website-kr4b.vercel.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/Ecommerce_website.git',
    image: '/assets/jpeg/Project-3.jpg',
    paragraphs: [
      'SwiftMart is a modern e-commerce website developed using React.js, designed to provide users with a smooth and responsive shopping experience. The platform features essential functionalities such as dynamic product listings, a shopping cart, and user authentication. React\'s component-based architecture was leveraged to build reusable UI elements, while state management tools ensured seamless user interactions across the site.',
      'The responsive design, developed with Tailwind CSS, ensures that SwiftMart performs well on both desktop and mobile devices. This project showcases strong front-end development skills and a clear understanding of building scalable, real-world web applications.'
    ],
    tools: ['React', 'Tailwind CSS', 'JavaScript', 'API', 'Redux']
  },
  taskflow: {
    title: 'Task Flow',
    description: 'This page contains the case study of Task Flow Website which includes the Project Overview, Tools Used and Live Links to the official product.',
    liveLink: 'https://task-flow-client.vercel.app',
    codeLink: 'https://github.com/Chirag-Tank1971/Task_Flow.git',
    image: '/assets/jpeg/Project-2.jpg',
    paragraphs: [
      'The Task Management System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js), designed to streamline task tracking and team collaboration. It features secure authentication with JWT and role-based access control, ensuring that only authorized users can manage tasks. Users can create, assign, and track tasks in real-time, receiving instant updates on progress. The application includes an intuitive dashboard with filters and search options for better task organization. Additionally, it supports file attachments, comments, and automated notifications to enhance communication within teams.',
      'The system ensures secure data storage in MongoDB, making it reliable and scalable. With a modern UI built using React.js and Tailwind CSS, it offers a seamless experience across devices. Whether for small teams or large enterprises, this Task Management System enhances productivity by automating workflows, improving collaboration, and ensuring tasks are completed efficiently.'
    ],
    tools: ['React Js', 'Tailwind CSS', 'Node Js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Context API', 'Multer']
  },
  newsdigest: {
    title: 'News Digest',
    description: 'This page contains the case study of News Digest Website which includes the Project Overview, Tools Used and Live Links to the official product.',
    liveLink: 'https://newsdigestapp.netlify.app/',
    codeLink: 'https://github.com/Chirag-Tank1971/News_Digest_App.git',
    image: '/assets/jpeg/Project-1.jpg',
    paragraphs: [
      'The Personalized News Digest app is a modern, AI-driven news aggregation platform designed to streamline news consumption by delivering curated and summarized content based on user preferences. The frontend is built using React and Tailwind CSS, ensuring a smooth and visually appealing user experience. For backend services, Nhost is utilized to manage authentication, database operations, and real-time updates efficiently.',
      'To provide intelligent news summarization and sentiment analysis, the app integrates n8n workflows with OpenRouter, enabling AI-powered processing of news articles. The application fetches real-time news using the GNews API and employs a filtration mechanism to remove duplicate or irrelevant articles, ensuring users receive only high-quality, non-redundant content.',
      'One of the key features of this project is its automation pipeline, which continuously gathers, processes, and delivers news updates without requiring manual intervention. The system categorizes articles based on topics, relevance, and sentiment, allowing users to personalize their news feed according to their interests. Additionally, the platform is designed to be scalable and efficient, ensuring minimal latency in delivering fresh news updates.',
      'By combining API integrations, AI-powered processing, and real-time data management, the Personalized News Digest app offers a next-level news consumption experience, making it easier for users to stay informed without being overwhelmed by information overload.'
    ],
    tools: ['React', 'Node js', 'JavaScript', 'Automation', 'Nhost', 'PostSQL', 'N8N', 'API'],
    credentials: {
      email: 'chiragtank1971@gmail.com',
      password: 'Subspace1234'
    }
  }
};

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || !projectData[slug]) {
    return (
      <>
        <Header />
        <div className="main-container" style={{ padding: '10rem 0', textAlign: 'center' }}>
          <h1>Project not found</h1>
          <a href="/" className="btn btn--med btn--theme">Go Home</a>
        </div>
        <Footer />
      </>
    );
  }

  const project = projectData[slug];

  return (
    <>
      <Header />
      <section className="project-cs-hero">
        <div className="project-cs-hero__content">
          <h1 className="heading-primary">{project.title}</h1>
          <div className="project-cs-hero__info">
            <p className="text-primary">
              {project.description}
            </p>
          </div>
          <div className="project-cs-hero__cta">
            <a href={project.liveLink} className="btn btn--bg" target="_blank" rel="noreferrer">Live Link</a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              <Image
                src={project.image}
                alt="Project Image"
                className="project-details__showcase-img"
                width={800}
                height={500}
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">{project.title}</h3>
                {project.paragraphs.map((para, index) => (
                  <p key={index} className="project-details__desc-para">
                    {para}
                  </p>
                ))}
                {project.credentials && (
                  <div style={{ marginTop: '2rem' }}>
                    <h4 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You can use these credentials to login:</h4>
                    <p className="project-details__desc-para">
                      <strong>Email:</strong> {project.credentials.email}<br />
                      <strong>Password:</strong> {project.credentials.password}
                    </p>
                  </div>
                )}
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">Tools Used</h3>
                <div className="skills">
                  {project.tools.map((tool, index) => (
                    <div key={index} className="skills__skill">{tool}</div>
                  ))}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">See Live</h3>
                <a
                  href={project.liveLink}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Link
                </a>
                <a
                  href={project.codeLink}
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

