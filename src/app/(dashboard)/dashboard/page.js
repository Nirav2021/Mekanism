"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function DashboardHomePage() {
    const [apiData, setApiData] = useState([]);
    const [apiSearchedData, setApiSearchedData] = useState([]);
    const [search, setSearch] = useState("");

    const apiCall = useCallback(async () => {
        const data = await fetch(`/api/meka/list`);
        const finalData = await data.json();

        const filterData = finalData.filter((ele, index) => index < 5);

        setApiData(finalData);
        setApiSearchedData(filterData);
    }, []);

    console.log(44, apiData);

    const searchFilter = (value) => {
        if (value === "") {
            const filterData = apiData.filter((ele, index) => index < 5);

            setApiSearchedData(filterData);
        } else {
            const filterData = apiData.filter((ele, index) =>
                ele?.first_name?.toLowerCase().includes(value?.toLowerCase()),
            );
            const filterDataNew = filterData.filter((ele, index) => index < 5);
            setApiSearchedData(filterDataNew);
        }
    };

    useEffect(() => {
        apiCall();
    }, [apiCall]);

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 h-screen">
                <div className="text-5xl font-bold">My Contacts</div>

                <div className="">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        minLength="4"
                        maxLength="8"
                        size="35"
                        style={{ border: "1px solid" }}
                        className="h-[35px] rounded-lg"
                        placeholder="Search"
                        onChange={(e) => searchFilter(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    {apiSearchedData.length === 0 ? (
                        <>No Record Found</>
                    ) : (
                        <>
                            {apiSearchedData.map((ele, index) => {
                                return (
                                    <div
                                        key={`${ele.title}-${index}`}
                                        className="flex gap-5"
                                    >
                                        <div>
                                            <Image
                                                alt=""
                                                src={ele.avatar}
                                                width={50}
                                                height={50}
                                            ></Image>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="">
                                                {ele.first_name +
                                                    " " +
                                                    ele.last_name}
                                            </div>
                                            <div className="">{ele.mobile}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
