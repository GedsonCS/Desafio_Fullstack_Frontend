import { useForm } from "react-hook-form";
import { TLoginData, schemaLogin } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { RegisterLoginContext } from "../../providers/RegistesLoginProvider";
import { Link } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(schemaLogin),
  });

  const { login } = useContext(RegisterLoginContext);
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Log in
            </h3>
            <p className="">
              Você ainda não tem uma conta?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                cadastre-se
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(login)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("email")}
            />
          </div>
          <div>
            <label className="font-medium">Senha</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              {...register("password")}
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Log in
          </button>
        </form>
        <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"></button>
      </div>
    </main>
  );
};
