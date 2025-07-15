const ShimmerCard = () => {
    return (
        <div
            role="status"
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse"
        >
            {/* Title shimmer */}
            <div className="mb-2">
                <div className="h-8 bg-gray-300 rounded w-3/4 mb-1"></div>
            </div>

            {/* Description shimmer - multiple lines */}
            <div className="mb-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Button shimmer */}
            <div className="inline-flex items-center px-3 py-2 bg-gray-300 rounded-lg">
                <div className="h-4 bg-gray-400 rounded w-20"></div>
                <div className="w-3.5 h-3.5 bg-gray-400 rounded ms-2"></div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>
    );
};

export default ShimmerCard;

//dark mode
// const ShimmerCard = () => {
//     return (
//         <div
//             role="status"
//             className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm animate-pulse dark:bg-gray-800 dark:border-gray-700"
//         >
//             {/* Title shimmer */}
//             <div className="mb-2">
//                 <div className="h-8 bg-gray-300 rounded dark:bg-gray-700 w-3/4 mb-1"></div>
//             </div>

//             {/* Description shimmer - multiple lines */}
//             <div className="mb-3 space-y-2">
//                 <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-full"></div>
//                 <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-full"></div>
//                 <div className="h-4 bg-gray-200 rounded dark:bg-gray-600 w-2/3"></div>
//             </div>

//             {/* Button shimmer */}
//             <div className="inline-flex items-center px-3 py-2 bg-gray-300 rounded-lg dark:bg-gray-600">
//                 <div className="h-4 bg-gray-400 rounded dark:bg-gray-500 w-20"></div>
//                 <div className="w-3.5 h-3.5 bg-gray-400 rounded dark:bg-gray-500 ms-2"></div>
//             </div>

//             <span className="sr-only">Loading...</span>
//         </div>
//     );
// };

