import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const publications = pgTable("publications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  abstract: text("abstract").notNull(),
  authors: text("authors").notNull(),
  year: text("year").notNull(),
  pdfUrl: text("pdf_url"),
  venue: text("venue").notNull(),
  isPublished: boolean("is_published").default(true),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  syllabus: text("syllabus"),
  semester: text("semester").notNull(),
  isActive: boolean("is_active").default(true),
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").defaultNow(),
  isPublished: boolean("is_published").default(true),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertPublicationSchema = createInsertSchema(publications);
export const insertCourseSchema = createInsertSchema(courses);
export const insertNewsSchema = createInsertSchema(news);
export const insertContactMessageSchema = createInsertSchema(contactMessages);

export type Publication = typeof publications.$inferSelect;
export type Course = typeof courses.$inferSelect;
export type News = typeof news.$inferSelect;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertPublication = z.infer<typeof insertPublicationSchema>;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertNews = z.infer<typeof insertNewsSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
