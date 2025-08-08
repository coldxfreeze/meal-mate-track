import { Button } from "@/components/ui/button";
import { UserTypeSelector } from "@/components/UserTypeSelector";
import tiffinHero from "@/assets/tiffin-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tiffinHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Tiffin Track
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Connect home cooks with hungry customers. Fresh, homemade meals delivered to your doorstep.
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('user-types')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* User Type Selection */}
      <section id="user-types" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How do you want to use Tiffin Track?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your role and start your journey with delicious home-cooked meals
            </p>
          </div>
          
          <UserTypeSelector />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Tiffin Track?
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Home-Cooked Quality</h3>
              <p className="text-muted-foreground">Fresh, healthy meals prepared with love in home kitchens</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick and reliable delivery to your location</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p className="text-muted-foreground">Delicious meals at pocket-friendly prices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;