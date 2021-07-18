import { h } from "preact";

function Footer() {
  return (
    <footer className="text-center text-amber-amber11">
      &copy; {new Date().getFullYear()} Frank Stallone III
      <small className="block text-amber-amber10">
        🚀 Happily built by Astro
      </small>
    </footer>
  );
}
export default Footer;
