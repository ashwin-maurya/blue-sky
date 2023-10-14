import React from "react";

export default function BlogCardSkeleton() {
  return (
    <>
      <div
        role="status"
        class="p-6 w-[80%] max-lg:w-[95%] rounded-lg divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6  my-4"
      >
        <div class="flex justify-between">
          <div className="w-full pr-4 flex flex-col ">
            <div class="w-32 h-3 mb-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
            <div class="h-4 bg-gray-300 rounded-full dark:bg-gray-600 w-full mb-2.5"></div>
          </div>
          <div class="h-20 w-[30%] bg-gray-300 rounded-lg dark:bg-gray-700"></div>
        </div>
        <div className="flex pt-2">
          <div class="w-20 h-8 mb-2.5 my-2 mx-1  bg-gray-200 rounded-lg dark:bg-gray-700"></div>
          <div class="w-20 h-8 mb-2.5 my-2 mx-1  bg-gray-200 rounded-lg dark:bg-gray-700"></div>
        </div>
      </div>
    </>
  );
}