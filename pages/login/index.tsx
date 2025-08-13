import Layout from "@/components/Layout";
import logo from "../../public/LogoSarmayek.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [mobile, setMobile] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // در اینجا می‌توان API برای ارسال کد OTP صدا زد
        router.push({
            pathname: "/verify",
            query: { mobile }
        });
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 relative">
                <div className="mt-10">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </div>
                <h2 className="mt-8 text-lg font-bold text-gray-800">ورود | ثبت‌نام</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    سلام! لطفاً شماره موبایل خود را وارد کنید
                </p>
                <form onSubmit={handleSubmit} className="mt-6 w-full max-w-sm">
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="شماره همراه"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800"
                        dir="rtl"
                    />
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition"
                    >
                        دریافت کد
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
