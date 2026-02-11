function getEnv(name: string, fallback = ''): string {
  const value = process.env[name] || fallback;

  if (!value && process.env.NODE_ENV === 'production') {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const siteConfig = {
  name: 'ORIGYN Platform',
  siteUrl: getEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000')
};
