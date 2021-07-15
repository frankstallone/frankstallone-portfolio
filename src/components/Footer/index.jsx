import { h } from "preact";

function Footer() {
  return (
    <footer className="text-gray-100 text-center">
      &copy; {new Date().getFullYear()} Frank Stallone
      <small className="block">🚀 Built by Astro</small>
    </footer>
  );
}
export default Footer;
