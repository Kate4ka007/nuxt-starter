# Деплой в GitHub Pages

## Автоматический деплой (рекомендуется)

1. Убедитесь, что ваш репозиторий подключен к GitHub
2. Включите GitHub Pages в настройках репозитория:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
3. При каждом push в ветку `main` будет автоматически запускаться деплой

## Ручной деплой

### Вариант 1: Через npm скрипт
```bash
npm run deploy
```

### Вариант 2: Пошагово
```bash
# 1. Сборка проекта
npm run build

# 2. Создание файла .nojekyll
touch out/.nojekyll

# 3. Добавление файлов в git
git add out/

# 4. Коммит
git commit -m "Deploy to gh-pages"

# 5. Пуш в ветку gh-pages
git subtree push --prefix out origin gh-pages
```

## Настройка

1. **basePath**: В `next.config.js` указан basePath `/nuxt-starter` для production
2. **GitHub Actions**: Автоматический деплой настроен в `.github/workflows/deploy.yml`
3. **Статические файлы**: Проект собирается как статический сайт с `output: 'export'`

## Проверка

После деплоя сайт будет доступен по адресу:
`https://[username].github.io/nuxt-starter/`

## Устранение проблем

1. **404 ошибки**: Убедитесь, что в `next.config.js` указан правильный `basePath`
2. **Аналитика не работает**: Проверьте, что домен добавлен в настройках Google Analytics и Yandex.Metrika
3. **Стили не загружаются**: Убедитесь, что Tailwind CSS правильно настроен
