import React from "react";
import { Avatar, AvatarSize } from "./index";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
	title: "Components/Avatar",
	component: Avatar,
	decorators: [withKnobs],
};

type AvatarSizeType = keyof typeof AvatarSize;

export const knobsAvatar = () => (
	<Avatar
		size={select<AvatarSizeType>(
			"size",
			Object.keys(AvatarSize) as AvatarSizeType[],
			"medium"
		)}
		username={text("username", "zhangyanling77")}
		src={text(
			"src",
			"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		)}
		isLoading={boolean("isLoading", false)}
	/>
);

export const large = () => (
	<div>
		<Avatar isLoading size="large" />
		<Avatar size="large" username="zhangyanling77" />
		<Avatar
			size="large"
			username="zhangyanling77"
			src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		/>
	</div>
);

export const medium = () => (
	<div>
		<Avatar isLoading />
		<Avatar username="中文" />
		<Avatar
			username="zhangyanling77"
			src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		/>
	</div>
);

export const small = () => (
	<div>
		<Avatar isLoading size="small" />
		<Avatar size="small" username="zhangyanling77" />
		<Avatar
			size="small"
			username="zhangyanling77"
			src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		/>
	</div>
);

export const tiny = () => (
	<div>
		<Avatar isLoading size="tiny" />
		<Avatar size="tiny" username="zhangyanling77" />
		<Avatar
			size="tiny"
			username="zhangyanling77"
			src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		/>
	</div>
);
