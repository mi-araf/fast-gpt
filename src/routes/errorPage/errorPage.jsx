// src/pages/ErrorPage.jsx

import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-base-200 text-base-content flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-100 shadow-sm mb-6 hover:scale-105 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-sm font-medium">Page not found</span>
                </div>

                {/* Big 404 */}
                <h1 className="text-8xl md:text-9xl font-black tracking-tight bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                    404
                </h1>

                {/* Text */}
                <h2 className="mt-6 text-2xl md:text-4xl font-bold">
                    Oops! You found a lost page.
                </h2>

                <p className="mt-4 text-base md:text-lg opacity-70 max-w-md mx-auto">
                    The page you are looking for does not exist, was moved, or the link is broken.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="btn btn-primary rounded-full px-8 hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-outline rounded-full px-8 hover:scale-105 hover:bg-base-300 transition-all duration-300"
                    >
                        Go Back
                    </button>
                </div>

                {/* Decorative card */}
                <div className="mt-12 mx-auto max-w-sm">
                    <div className="card bg-base-100 shadow-xl border border-base-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                        <div className="card-body">
                            <div className="text-5xl mb-2">🚀</div>
                            <p className="text-sm opacity-70">
                                Looks like this route flew away.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;