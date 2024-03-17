"use client"
import { Pane, Card, TextInput, Button, ArrowRightIcon, toaster } from "evergreen-ui";
import useInput from "../../hooks/useInput"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginBox() {
    const router = useRouter();
    const email = useInput("");
    const password = useInput("");
    const users = {
        player: 'jugador45@gmail.com',
        scout:'scout32@gmail.com'
    }

    const loginForm = () => {

        if(password.value != '123456' && email.value != users.player && email.value != users.scout){
            toaster.danger('Usuario Invalido')
            return
        }

        if(email.value == users.player){
            router.push('/professionals');
        }
        if(email.value == users.scout){
            router.push('/scout');
        }
    }
    
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pane className="max-size" display="flex" alignItems="center" justifyContent="center">
        <Card className="flex flex-col" width={400} height={200} background="gray100" alignItems="center" justifyContent="center" elevation={2}>
          <h2 className="mb-2 font-semibold">Login</h2>
            <TextInput 
                className="mb-2" 
                name="mail" 
                placeholder="Correo" 
                value={email.value} 
                onChange={email.onChange}
            />
            <TextInput
                className="mb-2" 
                type="password" 
                name="mail" 
                placeholder="Contraseña"  
                value={password.value}
                onChange={password.onChange}
            />
          <Button width={280} appearance="primary" background="green800" iconAfter={ArrowRightIcon} onClick={loginForm}>
            Entrar
          </Button>
        </Card>
      </Pane>
  );
}