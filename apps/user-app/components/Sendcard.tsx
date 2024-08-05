"use client"
import { Button } from "../@/components/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[90vh] pt-40">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"  Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"  Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                            await p2pTransfer(number, Number(amount) * 100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}

// "use client";
// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/Wxq2ZgfcEzP
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../@/components/ui/card"
// import { Label } from "../../../@/components/ui/label"
// import { Input } from "../../../@/components/ui/input"
// import { Button } from "../../../@/components/ui/button"
// import { Center } from "@repo/ui/center";

// export default function Component() {
//   return (
//     <div className="h-[90vh]">
//         <div className="min-w-72 pt-2">
//             <Center>
//                 <Card className="w-full max-w-md">
//                 <CardHeader>
//                     <CardTitle>Send Money</CardTitle>
//                     <CardDescription>Transfer funds to your friends and family securely.</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                     <Center>
//                         <form className="space-y-4">
//                         <div className="space-y-2">
//                             <Label htmlFor="recipient">Recipient Phone Number</Label>
//                             <Input id="recipient" type="tel" placeholder="Enter recipient's phone number" />
//                         </div>
//                         <div className="space-y-2">
//                             <Label htmlFor="amount">Amount</Label>
//                             <Input id="amount" type="number" placeholder="Enter amount to send" />
//                         </div>
//                         <Button type="submit" className="w-full">
//                             Send
//                         </Button>
//                         </form>
//                     </Center>
//                 </CardContent>
//                 </Card>
//             </Center>
//         </div>
//     </div>
//   )
// }