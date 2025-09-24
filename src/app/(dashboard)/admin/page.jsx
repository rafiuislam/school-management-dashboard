import AttendenceChart from "@/app/components/AttendenceChart";
import CountChart from "@/app/components/CountChart";
import EventCalender from "@/app/components/EventCalender";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex justify-between gap-4 flex-wrap">
          {/* type="student" */}
          <UserCard type="student" />
          {/* type="teacher" */}
          <UserCard type="teacher" />
          {/* type="parent" */}
          <UserCard type="parent" />
          {/* type="stuff" */}
          <UserCard type="stuff" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendence chart */}
          <div className="w-full lg:w-2/3  h-[450px]">
            <AttendenceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
      </div>
    </div>
  );
};

export default AdminPage;
