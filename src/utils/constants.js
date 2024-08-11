export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg"
export const USER_AVATAR = "https://media.licdn.com/dms/image/D5635AQG9CaJKG3Yspg/profile-framedphoto-shrink_100_100/0/1719451336209?e=1723464000&v=beta&t=vPSeqmzdvHZyiT3riLVEaX1BENuBgl-Wx984319_fn0"
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
// export const 

//GET shows
export const getNowPlayingMovies_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1"
export const getPopularMovies_URL = "https://api.themoviedb.org/3/movie/popular?page=1"
export const getTopRatedMovies_URL = "https://api.themoviedb.org/3/movie/top_rated?page=1"
export const getUpcomingMovies_URL = "https://api.themoviedb.org/3/movie/upcoming?page=1"

export const API_OPTIONS = {
	method: 'GET',
	headers: {
	  accept: 'application/json',
	  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTViYmIzZGE0NTU3NTQxYTMwYWJmOTQ0MzUwYjdmZSIsIm5iZiI6MTcyMzAwNDQyNy4yNDI2OTgsInN1YiI6IjY2YjJmMWQ4NDM3ZjVkNTY3YTUxODQyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5q6Oou6s78fWjvSw3ciYZJYrLpt_EC_JT6IOqkQZ_dA'
	}
  };
  