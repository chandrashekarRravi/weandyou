export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface Achievement {
  label: string;
  value: string;
  suffix: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
