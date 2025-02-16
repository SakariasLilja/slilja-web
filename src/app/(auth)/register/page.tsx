"use client"

import { FormError } from "@/app/components/form_error"
import { register } from "@/auth/register"
import Link from "next/link"
import { useActionState } from "react"

export default function Register() {
    const [state, formAction, isLoading] = useActionState(register, {success: false})

    return(
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register!</h1>
                <p className="py-6">
                    Registering allows you to store GymLift data on multiple devices, ensuring that your 
                    data will not be lost.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" action={formAction}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" id="email" className="input input-bordered" required />
                    <FormError errors={state.errors?.email} />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" id="password" className="input input-bordered" required />
                    <FormError errors={state.errors?.password} />
                    <label className="label">
                        <Link href="/login" className="label-text-alt link link-hover">Already registered? Login here!</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}