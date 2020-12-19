import React from "react";
import { Helmet } from "react-helmet";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import "./note-style.css"
import Layout from "../../../components/layout"


//function to replace hyphens and capitalize first letter of every word
    // function display(str)
    // {
    //   str = str.replace(/-/g, " ");
    //   str = str.split(" ");
    //
    //   for (let i = 0, x = str.length; i < x; i++) {
    //       str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    //   }
    //
    //   return str.join(" ");
    // }

const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  let tags = [];
  if (note.inboundReferencePreviews !== null) {
    references = note.inboundReferencePreviews.map((ref) => (
      <li key = {ref.source}>
        <a href={ref.source}>{ref.name}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          {/*<h2 id="linked-references">Linked References</h2>*/}
          <ul>{references}</ul>
        </>
      );
    }
  }

  let externalRefBlock = [];
  if (note.externalInboundReferences !== null) {
    let refs = note.externalInboundReferences.map((ref) => (
      <li>
        <b><a href={ref.sourceUrl}>
          {ref.siteName}/{ref.sourcePage}
        </a></b>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));
    if (refs.length > 0) {
      externalRefBlock = (
        <>
          <h2 id="external-references">External References</h2>
          <ul>{refs}</ul>
        </>
      );
    }
  }

  tags = note.linkifiedTags.map((tag) => (
    <span key={tag.hashtag}><a href={tag.sourceUrl}>{tag.hashtag}</a> &nbsp;</span>
  ));
  console.log("tags" + tags);
  // replace the note's title with a string if hyphenated
  //let displayName = display(note.title);


  return (
<Layout>
<div>
    <Helmet>
      <title>
        {note.title}
      </title>
    </Helmet>

    <div id="brainNote">
    <div className="container-left">
      <h1 id="note-title">{note.title}</h1>
      <div className="meta-data">
          {tags.length !== 0 && <h2 id="tags">Tags: {tags}</h2>}
          {note.date !== null && <h2 id="date">Date: {note.date}</h2>}
      </div>
    </div>
      <div className="container-right">
        {note.childMdx.rawBody !== "" && <div id="child-body"><MDXRenderer>{note.childMdx.body}</MDXRenderer></div>}
        <div className="reference-block"> {referenceBlock}
        {externalRefBlock} </div>
      </div>
    </div>
</div>
</Layout>
  );
};

export default BrainNote;
