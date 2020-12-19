import React from "react"
import { Helmet } from "react-helmet";
import "./all-pages.css"

const AllPages = ({ brainNotes }) => {
  let notes = [];

  // console.log(brainNotes);
  notes = brainNotes.nodes.map((note) => (
    <>
        <li key={note.id} className="index-item">
          <span className="link-container">
            <a className="link" href={"/notes/"+note.slug}>{note.title}</a>
            <sup> {note.inboundReferences.length} </sup>
          </span>
          <span className="date"> {note.date} </span>
          <hr className="index-rule"/>
        </li>
    </>
  ));

  return (
    <>
    <Helmet>
      <title>
        All Pages
      </title>
    </Helmet>
      <h1 id="all-pages-title"> All Pages </h1>
      <div id="notes-container"> {notes} </div>
    </>
    );
};

export default AllPages;
