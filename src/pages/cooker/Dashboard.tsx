import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Star, Clock, DollarSign, Edit, Trash2, Truck, User, TrendingUp } from "lucide-react";

// Mock data for cooker's dishes
const initialDishes = [
  {
    id: 1,
    name: "North Indian Thali",
    price: 150,
    description: "Dal, Rice, Roti, Sabzi, Pickle, Curd",
    image: "🍛",
    rating: 4.8,
    orders: 145,
    available: true,
    canDeliver: true
  },
  {
    id: 2,
    name: "Rajma Rice Combo",
    price: 120,
    description: "Rajma, Jeera Rice, Salad, Pickle",
    image: "🍚",
    rating: 4.6,
    orders: 89,
    available: false,
    canDeliver: false
  }
];

const CookerDashboard = () => {
  const [dishes, setDishes] = useState(initialDishes);
  const [isAddingDish, setIsAddingDish] = useState(false);

  const toggleAvailability = (id: number) => {
    setDishes(dishes.map(dish => 
      dish.id === id ? { ...dish, available: !dish.available } : dish
    ));
  };

  const toggleDelivery = (id: number) => {
    setDishes(dishes.map(dish => 
      dish.id === id ? { ...dish, canDeliver: !dish.canDeliver } : dish
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-success text-success-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-2">Priya's Kitchen</h1>
          <div className="flex items-center gap-4 text-success-foreground/90">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current" />
              <span>4.8 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>234 total orders</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>₹15,670 this month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Today's Orders</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="text-3xl">📦</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Today's Revenue</p>
                  <p className="text-2xl font-bold">₹1,800</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Dishes</p>
                  <p className="text-2xl font-bold">{dishes.filter(d => d.available).length}</p>
                </div>
                <div className="text-3xl">🍽️</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Rating</p>
                  <p className="text-2xl font-bold">4.8</p>
                </div>
                <div className="text-3xl">⭐</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Dishes Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Dishes</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="cooker">
                <Plus className="w-4 h-4 mr-2" />
                Add New Dish
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Dish</DialogTitle>
                <DialogDescription>
                  Create a new dish for your tiffin service
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dish-name">Dish Name</Label>
                  <Input id="dish-name" placeholder="e.g. Butter Chicken Thali" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dish-price">Price (₹)</Label>
                  <Input id="dish-price" type="number" placeholder="150" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dish-description">Description</Label>
                  <Textarea id="dish-description" placeholder="What's included in this dish..." />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="available" />
                  <Label htmlFor="available">Available Now</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="self-delivery" />
                  <Label htmlFor="self-delivery">I can deliver this dish</Label>
                </div>
                <Button variant="cooker" className="w-full">Add Dish</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Dishes Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <Card key={dish.id} className="bg-gradient-card">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{dish.image}</div>
                  <div className="flex gap-1">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{dish.name}</CardTitle>
                <CardDescription>{dish.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">₹{dish.price}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span>{dish.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{dish.orders}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`available-${dish.id}`} className="text-sm">
                      Available for orders
                    </Label>
                    <Switch 
                      id={`available-${dish.id}`}
                      checked={dish.available}
                      onCheckedChange={() => toggleAvailability(dish.id)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor={`delivery-${dish.id}`} className="text-sm flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      Self delivery
                    </Label>
                    <Switch 
                      id={`delivery-${dish.id}`}
                      checked={dish.canDeliver}
                      onCheckedChange={() => toggleDelivery(dish.id)}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {dish.available ? (
                    <Badge variant="default" className="bg-success text-success-foreground">Available</Badge>
                  ) : (
                    <Badge variant="secondary">Unavailable</Badge>
                  )}
                  {dish.canDeliver && (
                    <Badge variant="outline">Self Delivery</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookerDashboard;