import { Card, CardContent, CardFooter } from "../components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-xl border-border/50">
        <CardContent className="pt-8 text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">404 - {t("notFound.title")}</h1>
          <p className="text-muted-foreground">
            {t("notFound.description")}
          </p>
        </CardContent>
        <CardFooter className="justify-center pb-8">
          <Link href="/">
            <Button className="gap-2">
              <Home className="w-4 h-4" />
              {t("notFound.button")}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
