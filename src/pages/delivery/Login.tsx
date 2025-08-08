import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Truck, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeliveryLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    navigate('/delivery/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="bg-gradient-card shadow-medium">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-info rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-info-foreground" />
            </div>
            <CardTitle className="text-2xl">Delivery Partner</CardTitle>
            <CardDescription>
              Join our delivery team and earn while you drive
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Join Team</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="delivery" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Start Delivering"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 12345 67890"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bike">Motorcycle/Scooter</SelectItem>
                        <SelectItem value="bicycle">Bicycle</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="van">Van/Tempo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="license">Driving License Number</Label>
                    <Input 
                      id="license" 
                      type="text" 
                      placeholder="DL Number"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="area">Service Area</Label>
                    <Input 
                      id="area" 
                      type="text" 
                      placeholder="e.g. Koramangala, Indiranagar"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="delivery" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Join Team"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryLogin;