import {
  type Publication,
  type Course,
  type News,
  type ContactMessage,
  type InsertPublication,
  type InsertCourse,
  type InsertNews,
  type InsertContactMessage,
} from "@shared/schema";

export interface IStorage {
  // Publications
  getPublications(): Promise<Publication[]>;
  getPublication(id: number): Promise<Publication | undefined>;
  createPublication(pub: InsertPublication): Promise<Publication>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  // News
  getNews(): Promise<News[]>;
  createNews(news: InsertNews): Promise<News>;
  
  // Contact Messages
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private publications: Map<number, Publication>;
  private courses: Map<number, Course>;
  private news: Map<number, News>;
  private contactMessages: Map<number, ContactMessage>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.publications = new Map();
    this.courses = new Map();
    this.news = new Map();
    this.contactMessages = new Map();
    this.currentIds = {
      publication: 1,
      course: 1,
      news: 1,
      contactMessage: 1,
    };

    // Add some sample data
    this.seedData();
  }

  private seedData() {
    // Sample publications
    const publications: InsertPublication[] = [
      {
        title: "The Nature of Consciousness",
        abstract: "An exploration of consciousness and its philosophical implications.",
        authors: "Dr. Jane Smith",
        year: "2023",
        venue: "Philosophy of Mind Quarterly",
        pdfUrl: "/papers/consciousness.pdf",
        isPublished: true
      },
      {
        title: "Ethics in the Digital Age",
        abstract: "Examining ethical challenges in modern technology.",
        authors: "Dr. Jane Smith, Dr. John Doe",
        year: "2022",
        venue: "Journal of Applied Ethics",
        pdfUrl: "/papers/digital-ethics.pdf",
        isPublished: true
      }
    ];
    publications.forEach(pub => this.createPublication(pub));

    // Sample courses
    const courses: InsertCourse[] = [
      {
        code: "PHIL101",
        title: "Introduction to Philosophy",
        description: "A foundational course exploring major philosophical concepts.",
        semester: "Fall 2024",
        syllabus: "/courses/phil101/syllabus.pdf",
        isActive: true
      },
      {
        code: "PHIL301",
        title: "Ethics and Society",
        description: "Advanced course on ethical theories and their applications.",
        semester: "Spring 2024",
        syllabus: "/courses/phil301/syllabus.pdf",
        isActive: true
      }
    ];
    courses.forEach(course => this.createCourse(course));

    // Sample news
    const news: InsertNews[] = [
      {
        title: "New Publication in Ethics Journal",
        content: "Excited to announce my latest publication on digital ethics.",
        date: new Date(),
        isPublished: true
      },
      {
        title: "Upcoming Conference Presentation",
        content: "I will be presenting at the International Philosophy Conference.",
        date: new Date(),
        isPublished: true
      }
    ];
    news.forEach(n => this.createNews(n));
  }

  async getPublications(): Promise<Publication[]> {
    return Array.from(this.publications.values());
  }

  async getPublication(id: number): Promise<Publication | undefined> {
    return this.publications.get(id);
  }

  async createPublication(pub: InsertPublication): Promise<Publication> {
    const id = this.currentIds.publication++;
    const publication = { ...pub, id };
    this.publications.set(id, publication);
    return publication;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const id = this.currentIds.course++;
    const newCourse = { ...course, id };
    this.courses.set(id, newCourse);
    return newCourse;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async createNews(news: InsertNews): Promise<News> {
    const id = this.currentIds.news++;
    const newNews = { ...news, id };
    this.news.set(id, newNews);
    return newNews;
  }

  async createContactMessage(msg: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentIds.contactMessage++;
    const message = { ...msg, id, createdAt: new Date() };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
