import Image from "next/image";
import snowman from '@/public/snowman.png'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="splash-container">

      <div className="left-box">
        <section>
          <h1>Welcome to the application</h1>
          <p>A CRUD application coded in the purpose of Next.js training</p>
          <h2>Objectifs:</h2>
          <ul>
            <li>To code a functional application while reviewing Next.js concepts(APP Router)</li>
            <li>To discover NoSQL bases (MongoDB) before starting the SQL with PostgreSQL</li>
            <li>To practice our "Route Handlers" knowledge with methodes GET, PATCH and DELETE (dynamic values) </li>
          </ul>
        </section>
      </div>

      <div className="right-box">
        <Image 
          src="https://cdn.pixabay.com/photo/2012/04/13/00/32/snowman-31303_1280.png" 
          alt="The snowman"
          width={400} 
          height={400}
          loading='eager'
        />
      </div>

    </div>
  );
}
