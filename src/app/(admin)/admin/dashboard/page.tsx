import { ChartPieDonutText } from "@/components/admin/dashboard/chart-pie-donut";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="w-1/4 h-40 border border-gray-200 bg-linear-to-t from-gray-100 to-gray-50 rounded-lg"></div>
        <div className="w-1/4 h-40 border border-gray-200 bg-linear-to-t from-gray-100 to-gray-50 rounded-lg"></div>
        <div className="w-1/4 h-40 border border-gray-200 bg-linear-to-t from-gray-100 to-gray-50 rounded-lg"></div>
        <div className="w-1/4 h-40 border border-gray-200 bg-linear-to-t from-gray-100 to-gray-50 rounded-lg"></div>
      </div>

      <div className="flex gap-4">
        <ChartPieDonutText className="w-74.5" />

        <div className="flex-1 h-120 border border-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
