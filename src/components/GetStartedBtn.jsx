import { FaArrowRight, FaRocket } from "react-icons/fa6";

const GetStartedButton = () => {
    return (
        <button className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-content shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 sm:px-7 sm:py-3 sm:text-base cursor-pointer">
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"></span>

            <FaRocket className="relative z-10 text-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12 sm:text-md" />

            <span className="relative z-10 whitespace-nowrap">Get Started</span>

            <FaArrowRight className="relative z-10 text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45 sm:text-lg" />
        </button>
    );
};

export default GetStartedButton;