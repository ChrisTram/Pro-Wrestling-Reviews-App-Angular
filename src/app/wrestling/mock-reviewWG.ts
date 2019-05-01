import { Review } from './review';
//utilisation du mock à nouveau, le node js c'est bien mais pas sur un serveur mutualisé...
export const REVIEWS: Review[] = [
	////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////MIX 2019/////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////
    {
        id: 19,
        name: "WM Week-End 2019 4*+",
        date: 2019,
        driveLink: "https://docs.google.com/document/d/1tmeOE4vZlkNeKrBphHcTjOVr1ZSHFvQd9tAfAi3U6GU",
        img: "WWEWM34",
        type: "LISTE 4*+",
        types: ["LISTE 4*+"],
      },
      {
		id:401,
		name: "4*+ 2019",
		date: 2019,
		driveLink:"https://docs.google.com/document/d/1_KjSkaNZnWcKs8xT3iYaKijP_BEedT5JkDD4CmwWBRk/edit?usp=sharing",
		img:"4starslist",
		type:"LISTE 4*+",
		types: ["LISTE 4*+"],
	},

    {
        id:8,
        name: "AJPW Champion Carnival 2019",
        date: 2019,
        driveLink:"https://docs.google.com/document/d/1r26hZ4dlE55ZqNr58kMm3qIIKtFFvRlimgmb3cBOPFE/edit?usp=sharing",
        img:"AJPW",
        type:"JAP",
        types: ["JAP", "AJPW"],
    },
	////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////MIX 2018/////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////
    {
		id:402,
		name: "4*+ 2018",
		date: 2018,
		driveLink:"https://docs.google.com/document/d/1ansfuQ0CVpVei0IyfiWfWAJNW-45_3YqTtlDCaCRc-Q/edit?usp=sharing",
		img:"4starslist",
		type:"LISTE 4*+",
		types: ["LISTE 4*+"],
    },
]
