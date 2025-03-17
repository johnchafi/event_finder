import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

 export default function Footer() {
  return (
    <footer className="wrapper w-full py-12 bg-black my-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <Link
            href="https://instagram.com"
            className="text-gray-400 hover:text-primary-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="text-gray-400 hover:text-primary-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-gray-400 hover:text-primary-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <p className="text-gray-400">© 2024 Eventhub</p>

        <div className="flex items-center gap-4 text-gray-400">
          <Link href="/terms" className="hover:text-primary-800 transition-colors">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy" className="hover:text-primary-800 transition-colors">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
