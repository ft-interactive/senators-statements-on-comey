export default () => ({ // eslint-disable-line

  // link file UUID
  id: 'c18af83c-3664-11e7-bce4-9023f8c0fd2e',

  // canonical URL of the published page
  // https://ig.ft.com/senators-table get filled in by the ./configure script
  url: 'https://ig.ft.com/senators-statements-on-comey/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-05-11T23:00:00Z'),

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
    credit: 'EPA/JIM LO SCALZO',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fim.ft-static.com%2Fcontent%2Fimages%2F8b22a90a-3666-11e7-99bd-13beb0903fa3.img?source=ig&width=2048&height=1152',
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
  description: 'Whether Republicans cross party lines may determine what happens next',

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
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fim.ft-static.com%2Fcontent%2Fimages%2F8b22a90a-3666-11e7-99bd-13beb0903fa3.img?source=ig&width=700',
  socialHeadline: 'How Senators reacted to Comey dismissal',
  socialSummary:  'Whether Republicans cross party lines may determine what happens next',

  // TWITTER
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fim.ft-static.com%2Fcontent%2Fimages%2F8b22a90a-3666-11e7-99bd-13beb0903fa3.img?source=ig&width=700',
  // twitterCreator: '@individual's_account',
  tweetText:  'How Senators reacted to Comey dismissal',
  twitterHeadline:  'How Senators reacted to Comey dismissal',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fim.ft-static.com%2Fcontent%2Fimages%2F8b22a90a-3666-11e7-99bd-13beb0903fa3.img?source=ig&width=700',
  facebookHeadline: 'How Senators reacted to Comey dismissal',

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
