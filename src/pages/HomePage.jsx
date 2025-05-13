import axios from "axios";
import React, { useEffect, useState } from "react";
import CardUser from "../components/CardUser";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import { useUsers } from "../hooks/useUsers";

const HomePage = () => {
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
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="w-[50%] flex flex-col justify-center items-center mt-8">
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
          <div className="w-[50%] grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {filteredData?.length > 0 ? (
              filteredData.map((user) => <CardUser user={user} key={user.id} />)
            ) : (
              <p className="col-span-full text-center text-gray-500">
                Tidak ada user yang cocok.
              </p>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HomePage;
