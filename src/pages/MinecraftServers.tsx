
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface ServerPlan {
  id: string;
  name: string;
  ram: string;
  players: number;
  price: number;
  popular?: boolean;
}

export default function MinecraftServers() {
  const [serverName, setServerName] = useState("");
  const [serverVersion, setServerVersion] = useState("1.20.4");
  const [ramSliderValue, setRamSliderValue] = useState([4]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const serverPlans: ServerPlan[] = [
    { id: "basic", name: "Стартовый", ram: "2GB", players: 10, price: 300 },
    { id: "standard", name: "Стандартный", ram: "4GB", players: 25, price: 500, popular: true },
    { id: "premium", name: "Премиум", ram: "8GB", players: 50, price: 800 },
    { id: "ultimate", name: "Ультимейт", ram: "16GB", players: 100, price: 1500 },
  ];

  const handleCreateServer = () => {
    // В реальном приложении здесь был бы API запрос на создание сервера
    alert(`Создаем сервер '${serverName}' версии ${serverVersion} с планом ${selectedPlan || "Кастомный"} (${ramSliderValue[0]}GB RAM)`);
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Создайте свой сервер Minecraft</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Запустите собственный сервер Minecraft всего за несколько кликов. 
          Без сложных настроек и технических знаний.
        </p>
      </div>

      <Tabs defaultValue="plans" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="plans">Готовые планы</TabsTrigger>
          <TabsTrigger value="custom">Конструктор сервера</TabsTrigger>
        </TabsList>

        <TabsContent value="plans" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serverPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative ${selectedPlan === plan.id ? 'border-primary border-2' : ''} ${plan.popular ? 'shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Популярный
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>До {plan.players} игроков</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">{plan.price} ₽<span className="text-sm font-normal">/мес</span></div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span>{plan.ram} RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span>SSD хранилище</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span>DDoS защита</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" size={16} />
                    <span>Панель управления</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={selectedPlan === plan.id ? "default" : "outline"}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Выбрано" : "Выбрать"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Создайте свой сервер</CardTitle>
              <CardDescription>Настройте параметры под ваши потребности</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Объем оперативной памяти (RAM)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={ramSliderValue}
                    onValueChange={setRamSliderValue}
                    max={32}
                    min={1}
                    step={1}
                    className="flex-1"
                  />
                  <span className="font-bold text-lg w-16 text-right">{ramSliderValue[0]} GB</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Примерное количество игроков: {ramSliderValue[0] * 5} 
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Версия Minecraft</label>
                  <Select value={serverVersion} onValueChange={setServerVersion}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите версию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.20.4">Minecraft 1.20.4</SelectItem>
                      <SelectItem value="1.19.4">Minecraft 1.19.4</SelectItem>
                      <SelectItem value="1.18.2">Minecraft 1.18.2</SelectItem>
                      <SelectItem value="1.16.5">Minecraft 1.16.5</SelectItem>
                      <SelectItem value="1.12.2">Minecraft 1.12.2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип сервера</label>
                  <Select defaultValue="vanilla">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vanilla">Vanilla</SelectItem>
                      <SelectItem value="paper">Paper</SelectItem>
                      <SelectItem value="spigot">Spigot</SelectItem>
                      <SelectItem value="forge">Forge</SelectItem>
                      <SelectItem value="fabric">Fabric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Название сервера</label>
                <Input 
                  placeholder="Например: MyAwesomeServer" 
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Ежемесячная стоимость:</span>
                  <span className="text-2xl font-bold">{ramSliderValue[0] * 140} ₽</span>
                </div>
                <Button className="w-full" size="lg" onClick={() => setSelectedPlan(null)}>
                  Продолжить с кастомным планом
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="max-w-4xl mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Завершение создания сервера</CardTitle>
            <CardDescription>Пройдите простую настройку для запуска сервера</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Имя сервера</label>
                <Input 
                  placeholder="Название вашего сервера" 
                  value={serverName} 
                  onChange={(e) => setServerName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Выбранный план</label>
                <Input 
                  readOnly 
                  value={selectedPlan 
                    ? serverPlans.find(p => p.id === selectedPlan)?.name || "" 
                    : `Кастомный (${ramSliderValue[0]}GB RAM)`
                  } 
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleCreateServer} 
              disabled={!serverName} 
              className="w-full" 
              size="lg"
            >
              <Icon name="Server" className="mr-2" />
              Создать сервер
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <Icon name="Zap" className="text-primary" size={24} />
            </div>
            <CardTitle className="text-center">Мгновенный запуск</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Сервер запускается сразу после оплаты. Никаких долгих ожиданий.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <Icon name="ShieldCheck" className="text-primary" size={24} />
            </div>
            <CardTitle className="text-center">Защита от DDoS</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Все серверы защищены от атак. Ваш сервер всегда будет доступен.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <Icon name="PanelTop" className="text-primary" size={24} />
            </div>
            <CardTitle className="text-center">Простая панель</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Удобная панель управления для контроля сервера и установки плагинов.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
