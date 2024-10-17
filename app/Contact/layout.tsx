import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-yellow-200">
      {/* Header Section */}
      <header className="bg-blue-400 shadow-md py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white-500">Contact</h2>
        </div>
      </header>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4 text-lg">
          <a
            href="mailto:m.tayyab1263@gmail.com"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FaEnvelope className="mr-2" />
            Send me an email
          </a>
          <a
            href="tel:0342-1018093"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FaPhone className="mr-2" />
            Call me
          </a>
          <a
            href="https://github.com/Moh-Tayyab"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FaGithub className="mr-2" />
            Follow on GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ch-muhammad-tayyab"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin className="mr-2" />
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400">
        <p>&copy; 2024 Muhammad Tayyab. All rights reserved.</p>
      </footer>
    </div>
  );
}
