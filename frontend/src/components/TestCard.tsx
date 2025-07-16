import { Link } from "react-router"

const TestCard = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm light:bg-gray-800 light:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">{title.slice(0, 20) + "..."}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100) + "..."}</p>
            <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#fb5d84] hover:bg-[#f74f79] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-200">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </Link>
        </div>
    )
}

export default TestCard