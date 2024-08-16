import { useNavigate, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  return (
    <div className="flex flex-col justify-center text-center items-center w-full mx-auto p-2 h-screen ">
      <h2 className="font-bold">Opps !! Something went wrong-</h2>
      <h1 className="font-semibold">
        {error.status} : {error.statusText}
      </h1>
      <button
        onClick={() => navigate("./login")}
        className="bg-black text-white font-extrabold p-2 mt-2 rounded-md shadow-md"
      >
        Back to Previous Page
      </button>
    </div>
  );
}
export default ErrorBoundary;
