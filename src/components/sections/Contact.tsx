import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "../../schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { useToast } from "../../hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { MotionSafeDiv } from "../motion/MotionSafeDiv";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
    const { toast } = useToast();

    const form = useForm<InsertContactMessage>({
        resolver: zodResolver(insertContactMessageSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(data: InsertContactMessage) {
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,

                    from_name: "BudiaTech - Site",
                    replyto: data.email,
                }),
            });

            const result = await response.json();

            if (!result.success) {
                throw new Error("Falha ao enviar mensagem");
            }

            toast({
                title: "Mensagem enviada com sucesso!",
                description: "Entraremos em contato em breve 🚀",
            });

            form.reset();
        } catch {
            toast({
                title: "Erro ao enviar",
                description: "Tente novamente ou fale conosco pelo WhatsApp.",
                variant: "destructive",
            });
        }
    }

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container-padding">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <MotionSafeDiv
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-primary font-semibold uppercase text-sm">
                                Contato
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
                                Vamos conversar?
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Tem um projeto em mente ou precisa de uma solução sob medida?
                                Estamos prontos para ajudar sua empresa a crescer.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold">WhatsApp</p>
                                <p className="text-muted-foreground">(66) 99715-0476</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">E-mail</p>
                                    <p className="text-muted-foreground">
                                        contato@budiatech.com.br
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold">Localização</p>
                                    <p className="text-muted-foreground">
                                        Sorriso, MT — Atendimento Nacional
                                    </p>
                                </div>
                            </div>
                        </div>
                    </MotionSafeDiv>

                    {/* Form Side */}
                    <MotionSafeDiv
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl"
                    >
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {/* Anti-spam honeypot */}
                                <input
                                    type="text"
                                    name="botcheck"
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                />

                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Nome Completo</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Seu nome" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>E-mail</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="seu@email.com" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Assunto</FormLabel>
                                                <FormControl>
                                                    <Input {...field} placeholder="Ex: Novo projeto" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mensagem</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    {...field}
                                                    placeholder="Conte-nos um pouco sobre sua necessidade..."
                                                    className="min-h-[120px]"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    aria-label="Enviar formulário de contato"
                                    disabled={form.formState.isSubmitting}
                                    className="w-full h-12 text-base font-bold rounded-xl shadow shadow-primary/20"
                                >
                                    {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                    <Send className="ml-2 w-4 h-4" />
                                </Button>

                                {/* Fallback WhatsApp */}
                                <p className="text-center text-sm text-muted-foreground">
                                    Prefere falar agora?{" "}
                                    <a
                                        href="https://wa.me/5566997150476"
                                        className="text-primary font-semibold hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Chamar no WhatsApp
                                    </a>
                                </p>
                            </form>
                        </Form>
                    </MotionSafeDiv>
                </div>
            </div>
        </section>
    );
}
