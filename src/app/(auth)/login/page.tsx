import GoogleIcon from "@/components/icons/google-icon"
import { LoginForm } from "@/components/ui/login-form"

export default function LoginPage() {
	return (
		<section className="flex flex-col items-center rounded-lg space-y-4">
			<span className="font-semibold">Inicia Sesión</span>
			<button
				type="button"
				className="inline-flex justify-center gap-x-2 items-center py-2 px-3 rounded-lg border-neutral-200 border w-full hover:bg-neutral-200 transition"
			>
				<GoogleIcon />
				Inicia sesión con Google
			</button>

			<hr className="border-neutral-200 w-full" />

			<LoginForm />
		</section>
	)
}
