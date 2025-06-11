import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import uz from '../../messages/uz.json';
import ru from '../../messages/ru.json'; 
const messagesMap = {
  uz,
  ru,
};

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: messagesMap[locale] || messagesMap[routing.defaultLocale],
  };
});