import UserCard from "@/app/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full lg:w-2/3 bg-red-500">
        {/* USER CARD */}
        <div className="flex justify-between gap-4">
          {/* type="student" */}
          <UserCard type="student" />
          {/* type="teacher" */}
          <UserCard type="teacher" />
          {/* type="parent" */}
          <UserCard type="parent" />
          {/* type="stuff" */}
          <UserCard type="stuff" />
        </div>
      </div>
      <div className="w-full lg:w-1/3 bg-amber-500">R</div>
    </div>
  );
};

export default AdminPage;
