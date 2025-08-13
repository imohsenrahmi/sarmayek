import Layout from "@/components/Layout";
import Image from "next/image";
import Logo from "../../public/logo/LogoSarmayek.png";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { FiEdit, FiRefreshCw } from "react-icons/fi";

const Verify = () => {
    const router = useRouter();
    const { mobile } = router.query;

    const [code, setCode] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const inputsRef = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (e, index) => {
        const val = e.target.value.replace(/[^0-9]/g, "");
        if (!val) return;
        const newCode = [...code];
        newCode[index] = val[0];
        setCode(newCode);
        if (index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleBackspace = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`کد وارد شده: ${code.join("")} برای شماره ${mobile}`);
    };

    const resendCode = () => {
        setTimer(30);
        alert(`کد جدید برای شماره ${mobile} ارسال شد!`);
    };

    const editMobile = () => {
        router.push("/login");
    };

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 relative">
                <div className="mt-10">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="object-contain"
                        priority
                    />
                </div>

                <h2 className="mt-6 text-lg font-bold text-gray-800 text-center">تایید شماره موبایل</h2>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    لطفاً کد ۴ رقمی ارسال شده به {mobile} را وارد کنید
                </p>

                <form onSubmit={handleSubmit} className="mt-6 w-full max-w-sm flex justify-center space-x-2">
                    {code.map((num, idx) => (
                        <input
                            key={idx}
                            type="text"
                            value={num}
                            onChange={(e) => handleChange(e, idx)}
                            onKeyDown={(e) => handleBackspace(e, idx)}
                            maxLength={1}
                            ref={(el) => (inputsRef.current[idx] = el)}
                            className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                        />
                    ))}
                </form>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-6 w-full max-w-sm bg-blue-800 text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition"
                >
                    تایید
                </button>

                <div className="mt-4 flex items-center justify-center space-x-6">
                    <button onClick={editMobile} className="flex items-center text-sm text-blue-800 hover:underline">
                        <FiEdit className="ml-1" /> ویرایش شماره
                    </button>
                    {timer > 0 ? (
                        <span className="text-gray-500 text-sm">ارسال مجدد کد در {timer} ثانیه</span>
                    ) : (
                        <button onClick={resendCode} className="flex items-center text-sm text-blue-800 hover:underline">
                            <FiRefreshCw className="ml-1" /> ارسال مجدد کد
                        </button>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Verify;
