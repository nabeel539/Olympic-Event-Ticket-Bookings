/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { assets } from "@/assets/assets";

// / Mock data for hotels
const hotels = [
  {
    id: 1,
    name: "Olympic Grand Hotel",
    location: "500m from Olympic Stadium",
    price: 250,
    rating: 4.8,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Pool", "Gym", "Restaurant"],
  },
  {
    id: 2,
    name: "Aquatic View Inn",
    location: "300m from Olympic Aquatics Centre",
    price: 180,
    rating: 4.5,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Breakfast", "Parking"],
  },
  {
    id: 3,
    name: "Stadium Plaza Hotel",
    location: "200m from Olympic Stadium",
    price: 220,
    rating: 4.6,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Pool", "Spa", "Restaurant"],
  },
  {
    id: 4,
    name: "Olympic Village Suites",
    location: "100m from Olympic Village",
    price: 300,
    rating: 4.9,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Kitchen", "Gym", "Concierge"],
  },
  {
    id: 5,
    name: "Gymnastics View Hotel",
    location: "400m from Olympic Gymnastics Centre",
    price: 190,
    rating: 4.3,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Breakfast", "Parking"],
  },
  {
    id: 6,
    name: "Olympic Park Inn",
    location: "In Olympic Park",
    price: 270,
    rating: 4.7,
    image: assets.placeholderUrl,
    amenities: ["Free WiFi", "Pool", "Restaurant", "Bar"],
  },
];

export const HotelsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    rating: "any",
    amenities: [],
    distance: "any",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAmenity = (amenity) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const filteredHotels = hotels.filter((hotel) => {
    return (
      (hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filters.minPrice === "" || hotel.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === "" || hotel.price <= parseInt(filters.maxPrice)) &&
      (filters.rating === "any" || hotel.rating >= parseInt(filters.rating)) &&
      (filters.amenities.length === 0 ||
        filters.amenities.every((a) => hotel.amenities.includes(a))) &&
      (filters.distance === "any" ||
        hotel.distance <= parseInt(filters.distance))
    );
  });

  return (
    <div className="container py-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Hotels</h1>
          <p className="text-gray-500">
            Find accommodations near Olympic venues
          </p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Search hotels..."
              className="pl-8 p-2 border rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Hotels</SheetTitle>
                <SheetDescription>
                  Find the perfect accommodation for your stay
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <Label>Price Range (per night)</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      onChange={(e) =>
                        handleFilterChange("minPrice", e.target.value)
                      }
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      onChange={(e) =>
                        handleFilterChange("maxPrice", e.target.value)
                      }
                    />
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("rating", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Rating</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Amenities</Label>
                  <div className="space-y-2">
                    {[
                      "Free WiFi",
                      "Pool",
                      "Gym",
                      "Restaurant",
                      "Breakfast",
                      "Parking",
                      "Spa",
                    ].map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center space-x-2"
                      >
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              <input
                                type="checkbox"
                                checked={filters.amenities.includes(amenity)}
                                className="mr-2"
                                readOnly
                              />
                              {amenity}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuCheckboxItem
                              checked={filters.amenities.includes(amenity)}
                              onCheckedChange={() => toggleAmenity(amenity)}
                            >
                              {amenity}
                            </DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Distance to Venue</Label>
                  <Select
                    onValueChange={(value) =>
                      handleFilterChange("distance", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Distance</SelectItem>
                      <SelectItem value="500">Less than 500m</SelectItem>
                      <SelectItem value="1000">Less than 1km</SelectItem>
                      <SelectItem value="2000">Less than 2km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      setFilters({
                        minPrice: "",
                        maxPrice: "",
                        rating: "any",
                        amenities: [],
                        distance: "any",
                      })
                    }
                  >
                    Reset
                  </Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{hotel.name}</h2>
                <p className="text-gray-500">{hotel.location}</p>
                <p className="text-lg font-bold">${hotel.price} per night</p>
                <Link
                  to={`/hotels/${hotel.id}`}
                  className="block text-center bg-black text-white py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No hotels match your criteria.
          </p>
        )}
      </div>
    </div>
  );
};
