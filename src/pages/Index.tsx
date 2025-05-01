
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Демонстрационное приложение</CardTitle>
          <CardDescription>Выберите страницу для перехода</CardDescription>

          <CardDescription>Выберите страницу для перехода</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link to="/cheat-demo">
            <Button className="w-full mb-2">Демо страница</Button>
          </Link>
          <Link to="/minecraft-servers">
            <Button className="w-full" variant="secondary">Создание серверов Minecraft</Button>
          </Link>

      </Card>
    </div>
  );
}

