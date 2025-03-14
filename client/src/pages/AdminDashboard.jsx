import { Button } from "bootstrap";
import { ArrowLeft, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold text-center">Admin Dashboard</h1>
      <div className="container min-h-[calc(100vh-8rem)] py-12 flex flex-col items-center justify-center gap-2">
        <h1>Currently Under Construction</h1>
        <Wrench className="w-12 h-12" />
        <Button variant="outline" size="lg" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 ml-2" /> Return to Homepage
          </Link>
        </Button>
      </div>
    </>
  );
};

export default AdminDashboard;
