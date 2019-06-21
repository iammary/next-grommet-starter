export const getVimeoUrl = videoUrl => {
  let url = videoUrl;
  if ( videoUrl ) {
    const videoId = videoUrl.includes( "https://vimeo.com" ) ? videoUrl.replace( "https://vimeo.com", "" ) : videoUrl;
    url           = `https://vimeo.com/${ videoId }`;
  }
  return url;
};
