interface NewsCategoryTypes {
    [key: string]: string;
  }
  interface LanguageTypes {
    [key: string]: string;
  }
  
  export const NewsCategory: NewsCategoryTypes = {
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    science: 'science',
    sports: 'sports',
    technology: 'technology',
  };

  export const Language: LanguageTypes = {
    english: 'en',
    german: 'de'
  }
