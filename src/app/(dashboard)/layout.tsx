"use client";

import { useRouter } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
        const router = useRouter();

    return (
        <div className={`h-screen w-full overflow-x-hidden`}>
            {/* Header */}
            {/* <div className="fixed top-0 left-0 w-full z-50 flex justify-end h-10 bg-blue-200" onClick={() => router.push("/login")}>
                <div className="cursor-pointer">Logout</div>
            </div> */}
            {/* Sidebar */}
            {/* <div className="w-50 flex flex-col fixed top-10 left-0 h-full bg-blue-100 gap-10">

                <div className="cursor-pointer">Home</div>

                <div className="cursor-pointer">User</div>

                <div className="cursor-pointer">Task</div>
                
            </div> */}

            <div className="">{children}</div>
        </div>
    );
}
