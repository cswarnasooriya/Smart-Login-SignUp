"use client"
import React from "react"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMesssage,
   
}from  "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from 'next/link';

const signUpschema = z.object({
    name:z.string().min(2, "name should have atleast 2 characters.").max(50, "Name should not exceed 50 characters.").refine((value)=>/^[a-zA-Z]+[-'s]?[a-zA-Z]+$/.test(value), 'Name should contain only alphabets.'),

    email: z.string().email("Email must be valid."),

    password: z.string().min(6,"Passsword should have atleast 6 charcteers."),

    confirmPassword: z.string().min(6,"Password shouls have atleast 6 characters.")

}).refine((data) =>data.password===data.confirmPassword,{
    message:"Password does not match",
    path: ["confirmPassword"],

});


const page = () => {

    const form = useForm <z.infer<typeof signUpschema>>({
        resolver: zodResolver(signUpschema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            confirmPassword:""
        },
    })

    function onSubmit(values: z.infer<typeof signUpschema>) {
        console.log(values)
    }
        
  return (
    <div className="signUpWrapper">
        <div className="formWrapper">
            <div className="left">
                <h3 className="title">Welcome Back!</h3>
                <p>To keep connected with us please login with your personal info</p>
                <Link href={"/signup"}>
                    <Button
                        className="border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-100 transition-colors border rounded-full px-8">
                            Sign In 

                    </Button>
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default page
