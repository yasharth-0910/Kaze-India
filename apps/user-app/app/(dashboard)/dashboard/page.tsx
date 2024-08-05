import { getName } from "../../lib/auth";
import { authOptions } from "../../lib/auth";

export default function DashboardPage() {
    const name = getName(authOptions);
    return (
        <>
            <div className="flex p-3">
                Welcome {name}
            </div>
        </>
    );
}
