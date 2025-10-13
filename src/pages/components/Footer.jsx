export default function Footer() {
  return (
    <footer className="bg-white border-t text-center p-3 text-sm text-gray-500">
      © {new Date().getFullYear()} SSMS. All rights reserved.
    </footer>
  );
}