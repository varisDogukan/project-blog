"use client";

import dynamic from "next/dynamic";

// Eğer çağırıldığı yerdeki bileşen içerisinde bu bileşen varsa yükle
const DivisionGroupsDemo = dynamic(() => import("./DivisionGroupsDemo"));

export default DivisionGroupsDemo;
