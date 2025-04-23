export default function Footer() {
    return (
      <footer className="py-6 bg-gray-100 dark:bg-gray-800 mt-12 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Windi Saputra. All rights reserved.</p>
        </div>
      </footer>
    );
  }