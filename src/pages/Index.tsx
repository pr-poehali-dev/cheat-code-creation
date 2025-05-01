
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
        </CardHeader>
        <CardContent>
          <Link to="/cheat-demo">
            <Button className="w-full">Демо страница</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

