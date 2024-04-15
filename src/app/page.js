import { AuthProvider } from "@/contexts/AuthContext";
import Image from "next/image";

export default function Home() {
  return (
    <AuthProvider>
    Home
    </AuthProvider>
  );
}
