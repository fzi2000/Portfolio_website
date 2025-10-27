
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* HEADER / HERO SECTION */}
      <header className="header">
        <h1 className="name">Fathima Zaineb Ismath</h1>
        <h2 className="title">Full Stack Developer | AI Enthusiast</h2>

      </header>

      {/* ABOUT SECTION */}
      <section className="about">
        <h3>About Me</h3>
        <p>
          I'm a Computer Science graduate passionate about AI, web development,
          and building solutions that make a difference. I enjoy working in projects with
          React, Python, and Machine Learning that combine technology
          and creativity. Experienced in software development, cross-platform apps, AI, and machine learning in healthcare. Proficient in Java, Python, React, Flutter and web development technologies. Published research in medical AI and recognized for leadership, collaboration, and academic excellence. 
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>React.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>Artificial Intelligence</li>
          <li>Cross-App Development: Flutter</li>
          <li>Web Development: HTML, CSS, PHP, Next.js and Node.js</li>
          <li>Large Language Models (LLMs) and Generative AI (GenAI)</li>
          <li>RAG</li>
          <li>Predictive Modelling- Model Training, Validation, Deployment </li>
          <li>Natural Language Processing </li>
          <li>Machine Learning Frameworks & Libraries: TensorFlow, Scikit-learn, Pytorch, Numpy, Pandas, SHAP, Keras, XGBoost, Explainable AI (SHAP) </li>
          <li>Power BI, Power Apps, Power Automate and Tableau</li>
          <li>SQL, R, Data Structure and Algorithms, ETL Pipelines</li>
          <li>Hadoop, Spark, Google BigQuery </li>
          <li>Amazon Web Services (AWS)</li>
          <li>MS Office Suite, Windows, Linux</li>
          <li>Git Version Control </li>
        </ul>
      </section>

            {/* PROJECTS SECTION */}
      <section className="education">
        <h3>Education 🎓</h3>
        <div className="project-card">
          <h4>Heriot-Watt University, Dubai</h4>
          <p>
            Bachelor of Science (Hons) in Computer Science. Specialization: Artificial Intelligence (AI). GPA: 4.0 
          </p>
        </div>

        <div className="project-card">
          <h4>GEMS Education</h4>
          <p>
            High School Diploma, Science Stream with distinction in Physics, Chemistry, and Mathematics.
          </p>
        </div>
      </section>
      
      {/* PROJECTS SECTION */}
      <section className="education">
        <h3>WORK EXPERIENCE 💻 </h3>
        <div className="project-card">
          <h4>Teaching Assistant – Heriot Watt University</h4>
          <p>
            Assisted course leaders in facilitating lab sessions for the course F28DA Data Structures and Algorithms (DSA).
          </p>
        </div>

        <div className="project-card">
          <h4>IT Intern- Emerson (Dubai Headquarters)</h4>
          <p>
            Developed interactive dashboards using Power BI to visualize data and provide insights for business decisions. Built and deployed Power Apps.
          </p>
        </div>

        <div className="project-card">
          <h4>Software Engineer Intern – DevelopL Dubai</h4>
          <p>
            Developed an application using Flutter for Dubai Metro.
          </p>
        </div>

        <div className="project-card">
          <h4>Vice President – Heriot Watt Art Club</h4>
          <p>
            Organized sessions and led a diverse 400+ community. Collaborated with the Student Council to ensure smooth operation of events. 
          </p>
        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="projects">
        <h3>Projects 💡</h3>
        <div className="project-card">
          <h4>CardioRisk AI:</h4>
          <p>
            An Explainable AI web app for heart disease prediction with SHAP
            visualizations and risk stratification.
          </p>
          <a href="https://cardiorisk-ai.streamlit.app/" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>Co-Lab</h4>
          <p>
            Real-time collaborative brainstorming app built using React and
            Node.js.
          </p>
          <a href="https://imaadmmi.github.io/SyncTech/?fbclid=PAZXh0bgNhZW0CMTEAAadKXKBoAOx1d1HLf0_AFb0NFgQ3V7UsBvXNmjcWPEtnoYUg1hSSfEthn9XNtQ_aem_HkEKN_JbUOm5uzGopCz4LQ" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>Dubai Metro App</h4>
          <p>
            Developed an application for easier navigation for Dubai Metro users using Flutter. 
          </p>
          <a href="https://drive.google.com/drive/u/0/folders/10AbMmtKSznQsCnCG28NJVgz7TLRV1hk6" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>Amazon Multiclass Classifier</h4>
          <p>
            Amazon Multiclass Classification using NLP to categorize and predict customer sentiment analysis for Amazon food reviews. 
          </p>
          <a href="https://github.com/fzi2000/Amazon-Review-Multiclass-Classification/blob/main/Amazon_Reviews.ipynb" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h4>Publication: Fathima Ismath et al. (2025). Predicting Cardiovascular Disease with Machine Learning: An Explainable AI Approach. </h4>
          <p>
            Presented at the Association for the Advancement of Artificial Intelligence Summer Symposium on Human-AI Collaboration, Dubai 
          </p>
          <a href="https://researchportal.hw.ac.uk/en/publications/predicting-cardiovascular-disease-with-machine-learning-an-explai/" target="_blank">View Project</a>
        </div>
      </section>

            {/* Certifications SECTION */}
      <section className="projects">
        <h3>Certifications 📚</h3>
        <div className="project-card">
          <h4>Microsoft Certified: Azure AI Fundamentals (AI 900)</h4>
          <a href="https://www.credly.com/badges/df8cfd7c-3d0c-47fd-9f6c-9c534b131a72/linked_in_profile" target="_blank">Certificate</a>
        </div>

        <div className="project-card">
          <h4>AWS Training for Developers</h4>
          <a href="https://www.linkedin.com/learning/certificates/855ff20b23267ef9fd32ba74a9275218362e2cfa840c3c13a90b7dc3ade98fb9?u=2374954" target="_blank">Certificate</a>
        </div>

                <div className="project-card">
          <h4> Introduction to Cybersecurity by Cisco</h4>
          <a href="https://www.credly.com/badges/b09ad14a-87c5-4e2a-bf22-3d3b633d484f" target="_blank">Certificate</a>
        </div>
      </section>

            {/* Awards SECTION */}
      <section className="projects">
        <h3>Awards 🏆</h3>
        <div className="project-card">
          <h4>Deputy Principal's Award for Academic excellence </h4>
        </div>

        <div className="project-card">
          <h4>7th India Middle East Education Awards 2021</h4>
        </div>

         <div className="project-card">
          <h4>Bronze Award: Student Council Volunteering (50+ Hours) </h4>
        </div>

        <div className="project-card">
          <h4>First Runner Up- Creating Art With AI:  Google Developer Group on Campus  </h4>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <h3>Contact</h3>
        <p>
          GitHub: <a href="https://github.com/fzi2000" target="_blank">Link</a>
        </p>
        
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 Fathima | Built with React & Vite</p>
      </footer>
    </>
  )
}

export default App

