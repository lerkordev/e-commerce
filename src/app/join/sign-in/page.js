import LoginForm from "@/components/Auth/LoginForm/LoginForm"
import Link from "next/link"


const SignIn = () => {
  return (
    <>
    <div className=" w-[70%]">
    <h3 className=" mb-5">SignIn</h3>
    <LoginForm/>
    <div className=" mt-3">
    <Link href="/join/sign-up">
      ¿No tienes una cuenta?
    </Link>
    </div>
    </div>
    </>
  )
}

export default SignIn