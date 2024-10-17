import { FloatingNav } from "@/components/ui/FloatingNav";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
          <p className="text-lg text-gray-600">Discover my expertise and abilities</p>
        </div>
      </header>

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
        {children}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-center text-gray-400">
        <p>&copy; 2024 Muhammad Tayyab. All rights reserved.</p>
      </footer>
    </div>
  );
}
