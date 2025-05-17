import React, { useEffect, useState } from "react";
import CardTourGuide from "../components/CardTourGuide";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Breadcrumb from "../components/Breadcrumb";
import { useUsers } from "../hooks/useUsers";

const TourGuidePage = () => {
  const { users, totalPages, getListUsers, counter, setCounter } = useUsers();
  const [searchItem, setSearchItem] = useState("");

  const filteredData = users?.filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchItem.toLowerCase()) ||
      item.email.toLowerCase().includes(searchItem.toLowerCase())
  );

  useEffect(() => {
    getListUsers(counter);
  }, [counter]);

  if (!users) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 px-6">
        <div className="w-full max-w-4xl mt-8 flex flex-col items-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }]} />
          <SearchInput
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Cari user..."
            autoFocus
          />
          <Pagination
            currentPage={counter}
            totalPages={totalPages}
            onPageChange={setCounter}
          />
        </div>
        <div className="w-full max-w-4xl grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
          {filteredData?.length > 0 ? (
            filteredData.map((user) => (
              <CardTourGuide user={user} key={user.id} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Tidak ada user yang cocok.
            </p>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TourGuidePage;
