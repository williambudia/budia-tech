import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(),
  problem: text("problem").notNull(),
  solution: text("solution").notNull(),
  result: text("result").notNull(),
  imageUrl: text("image_url"),
  tags: text("tags").array(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true }).extend({
  email: z.email("E-mail inválido"),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  subject: z.string().min(3, "Assunto deve ter pelo menos 3 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
