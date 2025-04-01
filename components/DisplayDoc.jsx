import { useState } from "react";
export default function DisplayDoc({ doc }) {
 const [isExpanded, setIsExpanded] = useState(true);
 return (
  <div key={doc.id} className="border-b-4 p-4 mb-4 border-blue-400">
   <button onClick={() => setIsExpanded(!isExpanded)}>
    <h2 className="text-xl font-semibold">{doc.titre}</h2>
   </button>
   {isExpanded ? (
    <div>
     <p className="text-sm text-gray-500">
      <span className="font-semibold">Auteur:</span> {doc.auteur}
     </p>
     <p className="text-sm text-gray-500">
      <span className="font-semibold">Année:</span> {doc.annee}
     </p>
     <p className="text-sm text-gray-500">
      <span className="font-semibold">Genre:</span> {doc.genre}
     </p>
     <p className="text-sm text-gray-500">{doc.description}</p>
    </div>
   ) : (
    <div>No Expended</div>
   )}
  </div>
 );
}
