export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  technologies: string[];
  demo?: string;
  github?: string;
  featured?: boolean;

  private?: boolean;
  category?: "Web-Application" | "Tools" | "Landing-Page" | "Business-Websites";

  features?: string[];
}
