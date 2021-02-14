import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export interface IProps {
	description?: string;
	lang?: string;
	meta?: {
		property: string;
		content: string;
	}[];
	title: string;
}

export function SEO({ description, lang, meta, title }: IProps) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						envname
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const defaultTitle = site.siteMetadata ? site.siteMetadata.title : "Gatsby TTS S3 Starter";
	const envname = site.siteMetadata.envname || "dev";

	if (envname === "dev") {
		return (
			<Helmet
				htmlAttributes={{
					lang,
				}}
				title={title}
				titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
				meta={[
					{
						name: `robots`,
						content: "noindex",
					},
				]}
			/>
		);
	}

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : "%s"}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata?.author || ``,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta || [])}
		/>
	);
}
