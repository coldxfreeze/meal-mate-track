import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CookerLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    navigate('/cooker/dashboard');
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
            <div className="mx-auto mb-4 w-16 h-16 bg-success rounded-full flex items-center justify-center">
              <ChefHat className="w-8 h-8 text-success-foreground" />
            </div>
            <CardTitle className="text-2xl">Cook Access</CardTitle>
            <CardDescription>
              Join as a cook and share your delicious home-made food
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Join as Cook</TabsTrigger>
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
                    variant="cooker" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
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
                    <Label htmlFor="kitchen">Kitchen Name</Label>
                    <Input 
                      id="kitchen" 
                      type="text" 
                      placeholder="e.g. Priya's Kitchen"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specialty">Specialty Cuisine</Label>
                    <Input 
                      id="specialty" 
                      type="text" 
                      placeholder="e.g. North Indian, South Indian"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Cooking Experience</Label>
                    <Textarea 
                      id="experience" 
                      placeholder="Tell us about your cooking experience..."
                      className="min-h-20"
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
                    variant="cooker" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Start Cooking"}
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

export default CookerLogin;