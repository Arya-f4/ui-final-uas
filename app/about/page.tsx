import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  // Mock team data
  const team = [
    { id: 1, name: "Jane Smith", role: "CEO & Founder" },
    { id: 2, name: "John Doe", role: "CTO" },
    { id: 3, name: "Alice Johnson", role: "Marketing Director" },
    { id: 4, name: "Bob Williams", role: "Product Manager" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="mb-4 text-4xl font-bold">About Us</h1>
            <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
              We&apos;re a passionate team dedicated to providing quality products and insightful content to our customers.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Founded in 2020, ACME has grown from a small startup to a thriving business with customers worldwide. Our
              mission is to deliver exceptional products and valuable content that enriches people&apos;s lives.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in sustainability, quality, and customer satisfaction. Every product we offer is carefully
              selected to meet our high standards, and every article we publish is crafted to provide real value to our
              readers.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=About+Us"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re committed to offering only the highest quality products and content to our customers.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our customers are at the heart of everything we do. We strive to exceed their expectations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re dedicated to sustainable practices that minimize our environmental impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={`/placeholder.svg?height=200&width=200&text=${member.name.split(" ")[0]}`}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold">Contact Us</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Address</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                123 Main Street
                <br />
                New York, NY 10001
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">info@acme.com</p>
              <p className="text-center text-gray-600 dark:text-gray-300">support@acme.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              <p className="text-center text-gray-600 dark:text-gray-300">+1 (555) 987-6543</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
