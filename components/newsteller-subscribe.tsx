"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useCreateNotificationSubscriber } from "@/hooks/use-notification-subscriber";
import Image from "next/image";

export default function NotificationSubscribe() {
	// Placeholder local state to mimic a future subscription hook
	const [email, setEmail] = useState("");
	const [isPending, setIsPending] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { mutateAsync: createNotificationSubscriber } =
		useCreateNotificationSubscriber();

	const isDisabled = useMemo(
		() => isPending || isSuccess,
		[isPending, isSuccess]
	);

	const handleSubmit = useCallback(
		async (evt: FormEvent<HTMLFormElement>) => {
			evt.preventDefault();
			setError(null);

			const trimmed = email.trim();
			if (!trimmed) {
				setError("Please enter a valid email.");
				return;
			}

			// Basic email pattern; you can tighten this later
			const basicEmailPattern = /.+@.+\..+/;
			if (!basicEmailPattern.test(trimmed)) {
				setError("Please enter a valid email.");
				return;
			}

			setIsPending(true);
			try {
				await createNotificationSubscriber({
					email: trimmed,
				});
				setIsSuccess(true);
				// Clear the field after successful subscription
				setEmail("");
			} catch (_err) {
				setError("Subscription failed. Please try again.");
			} finally {
				setIsPending(false);
			}
		},
		[email]
	);

	const reset = useCallback(() => {
		setIsSuccess(false);
		setError(null);
		setEmail("");
	}, []);

	return (
		<div className="w-full">
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<h3 className="text-lg font-semibold">Join a Newsletter</h3>
				</div>

				<div className="space-y-2">
					<Label htmlFor="newsletter-email" className="text-muted-foreground">
						Your Email
					</Label>

					<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<Input
							id="newsletter-email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter Your Email"
							disabled={isDisabled}
							className="h-12 rounded-2xl bg-muted/30 text-[15px] placeholder:italic placeholder:!text-[#20202081] dark:placeholder:!text-[#ffffff81]"
							aria-invalid={!!error}
							aria-describedby={error ? "newsletter-email-error" : undefined}
						/>

						<Button
							type="submit"
							disabled={isDisabled}
							className="cursor-pointer relative h-12 rounded-2xl px-7 text-[15px] font-medium text-black transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 border-2 border-zinc-300 bg-gradient-to-bl from-white to-zinc-200 dark:text-white dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900"
						>
							<span
								className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/0 dark:ring-white/0"
								aria-hidden
							/>
							{isPending
								? "Submitting..."
								: isSuccess
								? "Subscribed"
								: "Submit"}
						</Button>
					</div>

					{error ? (
						<p id="newsletter-email-error" className="text-sm text-destructive">
							{error}
						</p>
					) : null}

					{isSuccess ? (
						<div className="flex items-center gap-2">
							<p className="text-sm text-muted-foreground">
								Thanks for subscribing! You’ll hear from us soon.
							</p>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={reset}
								className="h-7 px-2 text-xs"
							>
								Reset
							</Button>
						</div>
					) : null}
				</div>
			</form>
		</div>
	);
}
