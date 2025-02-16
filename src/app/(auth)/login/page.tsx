"use client"

import { FormError } from "@/app/components/form_error"
import { login } from "@/auth/login"
import Link from "next/link"
import { useActionState } from "react"

export default function Login() {
    const [state, formAction, isLoading] = useActionState(login, { success: false })

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login!</h1>
                <p className="py-6">
                    Login to your profile to easily manage your saved lifts and exercises from the web!
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
                        <Link href="/register" className="label-text-alt link link-hover">Not a member? Register here!</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}