// Default import syntax, without "type": "module" in package.json and NodeNext resolution, work fine.
//
// import blockContent from './blockContent'
// import crewMember from './crewMember'
// import castMember from './castMember'
// import movie from './movie'
// import person from './person'
// import screening from './screening'
// import plotSummary from './plotSummary'
// import plotSummaries from './plotSummaries'

// Correcting the imports as dictated by TypeScript cause failures on schema extraction.
import blockContent from './blockContent.js'
import crewMember from './crewMember.js'
import castMember from './castMember.js'
import movie from './movie.js'
import person from './person.js'
import screening from './screening.js'
import plotSummary from './plotSummary.js'
import plotSummaries from './plotSummaries.js'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
