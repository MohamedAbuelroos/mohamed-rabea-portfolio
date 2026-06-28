export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  demo?: string;
  github?: string;
  featured?: boolean;
}
