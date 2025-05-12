import { useEffect } from "react";
import { UserCircle2 } from "lucide-react";
import PageMeta from "../../components/common/PageMeta";

export default function Dashboard() {

  useEffect(() => {
    // Fetch the dashboard analytics when the component mounts
    const fetchData = async () => {
      // TODO: Replace with your actual API endpoint
    };

    fetchData();
  }, []);

  return (
    <>
      <PageMeta
        title="Etims Crato - Dashboard"
        description="Dashboard page of the Etims Crato application"
      />
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-brand-900">Dashboard</h1>
          <p className="text-sm text-brand-500">
            Welcome back! Here&apos;s your latest activity.
          </p>
        </div>
        <UserCircle2 className="h-10 w-10 text-brand-500" />
      </div>

      <div className="grid grid-cols-12 gap-6">

      </div>
    </>
  );
}
