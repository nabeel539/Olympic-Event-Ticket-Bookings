import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Medal,
  Search,
  Ticket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { assets } from "@/assets/assets";

const LandingPage = () => {
  const featuredEvents = [
    {
      id: 1,
      title: "Swimming Finals",
      location: "Olympic Aquatics Centre",
      date: "August 2, 2024",
      image: assets.placeholderUrl,
      category: "Swimming",
    },
    {
      id: 2,
      title: "Athletics 100m Final",
      location: "Olympic Stadium",
      date: "August 4, 2024",
      image: assets.placeholderUrl,
      category: "Athletics",
    },
    {
      id: 3,
      title: "Gymnastics All-Around",
      location: "Olympic Gymnastics Centre",
      date: "August 6, 2024",
      image: assets.placeholderUrl,
      category: "Gymnastics",
    },
    {
      id: 4,
      title: "Basketball Finals",
      location: "Olympic Basketball Arena",
      date: "August 10, 2024",
      image: assets.placeholderUrl,
      category: "Basketball",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold md:text-6xl">
            Olympic Event Ticket Booking
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 md:text-xl">
            Book your tickets for the Olympic Games and witness history in the
            making.
          </p>
          <div className="relative w-full max-w-sm mx-auto mt-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search events..."
              className="pl-8 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-white"
            />
          </div>
          <div className="mt-4 space-x-4">
            <Button
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/events">Browse Events</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-blue-600 hover:text-black hover:bg-white/10"
            >
              <Link to="/hotels">Find Hotels</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-gray-50 max-w-screen-xl mx-auto">
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center">Featured Events</h2>
          <p className="py-2 text-gray-500 font-medium text-lg text-center">
            Explore and book tickets for the most anticipated Olympic events.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <Medal className="h-4 w-4" /> {event.category}
                  </div>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" /> {event.location}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" /> {event.date}
                  </div>
                </CardContent>
                <CardFooter className="p-4">
                  <Button asChild className="w-full">
                    <Link to={`/events/${event.id}`}>
                      Book Tickets <Ticket className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/events">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 max-w-screen-xl mx-auto">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Ticket className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Easy Booking</h3>
              <p className="text-gray-500">
                Book your Olympic event tickets in just a few clicks with our
                streamlined booking process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Hotel Booking</h3>
              <p className="text-gray-500">
                Find and book accommodations near Olympic venues for a
                convenient stay.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Event Schedule</h3>
              <p className="text-gray-500">
                Access the complete Olympic event schedule and plan your visit
                accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 text-center bg-blue-50 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold">
          Ready to Experience the Olympics?
        </h2>
        <p className="text-gray-500">
          Create an account to book tickets and manage your Olympic experience.
        </p>
        <div className="space-x-4 mt-4">
          <Button asChild>
            <Link to="/auth/register">Create Account</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/auth/login">Sign In</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
