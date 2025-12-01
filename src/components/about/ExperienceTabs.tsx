import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ExperienceCard from './ExperienceCard';

const ExperienceTabs = () => {
  return (
    <Tabs defaultValue="experience" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="certifications">Certifications</TabsTrigger>
      </TabsList>

      <TabsContent value="experience" className="space-y-6">
        <ExperienceCard
          title="COLLABERA DIGITAL | Full Stack Developer"
          subtitle="Pune | May 2024 – Present"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed and deployed highly performant frontend web applications in React and Redux resulting in a 60% rise in site traffic.</li>
            <li>Utilized agile methodologies to deliver high-quality software ahead of tight schedules.</li>
            <li>Reduced the load time and speed up the site visibility in browser by implementing lazy loading and SSR (Server side rendering) which caused in 35% increase audience engagement.</li>
            <li>Refactored legacy codebase reducing bundle size by 30%, which significantly improved application load times and user experience.</li>
            <li>Created backend API using Node and express with PostgreSQL as the Database.</li>
            <li>Responsible for designing Database logic, Field_Names in PostgreSQL with the Data engineer.</li>
            <li>Implemented TypeScript for type safety in the codebase, enhancing maintainability and reducing runtime errors.</li>
            <li>Utilized AWS services for deploying applications, ensuring scalability and reliability.</li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          title="GLOBANT PVT LTD. | Full-Stack Developer"
          subtitle="Pune | March 2022 – March 2024"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Orchestrated end-to-end development of dynamic web applications with a robust tech stack that includes HTML, CSS, JavaScript, React, Node.js, Express, SQL, and more.</li>
            <li>Collaborated seamlessly with multidisciplinary teams, blending design, functionality, and user experience to create engaging and intuitive interfaces.</li>
            <li>Engineered high-performance back-end systems using Node.js and Express, ensuring seamless data integration, security, and scalability.</li>
            <li>Leveraged databases such as SQL to manage application data and implement effective data retrieval and manipulation strategies.</li>
            <li>Utilized React to design and build reusable UI components, implementing dynamic rendering and efficient state management.</li>
            <li>Streamlined development processes through agile methodologies, resulting in accelerated delivery and increased efficiency.</li>
            <li>Optimized deployment and enhanced application reliability by leveraging cloud technologies such as AWS.</li>
            <li>Implemented TypeScript for type safety in the codebase, enhancing maintainability and reducing runtime errors.</li>
            <li>Utilized AWS services for deploying applications, ensuring scalability and reliability.</li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          title="JAVA R&D | MERN Developer"
          subtitle="Pune | Nov 2021 – March 2022"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>Led the development of multiple web applications from concept to deployment using the MERN stack.</li>
            <li>Implemented RESTful APIs and optimized server-side performance using Node.js and Express to handle large volumes of data.</li>
            <li>Collaborated with frontend developers to integrate dynamic user interfaces using Angular and React frameworks.</li>
            <li>Designed and maintained MongoDB and SQL databases, ensuring data integrity and security.</li>
            <li>Utilized Node.js and Express to engineer high-performance back-end systems, ensuring seamless data integration, security, and scalability.</li>
            <li>Conducted code reviews, performed testing, and resolved bugs to maintain high code quality and reliability.</li>
            <li>Leveraged cloud technologies such as AWS to optimize deployment and enhance application reliability.</li>
            <li>Implemented TypeScript for type safety in the codebase, enhancing maintainability and reducing runtime errors.</li>
            <li>Utilized AWS services for deploying applications, ensuring scalability and reliability.</li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          title="TCS | Associate Engineer"
          subtitle="Pune | Sept 2018 – Nov 2021"
        >
          <h4 className="font-medium">At Honeywell:</h4>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Developed front-end website architecture using HTML, CSS, JavaScript, and React.</li>
            <li>Developed back-end website applications using Node.js and Express.</li>
            <li>Created servers and databases for functionality using SQL.</li>
            <li>Ensured responsiveness of applications across various devices and screen sizes.</li>
            <li>Met both technical and consumer needs by implementing user-centered design principles.</li>
            <li>Resolved user issues through proactive communication and effective problem-solving.</li>
            <li>Troubleshot, debugged, and upgraded software to ensure optimal performance.</li>
            <li>Wrote technical documentation to maintain code quality and facilitate knowledge sharing.</li>
            <li>Implemented TypeScript for type safety in the codebase, enhancing maintainability and reducing runtime errors.</li>
            <li>Utilized AWS services for deploying applications, ensuring scalability and reliability.</li>
          </ul>

          <h4 className="font-medium">At Thomson Reuters:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>Drive and attend scrum meetings, ensuring efficient project management.</li>
            <li>Implement changes in the front-end of the application using React.</li>
            <li>Write scripts, modify store procedures, and other queries using SQL.</li>
            <li>Lead the development of JavaScript-based applications, ensuring high-quality software.</li>
            <li>Conduct unit testing and ensure code quality and reliability.</li>
            <li>Implement logics using Node.js and Express to ensure efficient and effective application functionality.</li>
          </ul>
        </ExperienceCard>
      </TabsContent>

      <TabsContent value="education" className="space-y-6">
        <ExperienceCard
          title="E&TC Bachelors Of Engineering"
          subtitle="SPPU | Aug 2014 - Jun 2018"
        >
          <p>Pune</p>
          <p>Percentage: 76%</p>
        </ExperienceCard>
        <ExperienceCard
          title="HSC"
          subtitle="KVS | Apr 2013 - May 2014"
        >
          <p>Pune</p>
          <p>Percentage: 85%</p>
        </ExperienceCard>
        <ExperienceCard
          title="SSC"
          subtitle="KVS | Apr 2011 - May 2012"
        >
          <p>Pune</p>
          <p>Percentage: 94%</p>
        </ExperienceCard>
      </TabsContent>

      <TabsContent value="certifications" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExperienceCard
            title="Agile Scrum Certification"
            subtitle="JPMorgan Chase & Co."
          >
            <a 
              href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._7yGCQHgHgkgiTsL2q_1693288388266_completion_certificate.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              View Certificate
            </a>
          </ExperienceCard>
          <ExperienceCard
            title="Figma UI UX Design"
            subtitle="Udemy"
          >
            <a 
              href="https://globant.udemy.com/?next=%2Fcertificate%2FUC-2c61121a-710e-460b-8521-ab944c79b712%2F" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              View Certificate
            </a>
          </ExperienceCard>
          <ExperienceCard
            title="Javascript"
            subtitle="Udemy"
          >
            <a 
              href="https://globant.udemy.com/?next=%2Fcertificate%2FUC-a1824948-527c-4e43-bd5e-6c1999d24ed8%2F" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              View Certificate
            </a>
          </ExperienceCard>
          <ExperienceCard
            title="SQL (Basic) Certificate"
            subtitle="HackerRank"
          >
            <a 
              href="https://www.hackerrank.com/certificates/95f43e242e0d" 
              target="_blank" 
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              View Certificate
            </a>
          </ExperienceCard>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ExperienceTabs;
