import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "./lib/auth";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar"
import Link from "next/link";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } 

  return(
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 flex items-center justify-center">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
                The Secure Way to Pay
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Send money, make purchases, and manage your finances with Kaze India trusted and secure platform.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  href="/api/auth/signin"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}                >
                  Sign Up
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Secure and Reliable Payments</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kaze India is the most trusted and secure payment platform, providing industry-leading security and fraud
                protection.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <LockIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  All your payments are encrypted and protected with advanced security measures.
                </p>
              </div>
              <div className="grid gap-1">
                <GaugeIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Fast Transfers</h3>
                <p className="text-muted-foreground">
                  Experience lightning-fast money transfers and real-time updates on your transactions.
                </p>
              </div>
              <div className="grid gap-1">
                <PieChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Comprehensive Insights</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights into your payment history and financial activities with detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Millions</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kaze India is the world's leading payment platform, trusted by individuals and businesses worldwide.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-6">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src= {"nike.svg"} //
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={"apple.svg"}
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={"amazon.svg"}
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={"eth.svg"}
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={"uber.svg"}
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <img
                    src={"jag.svg"}
                    width="140"
                    height="70"
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Manage Your Finances with Ease</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kaze India provides a secure and convenient way to send, receive, and manage your money, all in one place.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <WalletIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Digital Wallet</h3>
                <p className="text-muted-foreground">
                  Store your payment methods securely and access them anywhere with your Kaze India digital wallet.
                </p>
              </div>
              <div className="grid gap-1">
                <DollarSignIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Send and Receive</h3>
                <p className="text-muted-foreground">
                  Easily send and receive money from friends, family, and businesses with Kaze India fast and reliable
                  platform.
                </p>
              </div>
              <div className="grid gap-1">
                <PieChartIcon className="h-8 w-8 text-primary" />
                <h3 className="text-lg font-bold">Financial Insights</h3>
                <p className="text-muted-foreground">
                  Gain a comprehensive view of your financial activities and transactions with detailed reporting and
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with Kaze India.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                <div className="mx-auto flex w-full flex-col items-start justify-center gap-4 p-8">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>Hs</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">Himanshu Singh</h4>
                      <p className="text-muted-foreground">Individual User</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Kaze India has been a game-changer for my personal finances. The platform is user-friendly, secure,
                    and provides valuable insights to help me manage my money, Thank you Yasharth!"
                  </p>
                </div>
                <div className="mx-auto flex w-full flex-col items-start justify-center gap-4 p-8">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>Ya</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold">Yash Aggarwal</h4>
                      <p className="text-muted-foreground">Business Owner</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "As a business owner, I rely on Kaze India to handle my transactions securely and efficiently.
                    The platform's analytics have been invaluable in helping me manage my finances."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Send Money
            </Link>
            <Link href="#" prefetch={false}>
              Receive Money
            </Link>
            <Link href="#" prefetch={false}>
              Business
            </Link>
            <Link href="#" prefetch={false}>
              Wallet
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Help Center
            </Link>
            <Link href="#" prefetch={false}>
              Customer Support
            </Link>
            <Link href="#" prefetch={false}>
              Security
            </Link>
            <Link href="#" prefetch={false}>
              Fees
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function GaugeIcon(prop:any) {
  return (
    <svg
      {...prop}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function LockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function PieChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}


function WalletIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

