import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 'taskflow',
    title: 'Task Flow',
    description: 'This MERN stack Task Management System automates assignments, ensures secure authentication, and provides real-time updates for seamless workflow and collaboration.',
    image: '/assets/jpeg/Project-2.jpg',
    link: '/projects/taskflow'
  },
  {
    id: 'newsdigest',
    title: 'News Digest',
    description: 'News Digest is a personalized news web app that fetches, filters, and summarizes articles using AI, providing users with quick and relevant news updates.',
    image: '/assets/jpeg/Project-1.jpg',
    link: '/projects/newsdigest'
  },
  {
    id: 'swiftmart',
    title: 'SwiftMart',
    description: 'SwiftMart is an e-commerce website offering a seamless shopping experience with features like product browsing, advanced search and filters, a shopping cart, secure payments, and a user-friendly interface optimized for all devices.',
    image: '/assets/jpeg/Project-3.jpg',
    link: '/projects/swiftmart'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
          </span>
        </h2>

        <div className="projects__content">
          {projects.map((project) => (
            <div key={project.id} className="projects__row">
              <div className="projects__row-img-cont">
                <Image
                  src={project.image}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{project.title}</h3>
                <p className="projects__row-content-desc">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="btn btn--med btn--theme dynamicBgClr"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

