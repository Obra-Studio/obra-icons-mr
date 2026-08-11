import {
	IconHeart,
	IconHeartFill,
	IconBookmark,
	IconBookmarkFill,
	IconFolder,
	IconFolderFill,
	IconNotification,
	IconNotificationFill,
	IconLock,
	IconLockFill,
	IconHome,
	IconHomeFill,
	IconTag,
	IconTagFill,
	IconSettings,
	IconSettingsFill,
	IconMoon,
	IconMoonFill,
	IconRocketShip,
	IconRocketShipFill,
} from 'obra-icons-svelte';

export type IconPair = {
	name: string;
	outline: typeof IconHeart;
	filled: typeof IconHeartFill;
};

/** Curated outline/filled pairs used in the comparison view. */
export const iconPairs: IconPair[] = [
	{ name: 'Heart', outline: IconHeart, filled: IconHeartFill },
	{ name: 'Bookmark', outline: IconBookmark, filled: IconBookmarkFill },
	{ name: 'Folder', outline: IconFolder, filled: IconFolderFill },
	{
		name: 'Notification',
		outline: IconNotification,
		filled: IconNotificationFill,
	},
	{ name: 'Lock', outline: IconLock, filled: IconLockFill },
	{ name: 'Home', outline: IconHome, filled: IconHomeFill },
	{ name: 'Tag', outline: IconTag, filled: IconTagFill },
	{ name: 'Settings', outline: IconSettings, filled: IconSettingsFill },
	{ name: 'Moon', outline: IconMoon, filled: IconMoonFill },
	{
		name: 'Rocket Ship',
		outline: IconRocketShip,
		filled: IconRocketShipFill,
	},
];
