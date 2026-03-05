"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils/funcs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

const contactSchema = z.object({
    firstName: z
        .string("שם פרטי הוא שדה חובה")
        .trim()
        .min(2, "שם פרטי חייב להיות באורך של 2 תווים לפחות"),
    lastName: z
        .string("שם משפחה הוא שדה חובה")
        .trim()
        .min(2, "שם משפחה חייב להיות באורך של 2 תווים לפחות"),
    email: z.email("דוא" + '"' + "ל הוא שדה חובה").trim(),
    phone: z
        .string("מס' טלפון הוא שדה חובה")
        .trim()
        .transform((val) => val.replace(/\D/g, "")),
    message: z
        .string("הודעה היא שדה חובה")
        .trim()
        .min(10, "ההודעה צריכה להיות באורך של לפחות 10 תווים")
        .max(1000, "ההודעה ארוכה מדי (מקסימום 1000 תווים)"),
});

type FormValues = z.infer<typeof contactSchema>;

function ContactForm({ className, ...props }: React.ComponentProps<"form">) {
    const form = useForm<FormValues>({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const { mutate: send, isPending } = useMutation({
        mutationKey: ["send-contact"],
        mutationFn: async (data: FormValues) =>
            Promise.all([
                axios.post("/api/whatsapp/contact", data),
                axios.post("/api/email/contact", data),
            ]),
        onError: () =>
            toast.error(
                "משהו השתבש בשליחת הבקשה שלכם. אנא נסו שוב מאוחר יותר.",
            ),
        onSuccess: () => {
            toast.success("בקשתכם נשלחה בהצלחה!");
            form.reset({ ...form.getValues(), message: "" });
        },
    });

    return (
        <Form {...form}>
            <form
                {...props}
                onSubmit={form.handleSubmit((d) =>
                    send({ ...d, phone: "972" + d.phone }),
                )}
                className={cn("space-y-6", className)}
            >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>שם פרטי</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="אבי"
                                        autoComplete="given-name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>שם משפחה</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="כהן"
                                        autoComplete="family-name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>אימייל</FormLabel>
                            <FormControl>
                                <Input
                                    dir="ltr"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="text-right"
                                    autoComplete="email"
                                    inputMode="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>מס' טלפון</FormLabel>
                            <FormControl>
                                <Input
                                    dir="ltr"
                                    type="tel"
                                    placeholder="+972523456789"
                                    className="text-right"
                                    autoComplete="tel"
                                    inputMode="tel"
                                    {...field}
                                    value={"+972" + field.value}
                                    onChange={(e) =>
                                        field.onChange(
                                            e.target.value
                                                .slice(4)
                                                .replace(/\D/g, ""),
                                        )
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>הודעה</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="כיתבו כאן את ההודעה שלכם..."
                                    className="min-h-32"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="h-12 w-full rounded-full text-lg font-semibold"
                    disabled={isPending}
                >
                    {isPending && <Spinner />}
                    שליחה
                </Button>
            </form>
        </Form>
    );
}

export { ContactForm };
