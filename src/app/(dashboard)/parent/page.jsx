import BigCalendar from "../../components/BigCalender";
import Announcements from "../../components/Announcements";
// import EventCalender from "../../components/EventCalender";

const ParentPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row p-4 gap-4">
      {/* left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8 ">
        {/* <EventCalender /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
