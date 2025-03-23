import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Vet Agent AI" }];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Welcome to Vet Agent AI
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
          Your AI assistant for veterinary tasks.
        </p>
        <Link
          to="/app"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors"
        >
          Go to App
        </Link>
      </div>
    </div>
  );
}
