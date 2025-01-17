import { OnRampTransactions } from "../../../components/OnRampTransactions"
import { getServerSession } from "next-auth";
import { getName } from "../../lib/auth";
import { authOptions } from "../../lib/auth"
import prisma from "@repo/db/client"
import { AddMoney } from "../../../components/AddMoneyCard"
import { BalanceCard } from "../../../components/BalanceCard"


async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export  default async function() {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();

    return(
        <>
            <div className="flex p-3 flex-col">
                <div className="pr-2">
                    Your Transactions History
                </div>
                
                <div className="pt-2">
                    <OnRampTransactions transactions={transactions} />
                </div>
                
            </div>
        </>
    ) 
        
                
}
