import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const requestLocale = locale || 'en';
  
  return {
    locale: requestLocale,
    messages: (await import(`./messages/${requestLocale}.json`)).default
  };
});
