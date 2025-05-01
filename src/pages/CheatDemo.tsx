
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import Icon from '@/components/ui/icon';

const CheatDemo = () => {
  const [username, setUsername] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    
    setLoading(true);
    setProgress(0);
    
    // Симуляция прогресса
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          setShowAlert(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="container max-w-md mx-auto py-10">
      <Card className="border-2 border-red-600/30 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Shield" className="text-red-500" />
            Демонстрационная симуляция
          </CardTitle>
          <CardDescription className="text-slate-300">
            Это не настоящая программа, а просто демонстрация интерфейса
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          {showAlert && (
            <Alert className="mb-6 bg-yellow-50 border-yellow-200">
              <Icon name="AlertTriangle" className="h-5 w-5 text-yellow-600" />
              <AlertTitle>Внимание!</AlertTitle>
              <AlertDescription>
                Это просто демонстрация. Никакого взлома не произошло. Взлом аккаунтов незаконен и неэтичен!
              </AlertDescription>
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Имя пользователя Minecraft
                </label>
                <Input
                  id="username"
                  placeholder="Введите имя пользователя"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={loading}
                  className="border-slate-300"
                />
              </div>
              
              {loading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Прогресс симуляции</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-4 pb-4 px-6 bg-slate-50">
          <Button variant="outline" disabled={loading}>
            Отмена
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!username || loading}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Icon name="Loader2" className="animate-spin" /> Симуляция...
              </span>
            ) : "Запустить симуляцию"}
          </Button>
        </CardFooter>
      </Card>
      
      <p className="text-center mt-6 text-sm text-slate-500">
        Это образовательная демонстрация UI. Взлом аккаунтов является незаконным и может привести к уголовной ответственности.
      </p>
    </div>
  );
};

export default CheatDemo;
