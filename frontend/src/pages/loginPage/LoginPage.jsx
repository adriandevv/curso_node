import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";
const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <Card className="w-[800px] h-[500px] p-6 shadow-lg flex  justify-center">
                <CardContent className="h-full w-full">
                    <main className="h-full w-full flex justify-center items-center gap-6">
                        <div className="w-full">
                            <h1 className="text-4xl font-bold">Inicio de sesion</h1>
                            <h3>ingresa para continuar</h3>
                        </div>
                        <div className=" h-full w-full flex items-center justify-center">
                            <form action="">
                                <div className="flex justify-center">
                                   <UserRound className="size-16 text-white bg-blue-600 rounded-full" fill="white" stroke="none" />
                                </div>
                                <Input className="border  mt-15 p-4" type="email" placeholder="Correo electrónico" />
                                <Input className="border  mt-10 p-4" type="password" placeholder="Contraseña" />
                                <Button className="mt-15 w-full rounded-full">
                                    Iniciar sesión
                                </Button>
                            </form>
                        </div>
                    </main>
                </CardContent>
            </Card>

        </div>
    )
}


export default LoginPage;