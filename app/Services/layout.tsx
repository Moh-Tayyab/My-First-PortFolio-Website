import { FloatingNav } from "@/components/ui/FloatingNav";

export const metadata = {
  title: 'My Portfolio',
  description: 'A Next.js portfolio app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">My Portfolio</h1>
          <p className="text-lg text-gray-600">Showcasing my work and projects</p>
        </div>
      </header>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400">
        <p>&copy; 2024 Muhammad Tayyab. All rights reserved.</p>
      </footer>
    </div>
  );
}
