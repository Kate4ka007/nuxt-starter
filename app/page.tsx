import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <WhatsAppButton />
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Next.js Starter</h1>
        <p className="text-xl mb-8">Проект успешно настроен с аналитикой и деплоем в GitHub Pages</p>
        
        <div className="space-y-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="font-semibold text-green-800">✅ Настроено:</h2>
            <ul className="text-green-700 mt-2">
              <li>• Google Tag Manager</li>
              <li>• Yandex.Metrika</li>
              <li>• Google Analytics</li>
              <li>• WhatsApp кнопка с трекингом</li>
              <li>• Деплой в GitHub Pages</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="font-semibold text-blue-800">🔧 Тестирование:</h2>
            <p className="text-blue-700 mt-2">
              Добавьте UTM параметры к URL для тестирования трекинга:<br/>
              <code className="bg-blue-200 px-2 py-1 rounded">
                ?utm_source=test&utm_medium=email&utm_campaign=welcome
              </code>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
