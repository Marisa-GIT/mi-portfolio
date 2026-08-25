// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Isabel Vides',
  role: 'QA Automation Engineer Jr',
  email: 'Isabelvides123@gmail.com',
  tagline: 'I build reliable and maintainable test automation solutions for web applications.',
  description:
    'Portfolio of Isabel Vides — portafolio focused on web automation, REST API testing, database validation, and end-to-end testing using Python, Selenium, Pytest, SQL, and Git.',
  status: 'Open to QA Automation opportunities and freelance projects',
  social: [
    { label: 'GitHub', href: 'https://github.com/Marisa-GIT' },
    { label: 'LinkedIn', href: 'www.linkedin.com/in/maria-isabel-vides-021531232' },
    { label: 'X', href: 'https://x.com/IsabelVides1593' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
