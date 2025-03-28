import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Phone, MapPin, Calendar, Building, GraduationCap, Award, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-500 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Sunil Kurthakoti</h1>
            <p className="text-xl text-gray-300 mb-4">AWS Certified Solutions Architect Associate</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300 mb-4">
              <a href="tel:+918095327855" className="flex items-center gap-2 hover:text-blue-400">
                <Phone className="w-4 h-4" />
                <span>+91 8095327855</span>
              </a>
              <a href="mailto:sunilkurthakoti06@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
                <Mail className="w-4 h-4" />
                <span>sunilkurthakoti06@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://github.com/sunilkurthakoti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sunilkurthakoti" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed">
            AWS Certified Solutions Architect Associate with 6 months of hands-on experience in AWS Cloud, specializing in
            infrastructure automation, cloud security, and cost optimization. Skilled in AWS services and proficient in Docker,
            Kubernetes, Terraform, and CI/CD pipelines to drive scalability, high availability, and efficiency. Seeking an entry-level Cloud
            Engineer or DevOps role to optimize, automate, and enhance cloud performance.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Cloud Intern</h3>
                <p className="text-gray-400">Quantum Craft Innovation - Bangalore</p>
              </div>
              <div className="text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Jul 2024 - Dec 2024
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Managed AWS services, including EC2, S3, IAM, and CloudWatch, to support cloud infrastructure and operations.</li>
              <li>Monitored and optimized system performance, ensuring high availability and cost efficiency.</li>
              <li>Implemented IAM policies, roles, and access controls to enhance security and compliance.</li>
              <li>Collaborated with cross-functional teams to troubleshoot and resolve cloud-related issues.</li>
              <li>Documented cloud configurations, security policies, and best practices to improve operational efficiency.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Trainee Engineer (Maintenance)</h3>
                <p className="text-gray-400">Mantech serv - Coimbatore</p>
              </div>
              <div className="text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Aug 2022 - Nov 2023
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Executed maintenance activities, including inspections, repairs, and system overhauls.</li>
              <li>Conducted equipment audits and ensured adherence to industry safety standards.</li>
              <li>Managed tools and spare parts inventory, optimizing resource utilization.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                AWS (EC2, S3, RDS, VPC, IAM, ELB)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Docker, Kubernetes, Terraform
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Jenkins, Git
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Programming & Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Python, MySQL
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Prometheus, Grafana
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                CI/CD Pipelines
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60"
              alt="VPC Peering Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">VPC Peering Across Regions</h3>
              <p className="text-gray-300 mb-4">
                Designed and configured cross-region VPC peering in AWS for seamless communication between VPCs while optimizing costs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">AWS VPC</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">EC2</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60"
              alt="Web Application Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">3-Tier Web Application</h3>
              <p className="text-gray-300 mb-4">
                Developed a robust 3-tier web application architecture on AWS with optimized traffic flow and enhanced availability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">EC2</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">RDS</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">S3</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60"
              alt="Kubernetes Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">K8s Kind Voting App</h3>
              <p className="text-gray-300 mb-4">
                Deployed a Kubernetes-based microservices architecture using Kind and implemented Argo CD for GitOps.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">Kubernetes</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-sm">Argo CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">B.Tech in Robotics and Automation</h4>
                  <p className="text-gray-400">Jain University, Bangalore</p>
                  <p className="text-gray-400">Jun 2019 – May 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold">Diploma in Mechatronics</h4>
                  <p className="text-gray-400">Nettur Technical Training Foundation, Dharwad</p>
                  <p className="text-gray-400">Jun 2013 – May 2016</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Certifications
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">AWS Certified Solutions Architect Associate</h4>
                  <p className="text-gray-400">Amazon Web Services</p>
                  <p className="text-gray-400">May 2024 - May 2027</p>
                  <p className="text-gray-400">Cert no: e3da2c0b49894929921fd5d07a7e432e</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                Additional Training
              </h3>
              <div>
                <h4 className="font-semibold">AWS DevOps</h4>
                <p className="text-gray-400">Pumo Technovasion, Bangalore</p>
                <p className="text-gray-400">Jan 2024 - Jun 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Sunil Kurthakoti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;