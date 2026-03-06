export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  quote: string;
  verified: boolean;
  source: string;
  linkedCaseId: number;
  treatmentType: string;
  hasPhotos: boolean;
  photoCount?: number;
};

export type CaseStudy = {
  id: number;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  timeframe: string;
  testimonialIds: number[];
};

