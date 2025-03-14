import { useState } from "react";
import { Calendar, MapPin, Medal, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Swimming Finals",
      location: "Olympic Aquatics Centre",
      date: "August 2, 2024",
      image: assets.placeholderUrl,
      category: "Swimming",
      price: 120,
    },
    {
      id: 2,
      title: "Athletics 100m Final",
      location: "Olympic Stadium",
      date: "August 4, 2024",
      image: assets.placeholderUrl,
      category: "Athletics",
      price: 200,
    },
    {
      id: 3,
      title: "Gymnastics All-Around",
      location: "Olympic Gymnastics Centre",
      date: "August 6, 2024",
      image: assets.placeholderUrl,
      category: "Gymnastics",
      price: 150,
    },
    {
      id: 4,
      title: "Basketball Finals",
      location: "Olympic Basketball Arena",
      date: "August 10, 2024",
      image: assets.placeholderUrl,
      category: "Basketball",
      price: 180,
    },
    {
      id: 5,
      title: "Tennis Men's Singles Final",
      location: "Olympic Tennis Centre",
      date: "August 8, 2024",
      image: assets.placeholderUrl,
      category: "Tennis",
      price: 160,
    },
    {
      id: 6,
      title: "Volleyball Women's Final",
      location: "Olympic Volleyball Arena",
      date: "August 9, 2024",
      image: assets.placeholderUrl,
      category: "Volleyball",
      price: 140,
    },
  ];

  // Filter events based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Olympic Events</h1>
          <p className="text-muted-foreground">
            Browse and book tickets for Olympic events
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search events..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
                  <Medal className="h-4 w-4" />
                  {event.category}
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-2">
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="text-lg font-bold mt-2">${event.price}</div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button asChild className="w-full">
                  <Link to={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-8 text-center border rounded-lg">
            <Search className="h-10 w-10 text-muted-foreground mb-2" />
            <h3 className="text-lg font-medium">No events found</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </div>
        )}
      </div>
    </div>
  );
}
