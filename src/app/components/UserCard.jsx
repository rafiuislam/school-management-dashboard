import Image from "next/image";

const UserCard = ({ type }) => {
  return (
    <div className="flex-1 rounded-2xl odd:bg-cSky even:bg-cYellow p-4 min-w-[130px]">
      <div className="flex items-center justify-between mb-4 ">
        <span className="text-[10px] px-2 py-1 bg-white rounded-full text-green-600">
          2025/25
        </span>
        <Image
          src="/more.png"
          alt="avatar icon"
          width={20}
          height={20}
          className="rounded-full"
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
