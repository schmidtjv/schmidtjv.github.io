import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  const httpServer = createServer(app);

  // Get all publications
  app.get("/api/publications", async (_req, res) => {
    const publications = await storage.getPublications();
    res.json(publications);
  });

  // Get a specific publication
  app.get("/api/publications/:id", async (req, res) => {
    const publication = await storage.getPublication(Number(req.params.id));
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.json(publication);
  });

  // Get all courses
  app.get("/api/courses", async (_req, res) => {
    const courses = await storage.getCourses();
    res.json(courses);
  });

  // Get a specific course
  app.get("/api/courses/:id", async (req, res) => {
    const course = await storage.getCourse(Number(req.params.id));
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  });

  // Get all news
  app.get("/api/news", async (_req, res) => {
    const news = await storage.getNews();
    res.json(news);
  });

  // Submit contact message
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(data);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ message: "Invalid request data" });
    }
  });

  return httpServer;
}
