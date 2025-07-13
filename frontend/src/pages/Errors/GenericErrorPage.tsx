import { Link } from "react-router";

const GenericErrorPage = ({ statusCode, message, redirectLink }: { statusCode: number, message: string, redirectLink: string }) => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#fb6f92]">{statusCode}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{message}</h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to={redirectLink} className="rounded-md bg-[#fb6f92] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[rgb(248,100,127)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{statusCode === 401 ? 'Sign In' : 'Go back home'}</Link>
          <Link to={"/contact"} className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
    </main>
  );
}

export default GenericErrorPage;
