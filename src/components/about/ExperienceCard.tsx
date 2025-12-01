import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ReactNode } from "react";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const ExperienceCard = ({ title, subtitle, children }: ExperienceCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {children}
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
