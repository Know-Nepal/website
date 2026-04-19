export default function AppFooter() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Know Nepal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
