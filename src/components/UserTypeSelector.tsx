import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, ShoppingBag, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserType {
  type: 'customer' | 'cooker' | 'delivery';
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  path: string;
  variant: "customer" | "cooker" | "delivery";
}

const userTypes: UserType[] = [
  {
    type: 'customer',
    title: 'I\'m Hungry',
    description: 'Browse delicious home-cooked meals and place orders',
    icon: ShoppingBag,
    path: '/customer',
    variant: 'customer'
  },
  {
    type: 'cooker',
    title: 'I Cook',
    description: 'Share your cooking skills and manage your tiffin service',
    icon: ChefHat,
    path: '/cooker',
    variant: 'cooker'
  },
  {
    type: 'delivery',
    title: 'I Deliver',
    description: 'Deliver fresh meals and earn money',
    icon: Truck,
    path: '/delivery',
    variant: 'delivery'
  }
];

export const UserTypeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {userTypes.map((userType) => {
        const Icon = userType.icon;
        return (
          <Card 
            key={userType.type} 
            className="bg-gradient-card hover:shadow-medium transition-smooth cursor-pointer border-2 hover:border-primary/20"
            onClick={() => navigate(userType.path)}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">{userType.title}</CardTitle>
              <CardDescription className="text-base">
                {userType.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant={userType.variant} 
                className="w-full text-base py-6"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(userType.path);
                }}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};