import Link from "next/link"
import { Play, Mail, Phone, MapPin } from "lucide-react"
import { FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white border-t border-slate-800 dark:border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-cyan-400 rounded-full opacity-70 blur-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="./logo.jpeg" 
        alt="Custom Image"
        className="h-8 w-8" 
      />
    </div>
              </div>
              <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-cyan-500">
                1Play Global
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              Innovative media technology solutions for broadcast, film, and entertainment industries.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://www.facebook.com/1playsportsindia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="https://x.com/1playglobal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="https://www.instagram.com/1playglobal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://www.linkedin.com/company/1-play-sports-pte-ltd/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link 
                href="https://www.youtube.com/@1playsportsprivatelimited874" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-slate-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-purple-400 transition-colors">
                 Careers
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-slate-400">hello@1play.global</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 mt-0.5" />
                <span className="text-slate-400">+65 94554297</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5" />
                <span className="text-slate-400">
                  North Bridge Road. #19-08. High Street Centre.
                  <br />
                  Singapore 179094.
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter to receive the latest updates and news.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" className="bg-slate-800 dark:bg-slate-800 border-slate-700 dark:border-slate-700" />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
