import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const courses = [
    {
      title: "Хакни Нейросети",
      description: "Флагманская программа по освоению ИИ для бизнеса",
      price: "Популярный курс",
      features: ["Практическое применение ИИ", "Экономия 60% времени", "Создание вирусного контента", "Ассистенты и делегирование"],
      link: "https://chernikovgpt.ru/"
    },
    {
      title: "Огненные автоворонки",
      description: "Создание автоматических воронок продаж",
      price: "Высокая конверсия",
      features: ["Автоматические воронки", "Интеграция с CRM", "Системы получения клиентов", "Масштабирование продаж"],
      link: "https://vk.com/chernikovpsiholog"
    },
    {
      title: "Огненный марафон по SMM",
      description: "Комплексное обучение маркетингу в соцсетях",
      price: "Марафон",
      features: ["SMM стратегии", "Контент-планы", "Аналитика и метрики", "Работа с аудиторией"],
      link: "https://firemarafon.firebaseapp.com/"
    }
  ];

  return (
    <div className="min-h-screen bg-background neural-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="gradient-text font-bold text-xl">Сергей Черников</div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#expertise" className="text-muted-foreground hover:text-primary transition-colors">Экспертиза</a>
              <a href="#achievements" className="text-muted-foreground hover:text-primary transition-colors">Достижения</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="animate-pulse-glow" asChild>
              <a href="https://wa.me/message/YRBE2VIUHPMYN1" target="_blank" rel="noopener noreferrer">
                Связаться
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Эксперт по нейросетям</span>
                <br />
                и автоматизации бизнеса
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CEO IT-компании Super-SMM • 15 лет опыта • Обучил более 10,000 человек • 
                Упаковал более 70 бизнесов с помощью ИИ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="https://chernikovgpt.ru/" target="_blank" rel="noopener noreferrer">
                    <Icon name="Zap" className="mr-2" />
                    Хакни Нейросети
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="https://wa.me/message/YRBE2VIUHPMYN1" target="_blank" rel="noopener noreferrer">
                    <Icon name="Phone" className="mr-2" />
                    Заказать выступление
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="relative z-10">
                <img 
                  src="https://cdn.poehali.dev/files/4282ad21-3989-4752-aea9-2bca5596d576.png" 
                  alt="Сергей Черников" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl -z-10 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15", label: "лет опыта", suffix: "+" },
              { number: "10", label: "тысяч учеников", suffix: "K+" },
              { number: "70", label: "упакованных бизнесов", suffix: "+" },
              { number: "500", label: "статей с ИИ", suffix: "+" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Экспертиза</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для автоматизации бизнеса с помощью искусственного интеллекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Нейросети и ИИ",
                description: "Создание контента, автоматизация процессов, интеграция ИИ-инструментов",
                features: ["Собственный агрегатор ИИ", "Экономия 60% времени", "Работа без VPN"]
              },
              {
                icon: "Cog",
                title: "Автоматизация бизнеса",
                description: "Чат-боты, автоворонки продаж, системы лидогенерации",
                features: ["Чат-боты для продаж", "Автоворонки", "CRM интеграции"]
              },
              {
                icon: "Users",
                title: "Обучение и консалтинг",
                description: "Корпоративное обучение, консалтинг по внедрению ИИ",
                features: ["Авторские программы", "10,000+ учеников", "Госпартнеры"]
              },
              {
                icon: "Megaphone",
                title: "SMM и маркетинг",
                description: "Автоматизация соцсетей, контент-маркетинг с ИИ",
                features: ["Сервисы для ВКонтакте", "Вирусный контент", "Системы продаж"]
              },
              {
                icon: "Mic",
                title: "Спикерство",
                description: "Выступления на конференциях, корпоративные тренинги",
                features: ["10,000+ часов на сцене", "По всей России", "Различные форматы"]
              },
              {
                icon: "Rocket",
                title: "IT-разработка",
                description: "Создание ИИ-сервисов, интеграция технологий",
                features: ["Собственные продукты", "API интеграции", "Скалируемые решения"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} className="w-6 h-6 text-primary icon-hover" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="w-4 h-4 text-primary mr-2 flex-shrink-0 icon-hover" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Достижения и регалии</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "Бренд года 2020",
                description: "Номинация «Прорыв года»"
              },
              {
                icon: "BookOpen",
                title: "Публикации",
                description: "Журнал «100 лучших экспертов», книги «100 счастливых миллионеров» и «ЛИЦА»"
              },
              {
                icon: "Building",
                title: "Госпартнеры",
                description: "Сотрудничество с «Мой Бизнес», МКУ «ЦРП», Росмолодежь, «Опора России»"
              },
              {
                icon: "Tv",
                title: "Медиа",
                description: "Выступления на ТВ и радио, экспертные комментарии"
              },
              {
                icon: "MapPin",
                title: "Благодарность города",
                description: "За вклад в социально-экономическое развитие Владивостока"
              },
              {
                icon: "TrendingUp",
                title: "Корпоративные клиенты",
                description: "MetLife, ЭкоЦентр, Sokroma и другие крупные компании"
              }
            ].map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={achievement.icon as any} className="w-8 h-8 text-primary icon-hover" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Авторские курсы</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                    <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full text-sm">
                      {course.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">{course.description}</p>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="w-5 h-5 text-primary mr-3 flex-shrink-0 icon-hover" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <a href={course.link} target="_blank" rel="noopener noreferrer">
                      Узнать подробнее
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Готовы внедрить ИИ в ваш бизнес?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Свяжитесь со мной для консультации, обучения команды или организации выступления
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="w-6 h-6 text-primary icon-hover" />
                  </div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <a href="tel:+79520961106" className="text-primary hover:underline">
                    +7 (952) 096-11-06
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="w-6 h-6 text-primary icon-hover" />
                  </div>
                  <h3 className="font-semibold mb-2">Telegram</h3>
                  <a href="https://t.me/chernikovgpt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    @chernikovgpt
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Globe" className="w-6 h-6 text-primary icon-hover" />
                  </div>
                  <h3 className="font-semibold mb-2">Сайт школы ИИ</h3>
                  <a href="https://chernikovgpt.ru/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    chernikovgpt.ru
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://t.me/chernikovgpt" target="_blank" rel="noopener noreferrer">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на консультацию
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="https://disk.yandex.ru/i/JPdPEtgswoRAdQ" target="_blank" rel="noopener noreferrer">
                  <Icon name="Download" className="mr-2" />
                  Скачать презентацию
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="gradient-text font-bold text-xl mb-4 md:mb-0">
              Сергей Черников
            </div>
            <div className="flex space-x-6">
              <a href="https://chernikovgpt.ru/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                Школа ИИ
              </a>
              <a href="https://gpt-boss.web.app/bonus/A00030" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                ИИ сервисы
              </a>
              <a href="https://t.me/chernikovgpt" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-muted-foreground">
            <p>© 2025 Сергей Черников. Эксперт по нейросетям и автоматизации бизнеса.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}