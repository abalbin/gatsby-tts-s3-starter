module.exports = {
	flags: {
		DEV_SSR: false,
	},
	siteMetadata: {
		title: `Gatsby TTS S3 Starter`,
		description: `This barebones starter ships with a main configuration to start your project using Typescript, TailwindCSS and Styled Components. Also, has support for deploying your site in AWS S3.`,
		author: `@abalbin`,
		envname: process.env.ENVNAME || "dev"
	},
	plugins: [
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: process.env.DEPLOY_BUCKET || "fake-bucket-name",
				region: "some-region",
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-postcss`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-tts-s3-starter`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
	],
}
