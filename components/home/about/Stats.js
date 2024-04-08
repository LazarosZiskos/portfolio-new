import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import { MdBook } from "react-icons/md";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Techologies I use</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">NextJs</span>
            <span className="chip">Firebase</span>
            <span className="chip">Rest API</span>
            <span className="chip">Redux</span>
            <span className="chip">Tailwind</span>
            <span className="chip">NodeJS</span>
            <span className="chip">GitHub</span>
            <span className="chip">Sanity CMS</span>
            <span className="chip">Framer Motion</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <MdBook size="2.4rem" color="var(--brand)" />
            <span>Currently Learing</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GSAP</span>
            <span className="chip">Prisma</span>
            <span className="chip">Supabase</span>
            <span className="chip">Zustand</span>
            <span className="chip">GraphQL</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
