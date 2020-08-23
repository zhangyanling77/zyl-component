import React from "react";
import { Badge } from "./index";
import { withKnobs } from "@storybook/addon-knobs";
import { Icon } from '../icon';

export default {
	title: "Components/Badge",
	component: Badge,
	decorators: [withKnobs],
};

export const all = () => (
	<div>
		<Badge status="positive">Positive</Badge>
		<Badge status="negative">Negative</Badge>
		<Badge status="neutral">Neutral</Badge>
		<Badge status="error">Error</Badge>
		<Badge status="warning">Warning</Badge>
	</div>
);

export const withIcon = () => (
	<Badge status="warning">
		<Icon icon="check" />
		with icon
	</Badge>
);