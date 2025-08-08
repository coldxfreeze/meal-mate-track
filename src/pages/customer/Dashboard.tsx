import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Clock, Plus, Minus, ShoppingCart } from "lucide-react";

// Mock data for tiffin items
const tiffinItems = [
  {
    id: 1,
    name: "North Indian Thali",
    cookName: "Priya Sharma",
    rating: 4.8,
    price: 150,
    deliveryTime: "30-45 min",
    image: "🍛",
    description: "Dal, Rice, Roti, Sabzi, Pickle, Curd",
    location: "2.3 km away",
    available: true
  },
  {
    id: 2,
    name: "South Indian Combo",
    cookName: "Lakshmi Devi",
    rating: 4.9,
    price: 120,
    deliveryTime: "25-35 min",
    image: "🍚",
    description: "Sambar Rice, Rasam, Poriyal, Appalam",
    location: "1.8 km away",
    available: true
  },
  {
    id: 3,
    name: "Gujarati Thali",
    cookName: "Meera Patel",
    rating: 4.7,
    price: 180,
    deliveryTime: "35-50 min",
    image: "🥘",
    description: "Dal, Dhokla, Sabzi, Rotli, Rice, Sweet",
    location: "3.1 km away",
    available: false
  },
  {
    id: 4,
    name: "Punjabi Special",
    cookName: "Harpreet Kaur",
    rating: 4.6,
    price: 200,
    deliveryTime: "40-55 min",
    image: "🍽️",
    description: "Rajma, Rice, Butter Naan, Salad",
    location: "2.7 km away",
    available: true
  }
];

const CustomerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = tiffinItems.find(item => item.id === parseInt(itemId));
      return total + (item?.price || 0) * count;
    }, 0);
  };

  const filteredItems = tiffinItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.cookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
          <div className="flex items-center text-primary-foreground/90">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Delivering to Koramangala, Bangalore</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for tiffins, cuisines, or cooks..."
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <Badge variant="secondary" className="px-4 py-2 whitespace-nowrap">🔥 Popular</Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">⚡ Fast Delivery</Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">💰 Under ₹150</Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">⭐ Top Rated</Badge>
          <Badge variant="outline" className="px-4 py-2 whitespace-nowrap">🌿 Vegetarian</Badge>
        </div>

        {/* Tiffin Items Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <Card key={item.id} className="bg-gradient-card hover:shadow-medium transition-smooth">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-2">{item.image}</div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-3 h-3" />
                      <span>{item.deliveryTime}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>
                  by {item.cookName} • {item.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">₹{item.price}</div>
                  
                  {item.available ? (
                    cart[item.id] ? (
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(item.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-medium w-8 text-center">{cart[item.id]}</span>
                        <Button
                          size="sm"
                          variant="customer"
                          onClick={() => addToCart(item.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="customer" 
                        size="sm"
                        onClick={() => addToCart(item.id)}
                      >
                        Add
                      </Button>
                    )
                  ) : (
                    <Badge variant="destructive">Unavailable</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Cart Button */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6">
            <Button
              variant="customer"
              size="lg"
              className="rounded-full shadow-strong px-6 py-4 text-base"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {getTotalItems()} items • ₹{getTotalPrice()}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;