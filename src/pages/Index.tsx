import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      title: "Быстрый старт",
      description: "Запустите свой IT-бизнес всего за 30 дней без технических знаний",
      icon: "Rocket",
    },
    {
      title: "Высокий доход",
      description: "Получайте от 500,000 рублей в месяц на внедрении ИИ-решений",
      icon: "TrendingUp",
    },
    {
      title: "Готовые решения",
      description: "Используйте проверенные ИИ-инструменты для автоматизации бизнеса",
      icon: "Settings",
    },
    {
      title: "Поддержка 24/7",
      description: "Получите персональное сопровождение на всех этапах развития",
      icon: "Headphones",
    },
  ];

  const benefits = [
    "✅ Без опыта в программировании",
    "✅ Готовые ИИ-решения для бизнеса",
    "✅ Проверенная бизнес-модель",
    "✅ Поддержка экспертов",
    "✅ Быстрая окупаемость вложений",
    "✅ Масштабируемый доход",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-800/20 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Icon name="Brain" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">Formula Lite</span>
          </div>
          <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
            Начать сейчас
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                  🚀 Запуск IT-бизнеса
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Как ОТКРЫТЬ
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> IT-бизнес</span>
                  <br />
                  с доходом от{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    500.000₽
                  </span>
                  <br />
                  за 30 дней
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Начав зарабатывать на внедрении{" "}
                  <span className="text-orange-400 font-semibold">Искусственного Интеллекта</span> в бизнес
                </p>
              </div>

              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-green-400 text-lg">{benefit.split(' ')[0]}</div>
                    <span className="text-slate-200">{benefit.substring(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6"
                >
                  Получить доступ сейчас
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть презентацию
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/img/1b3658c3-25c4-411e-95cb-260de312c4cd.jpg" 
                alt="IT-бизнес на ИИ" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">500.000₽+</div>
                <div className="text-sm opacity-90">в месяц</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
              Преимущества
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Почему выбирают нашу{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                методику
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Проверенная система запуска IT-бизнеса с гарантированным результатом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-orange-500/30 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Что вы получите
            </h2>
            <p className="text-xl text-slate-300">
              Полный пакет инструментов для запуска прибыльного IT-бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-700">
                <div className="text-green-400 text-2xl font-bold">✅</div>
                <span className="text-slate-200 text-lg">{benefit.substring(2)}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-8"
            >
              Начать зарабатывать сегодня
              <Icon name="Sparkles" size={24} className="ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/10 to-blue-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Готовы начать?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам предпринимателей, которые уже зарабатывают на ИИ-технологиях
            </p>
            
            <div className="bg-slate-900/80 p-8 rounded-3xl border border-slate-700 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="text-orange-400 text-sm font-semibold uppercase tracking-wide">
                  Специальное предложение
                </div>
                <div className="text-4xl font-bold text-white">
                  <span className="line-through text-slate-500 text-2xl">97,000₽</span>
                  <br />
                  47,000₽
                </div>
                <div className="text-slate-300 text-sm">
                  Скидка 50% только сегодня
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-6"
                >
                  Получить доступ за 47,000₽
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">Formula Lite</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Помогаем предпринимателям запускать прибыльные IT-бизнесы на основе искусственного интеллекта.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@formula-lite.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 Formula Lite. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;