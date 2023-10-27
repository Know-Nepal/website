/**
 *
 */
export default function AppFooter() {
  return (
    <footer className="px-2 py-5 md:p-10">
      <div className="mb-5 w-full border-b border-gray-300" />

      <p className="text-center">
        © {new Date().getFullYear()} Know Nepal. All rights reserved.
      </p>
    </footer>
  );
}
