"use client";
import docList from "@/public/json/doc.json";
import DisplayDoc from "./DisplayDoc";
export default function Documents() {
 return (
  <div className="max-w-6xl justify-center mx-auto">
   <h1 className="text-3xl font-bold text-center my-8">Liste des documents</h1>
   {docList.map((document) => (
    <DisplayDoc doc={document} />
   ))}
  </div>
 );
}
