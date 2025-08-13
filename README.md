# Next.js Starter

Этот проект представляет собой чистый Next.js стартер с настроенной аналитикой и автоматическим деплоем в GitHub Pages.

## 🚀 Возможности

- ✅ **Next.js 14** с App Router
- ✅ **TypeScript** для типобезопасности
- ✅ **Tailwind CSS** для стилизации
- ✅ **Google Tag Manager** для управления тегами
- ✅ **Google Analytics** для аналитики
- ✅ **Yandex.Metrika** для аналитики
- ✅ **WhatsApp кнопка** с трекингом событий
- ✅ **Автоматический деплой** в GitHub Pages
- ✅ **UTM трекинг** для маркетинговых кампаний

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 📊 Аналитика

Проект настроен с полной аналитикой:

- **Google Tag Manager**: GTM-TKRK9RCR
- **Google Analytics**: G-F1T0H93WD6
- **Yandex.Metrika**: 94673343

## 🚀 Деплой

### GitHub Pages (автоматический)
При каждом push в ветку `main` проект автоматически деплоится в GitHub Pages.

### Ручной деплой
```bash
npm run deploy
```

Подробные инструкции в [DEPLOY.md](./DEPLOY.md)

## 🧪 Тестирование

Для тестирования UTM трекинга добавьте параметры к URL:
```
https://yoursite.com/?utm_source=test&utm_medium=email&utm_campaign=welcome
```

## 📝 Настройка

1. Замените `+1234567890` в `components/WhatsAppButton.tsx` на ваш номер
2. Обновите ID аналитики в `app/layout.tsx` при необходимости
3. Измените `basePath` в `next.config.js` под ваш репозиторий

## 📚 Документация

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Analytics](https://developers.google.com/analytics)
- [Yandex.Metrika](https://yandex.ru/support/metrica/)
