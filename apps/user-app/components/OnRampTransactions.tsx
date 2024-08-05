import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({
    transactions
}: {
    transactions: {
        time: Date, // i want proper time type here, like  14th Aug 1:48 pm 
        amount: number,
        // TODO: Can the type of `status` be more specific?
        status: string,
        provider: string
    }[]
}) => {
    const formatTransactionTime = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return date.toLocaleString('en-US', options);
    };
    
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {formatTransactionTime(t.time)}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + ₹ {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}