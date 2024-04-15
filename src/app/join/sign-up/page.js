
import RegisterForm from "@/components/Auth/RegisterForm/RegisterForm"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className=" w-[70%]">
      <h3 className="mb-5">Crear cuenta</h3>
      <RegisterForm/>
      <div className="mt-3 text-center">
        <Link href="/join/sign-in">Atras</Link>
      </div>
    </div>
  )
}

export default SignUp