// Partner logos shown in the moving marquee (home + about).
// Files live in public/images/partners/ — the display name is the logo file name.
export interface Partner { name: string; src: string; }

export const PARTNERS: Partner[] = [
	{
		name: "HAS University of Applied Sciences",
		src: "/images/partners/has-university-of-applied-sciences.png"
	},
	{
		name: "Limburg",
		src: "/images/partners/limburg.png"
	},
	{
		name: "European Union",
		src: "/images/partners/european-union.png"
	},
	{
		name: "Food Insights",
		src: "/images/partners/food-insights.png"
	},
	{
		name: "Kuijperskip",
		src: "/logo.png"
	},
	{
		name: "Kloek",
		src: "/images/partners/kloek.jpg"
	},
	{
		name: "MR",
		src: "/images/partners/mr.jpg"
	}
];
