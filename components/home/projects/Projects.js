import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Netflix Clone",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Typescript", "NextJS", "Tailwind", "Rest API", "Authentication"],
    description:
      "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
          Pain.app is a real-time coaching app for students learning to paint.
          This app is my baby, designed and built on my own.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Voom - Zoom Clone",
    imgSrc: "project-imgs/zoom1.jpg",
    code: "https://github.com/LazarosZiskos/Voom",
    projectLink: "https://voom-eta.vercel.app/",
    tech: [
      "Typescript",
      "NextJS",
      "Tailwind",
      "Shadcn",
      "Clerk Authentication",
      "Stream",
    ],
    description:
      "Created a Zoom clone for seamless video conferencing, enhancing remote collaboration and communication.",
    modalContent: (
      <>
        <p>
          Zoom is a tool used by thousands of people every day that truly helps
          in the coopeartion and interaction between remote teams and
          individuals.
        </p>
        <p>
          Utilizing the power of NextJS and Stream io I built the entire project
          to be 100% functional, including functionalities like microphone and
          camera selection by the user, as well as setting up different settings
          for the display and the interface and record their sessions.
        </p>
        <p>
          Through the application the user can create a meeting, schedule a
          meeting for a date and time in the future and also invite people to
          join their meeting through a link. Moreover, they can view their
          recorded sessions whenever they want through a dedicated Recordings
          section.
        </p>
        <p>
          In order for the user to use the services they have to authenticate
          through Clerk Authentication either by creating their own
          username/password or via their Gmail, Github or Linkedin account
        </p>
        <p>
          In the front-end I used Tailwind CSS and Shadcn to make it pixel
          perfect, offering the best experience for the user.
        </p>
      </>
    ),
  },
  {
    title: "Ecommerce Store",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/LazarosZiskos/e-commerce-store",
    projectLink: "https://e-commerce-store-tawny.vercel.app/",
    tech: [
      "Typescript",
      "NextJS",
      "Tailwind",
      "Shadcn",
      "Sanity CMS",
      "Stripe",
    ],
    description:
      "Ecommerce store, where the user can change the product details utilizing Sanity CMS.",
    modalContent: (
      <>
        <p>
          An ecommerce store using NextJS and its features like routing, dynamic
          routing and protected routes. On top of that the client can add new
          products easily and fast without using code through the power of
          Sanity io CMS Studio.
        </p>
        <p>
          The user can choose the product they want to purchase, change the
          quantity accordingly. Also the checkout and payment are implemented
          using the latest features of Stripe.
        </p>
        <p>
          The front-end is built using Tailwind CSS and Shadcn to achieve a
          flawless visual outcome, maximizing the user experience that an eshop
          should have.
        </p>
      </>
    ),
  },
  {
    title: "Hotel Website",
    imgSrc: "project-imgs/hotel1.jpg",
    code: "https://github.com/LazarosZiskos/e-commerce-store",
    projectLink: "https://hotel-website-brown.vercel.app/",
    tech: ["Typescript", "NextJS", "Tailwind", "Shadcn"],
    description:
      "A hotel website built to draw attention from the potential guest, increase sales and highlight the features that the hotel has to offer",
    modalContent: (
      <>
        <p>
          Using NextJS and Tailwind CSS the website is fast, efficient without
          big loading times that can push the potential customer away.
        </p>
        <p>
          Features like light & dark mode offer an excellent user experience
          making the website unforgetable.
        </p>
        <p>
          Moreover, utilizing the power of Framer Motion I have achieved an
          eye-catching outcome which truly, as designers say, makes the website
          'pop'!
        </p>
        <p>
          It is developed to underline the best features of the hotel and offer
          every detail that a potential guest should know and solve any question
          they may have before arriving!
        </p>
      </>
    ),
  },
  {
    title: "Hotel Website",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tech: ["Typescript", "NextJS", "Tailwind", "Shadcn"],
    description:
      "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
    modalContent: (
      <>
        <p>Alright, you got me. I&apos;m all out of paint references.</p>
        <p>
          Point is, use this space to explain a bit further WHAT this project
          is, as well as what YOU contributed to it.
        </p>
        <p>You get the idea. Now more lorem {":)"}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];
