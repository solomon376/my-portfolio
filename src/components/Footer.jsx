import { FaGithub, FaLinkedin, FaTwitter,} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()}  Solomon Eze. Made with React.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
