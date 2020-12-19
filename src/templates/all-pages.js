import React from "react";
import { graphql } from "gatsby";

import AllPages from "../components/AllPages";


export default (props) => {
  return <AllPages brainNotes={props.data.brainNotes}/>;
};

export const query = graphql`
query AllPages($excludePage : String!) {
brainNotes: allBrainNote (
  sort: {fields: [title], order: ASC}, filter: {slug: {ne: $excludePage}}) {
  nodes {
    title
    slug
    date
    id
    inboundReferences
  }
 }
}
`;

// export const query = graphql`
// query AllPages {
//   brainNotes: allBrainNote (
//     sort: {
//       fields: [title]
//       order: ASC
//     }
//   )
// 	 {
//     nodes {
//       title
//       slug
//       date
//       id
//       inboundReferences
//     }
//   }
// }
// `;
