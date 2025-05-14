import { Mail, MapPin, Phone, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Have questions about our vehicles or services? We&apos;re here to help. Reach out to our team using any of the
          methods below.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    123 Automotive Blvd
                    <br />
                    Car City, CC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">(555) 123-4567</p>
                  <p className="text-gray-600 dark:text-gray-400">(555) 765-4321 (Sales)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">info@autoelite.com</p>
                  <p className="text-gray-600 dark:text-gray-400">sales@autoelite.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <div className="mt-1 space-y-1 text-gray-600 dark:text-gray-400">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold">Connect With Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-100 p-3 text-gray-600 transition-colors hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Location</h2>
            <div className="h-[300px] overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
              <div className="flex h-full items-center justify-center">
                <MapPin className="mr-2 h-6 w-6" />
                <span>Interactive map would be displayed here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="(555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiry-type">Inquiry Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Inquiry</SelectItem>
                  <SelectItem value="service">Service Appointment</SelectItem>
                  <SelectItem value="test-drive">Test Drive Request</SelectItem>
                  <SelectItem value="financing">Financing Question</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
            </div>

            <div className="flex items-center space-x-2">
              <input title="privacy" type="checkbox" id="privacy-policy" className="h-4 w-4 rounded border-gray-300" />
              <Label htmlFor="privacy-policy" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>
              </Label>
            </div>

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-medium">What are your financing options?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We offer a variety of financing options including loans, leases, and special financing programs for
              first-time buyers. Our finance team works with multiple lenders to find the best rates for your situation.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-medium">Do you offer test drives?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, we encourage test drives! You can schedule a test drive through our website, by phone, or by visiting
              our dealership. We recommend scheduling in advance for specific models.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-medium">What warranty options do you provide?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All our new vehicles come with manufacturer warranties. We also offer extended warranty options and
              certified pre-owned programs with additional coverage. Our team can explain all warranty details during
              your visit.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-2 text-lg font-medium">Can I trade in my current vehicle?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We accept trade-ins and offer competitive values. You can get an estimated trade-in value through our
              website or bring your vehicle to our dealership for an in-person appraisal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
