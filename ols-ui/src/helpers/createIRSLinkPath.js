export default (href, langCode) => {
  const irs = 'https://www.irs.gov';
  return langCode ? `${irs}${href}` : `${irs}${href}`;
};
  
