import BentoCard from './BentoCard';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-6">
      <h2 className="text-4xl font-bold">Let's Work Together</h2>

      <p className="mt-6 text-zinc-400">
        I'm currently open to full-time/part-time remote opportunities,
        freelance projects, and contract work. If you're looking for a React or
        React Native developer, I'd love to hear from you.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href="mailto:markchristopherdauz@gmail.com"
          className="flex items-center gap-3 text-zinc-300 hover:text-blue-400"
        >
          <FaEnvelope />
          markchristopherdauz@gmail.com
        </a>

        <a
          href="tel:+639123456789"
          className="flex items-center gap-3 text-zinc-300 hover:text-blue-400"
        >
          <FaPhone />
          +63 995 431 5404
        </a>

        <a
          href="https://www.linkedin.com/in/mark-christopher-dauz-6664a531/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-zinc-300 hover:text-blue-400"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="https://github.com/markdauz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-zinc-300 hover:text-blue-400"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      <a
        href="mailto:mailto:markchristopherdauz@gmail.com"
        className="
          mt-10
          inline-flex
          rounded-2xl
          bg-blue-600
          px-6
          py-4
          font-semibold
          transition-all
          hover:bg-blue-500
        "
      >
        Send an Email
      </a>
    </BentoCard>
  );
}

export default ContactCard;
