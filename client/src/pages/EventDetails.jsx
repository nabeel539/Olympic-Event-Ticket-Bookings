import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Calendar,
  ChevronLeft,
  Clock,
  MapPin,
  Medal,
  Minus,
  Plus,
  Share2,
  Ticket,
  Users,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { assets } from "@/assets/assets";

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  // Mock event data
  const event = {
    id,
    title: "Swimming Finals",
    description:
      "Watch the world's best swimmers compete for gold in the Olympic Swimming Finals. This event includes the men's and women's 100m freestyle, 200m butterfly, and 4x100m relay finals.",
    location: "Olympic Aquatics Centre",
    date: "August 2, 2024",
    time: "19:00 - 22:00",
    image: assets.placeholderUrl,
    category: "Swimming",
    price: 120,
    availableSeats: 500,
    totalSeats: 2000,
    mapLocation: "https://maps.google.com/?q=Olympic+Aquatics+Centre",
    venueInfo:
      "The Olympic Aquatics Centre features a 50m competition pool, a 25m warm-up pool, and seating for 15,000 spectators.",
    rules: [
      "No flash photography",
      "No outside food or drinks",
      "Arrive at least 30 minutes before the event",
      "No re-entry once you leave the venue",
    ],
  };

  function handleBooking() {
    navigate(`/booking/checkout?eventId=${id}&quantity=${quantity}`);
  }

  function incrementQuantity() {
    setQuantity((prev) => Math.min(prev + 1, 10));
  }

  function decrementQuantity() {
    setQuantity((prev) => Math.max(prev - 1, 1));
  }

  return (
    <div className="container py-8 max-w-screen-xl mx-auto">
      <Link to="/events" className="mb-6 flex items-center text-blue-600">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />

          <div>
            <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
              <Medal className="h-4 w-4" />
              {event.category}
            </div>
            <h1 className="text-3xl font-bold">{event.title}</h1>

            <div className="flex flex-wrap gap-4 mt-4 text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>{event.availableSeats} seats available</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="venue">Venue Info</TabsTrigger>
              <TabsTrigger value="rules">Rules</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-2">Event Description</h3>
              <p className="text-gray-700">{event.description}</p>
            </TabsContent>
            <TabsContent value="venue" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-2">Venue Information</h3>
              <p className="text-gray-700 mb-4">{event.venueInfo}</p>
              <Button variant="outline" asChild>
                <Link
                  to={event.mapLocation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Link>
              </Button>
            </TabsContent>
            <TabsContent value="rules" className="p-4 border rounded-md mt-2">
              <h3 className="text-lg font-semibold mb-2">Event Rules</h3>
              <ul className="list-disc pl-5 space-y-1">
                {event.rules.map((rule, index) => (
                  <li key={index} className="text-gray-700">
                    {rule}
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="p-4 border rounded-md">
            <h3 className="text-lg font-semibold">Book Tickets</h3>
            <p className="text-sm text-gray-500">
              Secure your spot at this event
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-medium">Price per ticket</span>
              <span className="text-lg font-bold">${event.price}</span>
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center mt-2">
                <button
                  className="border px-3 py-1"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="border px-3 py-1"
                  onClick={incrementQuantity}
                  disabled={quantity >= 10}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center font-bold mt-4">
              <span>Total</span>
              <span>${event.price * quantity}</span>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-2 mt-4 flex items-center justify-center rounded-md"
              onClick={handleBooking}
            >
              <Ticket className="mr-2 h-4 w-4" />
              Book Now
            </button>
            <button className="w-full border py-2 mt-2 flex items-center justify-center rounded-md">
              <Share2 className="mr-2 h-4 w-4" />
              Share Event
            </button>
          </div>

          <div className="p-4 border rounded-md mt-4">
            <h3 className="text-lg font-semibold">Need a place to stay?</h3>
            <p className="text-sm text-gray-500">Find hotels near the venue</p>
            <Link
              to="/hotels"
              className="block text-center w-full border py-2 mt-2 text-blue-600"
            >
              Find Hotels
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
