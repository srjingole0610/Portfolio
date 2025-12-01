import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Suraj_Ingole_CV.pdf';
  link.setAttribute('download', 'Suraj_Ingole_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative flex items-center justify-center">
                <Avatar className="w-64 h-64 border-4 border-primary/10 rounded-full overflow-hidden">
                  <AvatarImage 
                    src="/images\ProfileImage.png"
                    alt="Suraj Ingole" 
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback>SI</AvatarFallback>
                </Avatar>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Suraj Ingole</h1>
                <p className="text-lg text-muted-foreground">
                  I'm a full-stack developer with expertise in JavaScript, React, Angular, Node.js, and Express. With over 6.5+ years of professional experience, I've worked on projects ranging from small business websites to large enterprise applications.
                </p>
                <p className="text-lg text-muted-foreground">
                  My approach to development is centered around creating high-performance, user-friendly applications that deliver exceptional experiences. I'm passionate about optimizing performance and ensuring applications are scalable, secure, and maintainable.
                </p>
                <div className="pt-4">
                <Button onClick={handleDownload}>
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-24">
            <FadeIn direction="up">
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="certifications">Certifications</TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>COLLABERA DIGITAL | Full Stack Developer</CardTitle>
                      <CardDescription>Pune | May 2024 – Present</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>GLOBANT PVT LTD. | Full-Stack Developer</CardTitle>
                      <CardDescription>Pune | March 2022 – March 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>JAVA R&D | MERN Developer</CardTitle>
                      <CardDescription>Pune | Nov 2021 – March 2022</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>TCS | Associate Engineer</CardTitle>
                      <CardDescription>Pune | Sept 2018 – Nov 2021</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>E&TC Bachelors Of Engineering</CardTitle>
                      <CardDescription>SPPU | Aug 2014 - Jun 2018</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Pune</p>
                      <p>Percentage: 76%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>HSC</CardTitle>
                      <CardDescription>KVS | Apr 2013 - May 2014</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Pune</p>
                      <p>Percentage: 85%</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>SSC</CardTitle>
                      <CardDescription>KVS | Apr 2011 - May 2012</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Pune</p>
                      <p>Percentage: 94%</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="certifications" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Agile Scrum Certification</CardTitle>
                        <CardDescription>JPMorgan Chase & Co.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._7yGCQHgHgkgiTsL2q_1693288388266_completion_certificate.pdf" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Certificate
                        </a>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Figma UI UX Design</CardTitle>
                        <CardDescription>Udemy</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://globant.udemy.com/?next=%2Fcertificate%2FUC-2c61121a-710e-460b-8521-ab944c79b712%2F" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Certificate
                        </a>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Javascript</CardTitle>
                        <CardDescription>Udemy</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://globant.udemy.com/?next=%2Fcertificate%2FUC-a1824948-527c-4e43-bd5e-6c1999d24ed8%2F" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Certificate
                        </a>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>SQL (Basic) Certificate</CardTitle>
                        <CardDescription>HackerRank</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a 
                          href="https://www.hackerrank.com/certificates/95f43e242e0d" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Certificate
                        </a>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
