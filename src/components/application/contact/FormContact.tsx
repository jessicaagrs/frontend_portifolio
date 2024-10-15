import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "O campo nome deve ter pelos menos 2 caracteres.",
    }),
    message: z.string().min(10, {
        message: "O campo mensagem deve ter pelos menos 10 caracteres.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

export function FormContact() {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            message: "",
        },
    });

    const onSubmit: SubmitHandler<FormSchema> = data => {
        const messageFormatted = data.message.replace(/ /g, "%20");
        const url = `https://wa.me//5551994252048?text=Olá%20meu%20nome%20é%20${data.username}!%20 ${messageFormatted}`;
        window.open(url, "_blank");
        form.reset();
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full max-w-lg"
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="seu nome..."
                                    {...field}
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
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="descreva sua mensagem..."
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className=" bg-lime-900 hover:bg-slate-600"
                >
                    Enviar
                </Button>
            </form>
        </Form>
    );
}
