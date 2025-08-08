import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, DollarSign, Phone, Navigation, CheckCircle, TrendingUp, User } from "lucide-react";

// Mock data for delivery orders
const pendingOrders = [
  {
    id: 1,
    orderNumber: "#TT001234",
    customerName: "Rahul Sharma",
    customerPhone: "+91 98765 43210",
    pickupAddress: "Priya's Kitchen, 123 MG Road",
    deliveryAddress: "Flat 4B, Green Apartments, Koramangala",
    distance: "2.3 km",
    amount: 150,
    deliveryFee: 25,
    items: "North Indian Thali x1",
    pickupTime: "12:30 PM",
    estimatedDelivery: "1:00 PM",
    status: "ready_for_pickup"
  },
  {
    id: 2,
    orderNumber: "#TT001235",
    customerName: "Priya Nair",
    customerPhone: "+91 87654 32109",
    pickupAddress: "Meera's Kitchen, 456 HSR Layout",
    deliveryAddress: "Office Complex, BTM Layout",
    distance: "3.1 km",
    amount: 280,
    deliveryFee: 35,
    items: "Gujarati Thali x2",
    pickupTime: "1:15 PM",
    estimatedDelivery: "1:45 PM",
    status: "preparing"
  }
];

const completedOrders = [
  {
    id: 3,
    orderNumber: "#TT001230",
    amount: 120,
    deliveryFee: 20,
    completedAt: "11:30 AM",
    rating: 5
  },
  {
    id: 4,
    orderNumber: "#TT001228",
    amount: 200,
    deliveryFee: 30,
    completedAt: "10:45 AM",
    rating: 4
  }
];

const DeliveryDashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);

  const handlePickup = (orderId: number) => {
    // Update order status to picked up
    console.log("Picked up order:", orderId);
  };

  const handleDelivered = (orderId: number) => {
    // Mark order as delivered
    console.log("Delivered order:", orderId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-info text-info-foreground p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Delivery Dashboard</h1>
              <div className="flex items-center gap-4 text-info-foreground/90">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>₹1,240 today</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>8 deliveries</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <Label htmlFor="online-status" className="text-info-foreground">
                  {isOnline ? "Online" : "Offline"}
                </Label>
                <Switch 
                  id="online-status"
                  checked={isOnline}
                  onCheckedChange={setIsOnline}
                />
              </div>
              {isOnline && (
                <Badge variant="default" className="bg-success text-success-foreground">
                  Available for deliveries
                </Badge>
              )}
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
                  <p className="text-muted-foreground text-sm">Today's Earnings</p>
                  <p className="text-2xl font-bold">₹1,240</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Deliveries</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="text-3xl">📦</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Distance</p>
                  <p className="text-2xl font-bold">24 km</p>
                </div>
                <div className="text-3xl">🛣️</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Rating</p>
                  <p className="text-2xl font-bold">4.9</p>
                </div>
                <div className="text-3xl">⭐</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Orders */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Pending Orders</h2>
          {pendingOrders.length > 0 ? (
            <div className="space-y-4">
              {pendingOrders.map((order) => (
                <Card key={order.id} className="bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{order.orderNumber}</CardTitle>
                        <CardDescription>{order.customerName}</CardDescription>
                      </div>
                      <Badge variant={order.status === 'ready_for_pickup' ? 'default' : 'secondary'}>
                        {order.status === 'ready_for_pickup' ? 'Ready for Pickup' : 'Preparing'}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <div className="flex items-start gap-2 mb-2">
                          <MapPin className="w-4 h-4 mt-1 text-primary" />
                          <div>
                            <p className="font-medium text-sm">Pickup</p>
                            <p className="text-sm text-muted-foreground">{order.pickupAddress}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Navigation className="w-4 h-4 mt-1 text-success" />
                          <div>
                            <p className="font-medium text-sm">Delivery</p>
                            <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{order.pickupTime} → {order.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm">₹{order.amount} + ₹{order.deliveryFee} delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{order.customerPhone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {order.status === 'ready_for_pickup' ? (
                        <Button 
                          variant="delivery" 
                          className="flex-1"
                          onClick={() => handlePickup(order.id)}
                        >
                          Mark as Picked Up
                        </Button>
                      ) : (
                        <Button variant="secondary" className="flex-1" disabled>
                          Waiting for Preparation
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Navigation className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-gradient-card">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-2">No pending orders</h3>
                <p className="text-muted-foreground">
                  {isOnline ? "Stay online to receive new delivery requests" : "Turn online to start receiving orders"}
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Today's Completed Orders */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Today's Completed Orders</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completedOrders.map((order) => (
              <Card key={order.id} className="bg-gradient-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium">{order.orderNumber}</p>
                      <p className="text-sm text-muted-foreground">Completed at {order.completedAt}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="font-medium">₹{order.deliveryFee}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {"★".repeat(order.rating).padEnd(5, "☆")}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;