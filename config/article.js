export default () => ({ // eslint-disable-line

  // link file UUID
  id: '',

  // canonical URL of the published page
  // https://ig.ft.com/senators-table get filled in by the ./configure script
  url: 'https://ig.ft.com/senators-statements-on-comey/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'How Senators reacted to Comey dismissal',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Whether Republicans cross party lines may determine what happens next ',

  topic: {
    name: 'US Politics & Policy',
    url: 'https://www.ft.com/world/us/politics',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: 'https://image.webservices.ft.com/v1/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2Fc4bf0be4-7c15-11e4-a7b8-00144feabdc0?source=ig&fit=scale-down&width=700',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Lauren Leatherby', url: 'https://www.ft.com/lauren-leatherby' },
  ],

  // Appears in the HTML <title>
  title: 'How Senators reacted to Comey dismissal',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
