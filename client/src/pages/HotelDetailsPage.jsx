import { useState } from "react";

import {
  Check,
  ChevronLeft,
  Coffee,
  MapPin,
  Utensils,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { assets } from "@/assets/assets";

export const HotelDetailsPage = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);

  // Mock hotel data
  const hotel = {
    id: "1",
    name: "Olympic Grand Hotel",
    description:
      "Located just 500 meters from the Olympic Stadium, this luxury hotel offers comfortable rooms, excellent amenities, and easy access to all Olympic venues. Enjoy our rooftop pool with panoramic views of the Olympic Park.",
    location: "500m from Olympic Stadium",
    address: "123 Olympic Boulevard, Olympic Park",
    price: 250,
    rating: 4.8,
    image: assets.placeholderUrl,
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Restaurant", icon: Utensils },
      { name: "Breakfast", icon: Coffee },
      { name: "Air Conditioning", icon: Check },
      { name: "24/7 Reception", icon: Check },
      { name: "Gym", icon: Check },
      { name: "Swimming Pool", icon: Check },
      { name: "Parking", icon: Check },
    ],
    rooms: [
      { type: "Standard Room", price: 250, capacity: 2 },
      { type: "Deluxe Room", price: 350, capacity: 2 },
      { type: "Family Suite", price: 450, capacity: 4 },
    ],
  };

  function handleBooking(e) {
    e.preventDefault();
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link to="/hotels">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to Hotels
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        <div className="lg:col-span-2 space-y-6">
          <img
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
          />

          <div>
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{hotel.address}</span>
            </div>
            <p className="text-gray-700 mt-4">{hotel.description}</p>
          </div>

          <Tabs defaultValue="amenities" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
            </TabsList>
            <TabsContent
              value="amenities"
              className="p-4 border rounded-md mt-2"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="rooms" className="p-4 border rounded-md mt-2">
              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 border rounded-md"
                  >
                    <div>
                      <h3 className="font-semibold">{room.type}</h3>
                      <p className="text-sm text-gray-500">
                        Up to {room.capacity} guests
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${room.price}</div>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Book Your Stay</CardTitle>
            <CardDescription>Check availability and rates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Label>Check-in Date</Label>
            <Input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />

            <Label>Check-out Date</Label>
            <Input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />

            <Label>Guests</Label>
            <Input
              type="number"
              min={1}
              max={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={handleBooking}
              disabled={!checkInDate || !checkOutDate}
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
