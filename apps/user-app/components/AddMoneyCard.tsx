"use client"
import { Button } from "../@/components/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnrampTransaction } from "../app/lib/actions/createOnrampTransaction";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
},{
    name: "ICICI Bank",
    redirectUrl: "https://www.icicibank.com/"
},{
    name: "SBI Bank",
    redirectUrl: "https://www.onlinesbi.com/"
},{
    name: "Kotak Bank",
    redirectUrl: "https://www.kotak.com/"
},{
    name: "Yes Bank",
    redirectUrl: "https://www.yesbank.in/"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [value, setValue] = useState(0)
    return <Card title="Add Money">
    <div className="w-full">
        <TextInput label={"Amount"} placeholder={"  Amount"} onChange={(val) => {
            setValue(Number(val))
        }} />
        <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "");
            setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "");
        }} options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button  onClick={async () => {
                await createOnrampTransaction(provider, value)
                window.location.href = redirectUrl || "";
            }}>
            Add Money
            </Button>
        </div>
    </div>
</Card>
}