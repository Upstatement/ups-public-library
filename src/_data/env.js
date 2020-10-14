let siteUrl = process.env.SITE_URL;

const netlify = !!process.env.NETLIFY;
if (netlify) {
  const context = process.env.CONTEXT; // either 'production', 'deploy-preview', or 'branch-deploy'
  if (context === 'production') {
    siteUrl = process.env.URL; // Use main URL for Netlify site
  } else {
    siteUrl = process.env.DEPLOY_PRIME_URL; // Use primary deploy URL for site
  }
}

module.exports = {
  // Whether the current build uses Netlify
  netlify,
  // Whether the current build is production
  isProd: process.env.NODE_ENV === 'production',
  // The site URL
  siteUrl,
};
