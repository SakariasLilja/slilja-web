import { FC } from "react"

export const FormError: FC<{ errors?: string[] }> = ({ errors }) => {
    if (!errors?.length) return null

    return (
        <div className="p-1">
            {errors.map((err) => {
                return (
                    <p className="text-red-400 list-item" key={err}>
                        {err}
                    </p>
                )
            })}
        </div>
    )
}