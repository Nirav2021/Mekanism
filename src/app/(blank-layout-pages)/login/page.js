"use client";

import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();

    return (
        <div>
            <button
                onClick={() => router.push("/dashboard")}
                className="cursor-pointer"
            >
                You are loggged out. Click to login.
            </button>
        </div>
    );
};

export default LoginPage;
