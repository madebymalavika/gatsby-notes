# Gatsby-Theme-Brain Spinoff

### Note: This Theme Requires NodeJS v12

If you encounter an error along the lines of `content.matchAll(...) is not a function`, you will need to update your version of node to version 12.

## Original Features
- Double square bracket linking
- Case insensitivity
- Add Frontmatter for titles and aliases

##Added Features
- All Pages component
  [[All Pages]] directs you to a single page within the root folder that contains a list of all the written and created pages. Date and number of times that page has been referred are displayed.
- Extract Tags from Frontmatter
  Tags are "linkified" and extracted when they are in the frontmatter, separate pages are created for each tag so they can be backlinked as well.
- Custom styling

## Options
rootPath: "notes/",
rootNote: "index",
notesDirectory: "content/notes/",
graphOverviewPath: "notes/graph-overview",
linkifyHashtags: true,


## Usage

| Option                   | Default Value                           | Description                                                                                                                                                                                                                                       |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notesDirectory`         | "content/brain/"                        | Directory containing your brain note files                                                                                                                                                                                                        |
| `notesFileExtensions`    | `[".md", ".mdx"]`                       | File extensions that will be used to generate pages.                                                                                                                                                                                              |
| `exclude`                | `[]`                                    | List of strings or regular expressions. Notes files whose names match these will be ignored.
| `noteTemplate`           | "./templates/brain.js"                  | Template to use for note rendering                                                                                                                                                                                                                |
| `additionalNoteTypes`    | `{}`                                    | Additional note types. This should be a mapping from a type string to a template path. (for example, {"evergreen": "./templates/evergreen.js"} would allow you to declare `noteType: "evergreen"` in your frontmatter to use that other template) |
| `rootPath`               | "brain"                                 | Set the root url for the brain on your site (e.g. in this case https://example.com/brain)                                                                                                                                                         |
| `rootNote`               | "brain"                                 | Name of the 'index' note. So in this case brain.md would generate the root page of the brain                                                                                                                                                      |
| `generateSlug`           | `(filename) => slugify(filename)`       | Function used to turn the filename of a note into its resulting slug (path)                                                                                                                                                                       |
| `graphOverviewTemplate`  | "./templates/graph-overview.js"         | Template to use for the graph overview                                                                                                                                                                                                            |
| `graphOverviewPath`      | "graph-overview"                        | The route for the graph overview (e.g. in this case https://example.com/graph-overview)                                                                                                                                                           |
| `linkifyHashtags`        | false                                   | Set to true if you want text such as `#Test` to be automatically converted into a page and link.                                                                                                                                                  |
| `hideDoubleBrackets`     | false                                   | Set to true if you want `[[Page]]` to show up as `Page` without the double brackets                                                                                                                                                               |
| `mdxOtherwiseConfigured` | false                                   | Used to workaround a bug in gatsby-plugin-mdx (see https://github.com/ChristopherBiscardi/gatsby-mdx/issues/354). Set to true if you have already configured mdx                                                                                  |
| `generateRSS`            | false                                   | Enable this to generate an RSS feed from all notes with syndicate: true in the frontmatter. If you want to test this locally you will need to do `gatsby build` and then `gatsby develop`.                                                        |
| `rssPath`                | "/brainrss.xml"                         | Adjust this to set the path of the generated RSS feed xml file                                                                                                                                                                                    |
| `rssTitle`               | "gatsby-theme-brain generated rss feed" | Adjust this to set the title of the generated RSS feed                                                                                                                                                                                            |
| `generateBrainMap`       | false                                   | Set to true to generate a map for external subscribing                                                                                                                                                                                            |
| `brainBaseUrl`           | ""                                      | Configure the base url for the gatsby-theme-brain section of your site. Used by the brain map subscribers to generate links.                                                                                                                      |
| `brainMapPath`           | "static/brainmap.json"                  | Set the path on your site where the brainmap json file will be generated                                                                                                                                                                          |
| `mappedExternalBrains`   | {}                                      | Set to an object mapping from a name that will be used in the links (e.g. [[name/somepage]]), to the url for the external brainmap                                                                                                                |
| `timerReloadDelay`       | 0                                       | Change to something greater than 0 to enable automatic reloading of the map. This is useful when subscribed to other sites to regenerate those references. Value is in milliseconds, so 6000000 would regenerate your site every 10 minutes.      |
