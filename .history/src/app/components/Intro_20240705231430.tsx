"use client";
import React from "react";
import { PageBlocksIntro } from "tina/__generated__/types";
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from "tinacms/dist/react";

export default function Intro(props: PageBlocksIntro) {
	return (
		<>
		<hr className="line-vr-section" />
		<section className="team section-padding">
			<div className="container">
				<div className="row mb-30">
					<div className="section-head col-md-12 text-center">
						<div className="section-subtitle">Michael Corker</div>
						<div className="section-title white">Visual <span>Artist</span></div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div>
							<div className="item right">
								<figure>
									<img src="img/team/7.jpg" alt="" className="img-fluid" />
								</figure>

                      h6: props => <h6 {...props }/>,
                      bold: props => <span className="text-style" { ...props }/>,



								<div className="caption padding-left" data-tina-field={tinaField(props, "intro")}>
									<TinaMarkdown content={ props.intro } components={{
										h4: props => <h4 className="name" {...props }/>,
										h6: props => <h6 className="subname" {...props }/>
									<p>
										Tattoo aliquet miss orci elit gene on tristique in the dream
										vitaen aliuam lorem tincidunt felis sed gravida aliquam the
										neque miss blue hendren mavition duru sapien mana amenta the
										mollis.
									</p>
									}} />
									<a href="/about" className="btn-curve btn-1 mt-10"
										><span>Learn More</span></a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	)
}
