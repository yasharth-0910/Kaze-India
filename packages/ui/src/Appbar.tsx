import { Button } from "./button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../../../apps/user-app/@/components/ui/avatar"

interface AppbarProps {
    user?: {
        name?: string | null;
    },  
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return (
        <div className="pt-2">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b  pb-2">
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <Link href="#" className="flex items-center justify-center" prefetch={false}>
                        <WalletIcon className="h-6 w-6" />
                        <span className="sr-only pl-3">Kaze India</span>
                    </Link>
                </div>
                <div className="flex items-center gap-6 sm:gap-6">
                    <Link href="./" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Send Money
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Receive Money
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Business
                    </Link>
                    <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 mr-4" prefetch={false}>
                        Merchant Login
                    </Link>
                </div>
            </div>
        </header>
        </div>
    );
}

function WalletIcon(props: any) {
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
    );
}
