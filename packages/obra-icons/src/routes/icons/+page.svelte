<script>
	// @todo dynamically import all icons
	let iconCount = 277;

	import IconActivity from '$lib/icons/Activity.svelte';
	import IconAdd from '$lib/icons/Add.svelte';
	import IconAirplay from '$lib/icons/Airplay.svelte';
	import IconAlignCenter from '$lib/icons/AlignCenter.svelte';
	import IconAlignJustify from '$lib/icons/AlignJustify.svelte';
	import IconAlignLeft from '$lib/icons/AlignLeft.svelte';
	import IconAlignRight from '$lib/icons/AlignRight.svelte';
	import IconArchive from '$lib/icons/Archive.svelte';
	import IconArrowDown from '$lib/icons/ArrowDown.svelte';
	import IconArrowLeft from '$lib/icons/ArrowLeft.svelte';
	import IconArrowLeftDown from '$lib/icons/ArrowLeftDown.svelte';
	import IconArrowLeftUp from '$lib/icons/ArrowLeftUp.svelte';
	import IconArrowRight from '$lib/icons/ArrowRight.svelte';
	import IconArrowRightDown from '$lib/icons/ArrowRightDown.svelte';
	import IconArrowRightUp from '$lib/icons/ArrowRightUp.svelte';
	import IconArrowUp from '$lib/icons/ArrowUp.svelte';
	import IconAttachment from '$lib/icons/Attachment.svelte';
	import IconBackspace from '$lib/icons/Backspace.svelte';
	import IconBan from '$lib/icons/Ban.svelte';
	import IconBarChart from '$lib/icons/BarChart.svelte';
	import IconBarChartAlt from '$lib/icons/BarChartAlt.svelte';
	import IconBarChartAlt2 from '$lib/icons/BarChartAlt2.svelte';
	import IconBills from '$lib/icons/Bills.svelte';
	import IconBluetooth from '$lib/icons/Bluetooth.svelte';
	import IconBoard from '$lib/icons/Board.svelte';
	import IconBold from '$lib/icons/Bold.svelte';
	import IconBook from '$lib/icons/Book.svelte';
	import IconBookmark from '$lib/icons/Bookmark.svelte';
	import IconBookmarkAlt from '$lib/icons/BookmarkAlt.svelte';
	import IconBookOpen from '$lib/icons/BookOpen.svelte';
	import IconBox from '$lib/icons/Box.svelte';
	import IconBriefcase from '$lib/icons/Briefcase.svelte';
	import IconCalendar from '$lib/icons/Calendar.svelte';
	import IconCall from '$lib/icons/Call.svelte';
	import IconCamera from '$lib/icons/Camera.svelte';
	import IconCheck from '$lib/icons/Check.svelte';
	import IconChevronDoubleDown from '$lib/icons/ChevronDoubleDown.svelte';
	import IconChevronDoubleLeft from '$lib/icons/ChevronDoubleLeft.svelte';
	import IconChevronDoubleRight from '$lib/icons/ChevronDoubleRight.svelte';
	import IconChevronDoubleUp from '$lib/icons/ChevronDoubleUp.svelte';
	import IconChevronDown from '$lib/icons/ChevronDown.svelte';
	import IconChevronLeft from '$lib/icons/ChevronLeft.svelte';
	import IconChevronRight from '$lib/icons/ChevronRight.svelte';
	import IconChevronUp from '$lib/icons/ChevronUp.svelte';
	import IconCircle from '$lib/icons/Circle.svelte';
	import IconCircleAdd from '$lib/icons/CircleAdd.svelte';
	import IconCircleArrowDown from '$lib/icons/CircleArrowDown.svelte';
	import IconCircleArrowLeft from '$lib/icons/CircleArrowLeft.svelte';
	import IconCircleArrowRight from '$lib/icons/CircleArrowRight.svelte';
	import IconCircleArrowUp from '$lib/icons/CircleArrowUp.svelte';
	import IconCircleCheck from '$lib/icons/CircleCheck.svelte';
	import IconCircleError from '$lib/icons/CircleError.svelte';
	import IconCircleEuro from '$lib/icons/CircleEuro.svelte';
	import IconCircleInfo from '$lib/icons/CircleInfo.svelte';
	import IconCirclePercent from '$lib/icons/CirclePercent.svelte';
	import IconCircleQuestion from '$lib/icons/CircleQuestion.svelte';
	import IconCircleSubtract from '$lib/icons/CircleSubtract.svelte';
	import IconCircleWarning from '$lib/icons/CircleWarning.svelte';
	import IconClipboard from '$lib/icons/Clipboard.svelte';
	import IconClipboardCheck from '$lib/icons/ClipboardCheck.svelte';
	import IconClipboardEmpty from '$lib/icons/ClipboardEmpty.svelte';
	import IconClipboardError from '$lib/icons/ClipboardError.svelte';
	import IconClock from '$lib/icons/Clock.svelte';
	import IconClockAlt from '$lib/icons/ClockAlt.svelte';
	import IconClose from '$lib/icons/Close.svelte';
	import IconCloud from '$lib/icons/Cloud.svelte';
	import IconCloudDownload from '$lib/icons/CloudDownload.svelte';
	import IconCloudDownloadAlt from '$lib/icons/CloudDownloadAlt.svelte';
	import IconCloudUpload from '$lib/icons/CloudUpload.svelte';
	import IconCloudUploadAlt from '$lib/icons/CloudUploadAlt.svelte';
	import IconCloudy from '$lib/icons/Cloudy.svelte';
	import IconCode from '$lib/icons/Code.svelte';
	import IconComment from '$lib/icons/Comment.svelte';
	import IconCompass from '$lib/icons/Compass.svelte';
	import IconComputer from '$lib/icons/Computer.svelte';
	import IconCopy from '$lib/icons/Copy.svelte';
	import IconCreditCard from '$lib/icons/CreditCard.svelte';
	import IconDatabase from '$lib/icons/Database.svelte';
	import IconDelete from '$lib/icons/Delete.svelte';
	import IconDeleteAlt from '$lib/icons/DeleteAlt.svelte';
	import IconDocument from '$lib/icons/Document.svelte';
	import IconDocumentAdd from '$lib/icons/DocumentAdd.svelte';
	import IconDocumentCheck from '$lib/icons/DocumentCheck.svelte';
	import IconDocumentDownload from '$lib/icons/DocumentDownload.svelte';
	import IconDocumentEmpty from '$lib/icons/DocumentEmpty.svelte';
	import IconDocumentError from '$lib/icons/DocumentError.svelte';
	import IconDocumentMissing from '$lib/icons/DocumentMissing.svelte';
	import IconDocumentRemove from '$lib/icons/DocumentRemove.svelte';
	import IconDocumentSmall from '$lib/icons/DocumentSmall.svelte';
	import IconDownload from '$lib/icons/Download.svelte';
	import IconEdit from '$lib/icons/Edit.svelte';
	import IconEditAlt from '$lib/icons/EditAlt.svelte';
	import IconEmail from '$lib/icons/Email.svelte';
	import IconEnter from '$lib/icons/Enter.svelte';
	import IconEqualizer from '$lib/icons/Equalizer.svelte';
	import IconExpand from '$lib/icons/Expand.svelte';
	import IconExport from '$lib/icons/Export.svelte';
	import IconExternalLink from '$lib/icons/ExternalLink.svelte';
	import IconEye from '$lib/icons/Eye.svelte';
	import IconFavorite from '$lib/icons/Favorite.svelte';
	import IconFilter from '$lib/icons/Filter.svelte';
	import IconFilterAlt from '$lib/icons/FilterAlt.svelte';
	import IconFlag from '$lib/icons/Flag.svelte';
	import IconFolder from '$lib/icons/Folder.svelte';
	import IconFolderAdd from '$lib/icons/FolderAdd.svelte';
	import IconFolderCheck from '$lib/icons/FolderCheck.svelte';
	import IconFolderDownload from '$lib/icons/FolderDownload.svelte';
	import IconFolderError from '$lib/icons/FolderError.svelte';
	import IconFolderRemove from '$lib/icons/FolderRemove.svelte';
	import IconFullscreen from '$lib/icons/Fullscreen.svelte';
	import IconGlobe from '$lib/icons/Globe.svelte';
	import IconGrid from '$lib/icons/Grid.svelte';
	import IconHeart from '$lib/icons/Heart.svelte';
	import IconHome from '$lib/icons/Home.svelte';
	import IconHtml from '$lib/icons/Html.svelte';
	import IconImage from '$lib/icons/Image.svelte';
	import IconInbox from '$lib/icons/Inbox.svelte';
	import IconInboxAlt from '$lib/icons/InboxAlt.svelte';
	import IconItalic from '$lib/icons/Italic.svelte';
	import IconKanban from '$lib/icons/Kanban.svelte';
	import IconLaptop from '$lib/icons/Laptop.svelte';
	import IconLayers from '$lib/icons/Layers.svelte';
	import IconLayout from '$lib/icons/Layout.svelte';
	import IconLifebuoy from '$lib/icons/Lifebuoy.svelte';
	import IconLink from '$lib/icons/Link.svelte';
	import IconList from '$lib/icons/List.svelte';
	import IconLocation from '$lib/icons/Location.svelte';
	import IconLock from '$lib/icons/Lock.svelte';
	import IconLogIn from '$lib/icons/LogIn.svelte';
	import IconLogOut from '$lib/icons/LogOut.svelte';
	import IconMedia from '$lib/icons/Media.svelte';
	import IconMegaphone from '$lib/icons/Megaphone.svelte';
	import IconMenu from '$lib/icons/Menu.svelte';
	import IconMessage from '$lib/icons/Message.svelte';
	import IconMessageAlt from '$lib/icons/MessageAlt.svelte';
	import IconMessageCircle from '$lib/icons/MessageCircle.svelte';
	import IconMessageSquare from '$lib/icons/MessageSquare.svelte';
	import IconMinimize from '$lib/icons/Minimize.svelte';
	import IconMonitor from '$lib/icons/Monitor.svelte';
	import IconMove from '$lib/icons/Move.svelte';
	import IconMultiply from '$lib/icons/Multiply.svelte';
	import IconNavigationN from '$lib/icons/NavigationN.svelte';
	import IconNavigationNe from '$lib/icons/NavigationNe.svelte';
	import IconNote from '$lib/icons/Note.svelte';
	import IconNotification from '$lib/icons/Notification.svelte';
	import IconOptionsHorizontal from '$lib/icons/OptionsHorizontal.svelte';
	import IconOptionsVertical from '$lib/icons/OptionsVertical.svelte';
	import IconPaperclip from '$lib/icons/Paperclip.svelte';
	import IconPausePlay from '$lib/icons/PausePlay.svelte';
	import IconPen from '$lib/icons/Pen.svelte';
	import IconPercent from '$lib/icons/Percent.svelte';
	import IconPhone from '$lib/icons/Phone.svelte';
	import IconPieChart from '$lib/icons/PieChart.svelte';
	import IconPin from '$lib/icons/Pin.svelte';
	import IconPlay from '$lib/icons/Play.svelte';
	import IconPrevious from '$lib/icons/Previous.svelte';
	import IconPrint from '$lib/icons/Print.svelte';
	import IconRadio from '$lib/icons/Radio.svelte';
	import IconRefresh from '$lib/icons/Refresh.svelte';
	import IconRemove from '$lib/icons/Remove.svelte';
	import IconReorder from '$lib/icons/Reorder.svelte';
	import IconReorderAlt from '$lib/icons/ReorderAlt.svelte';
	import IconRepeat from '$lib/icons/Repeat.svelte';
	import IconRss from '$lib/icons/Rss.svelte';
	import IconScan from '$lib/icons/Scan.svelte';
	import IconSearch from '$lib/icons/Search.svelte';
	import IconSelect from '$lib/icons/Select.svelte';
	import IconSend from '$lib/icons/Send.svelte';
	import IconSendAlt from '$lib/icons/SendAlt.svelte';
	import IconServer from '$lib/icons/Server.svelte';
	import IconSettings from '$lib/icons/Settings.svelte';
	import IconShare from '$lib/icons/Share.svelte';
	import IconShareAlt from '$lib/icons/ShareAlt.svelte';
	import IconShield from '$lib/icons/Shield.svelte';
	import IconShieldCheck from '$lib/icons/ShieldCheck.svelte';
	import IconShieldOff from '$lib/icons/ShieldOff.svelte';
	import IconShuffle from '$lib/icons/Shuffle.svelte';
	import IconShuffleAlt from '$lib/icons/ShuffleAlt.svelte';
	import IconSidebar from '$lib/icons/Sidebar.svelte';
	import IconSliders from '$lib/icons/Sliders.svelte';
	import IconSort from '$lib/icons/Sort.svelte';
	import IconStop from '$lib/icons/Stop.svelte';
	import IconSubtract from '$lib/icons/Subtract.svelte';
	import IconSwitch from '$lib/icons/Switch.svelte';
	import IconTable from '$lib/icons/Table.svelte';
	import IconTablet from '$lib/icons/Tablet.svelte';
	import IconTag from '$lib/icons/Tag.svelte';
	import IconTaskList from '$lib/icons/TaskList.svelte';
	import IconText from '$lib/icons/Text.svelte';
	import IconThreeRows from '$lib/icons/ThreeRows.svelte';
	import IconTransfer from '$lib/icons/Transfer.svelte';
	import IconTrendingDown from '$lib/icons/TrendingDown.svelte';
	import IconTrendingUp from '$lib/icons/TrendingUp.svelte';
	import IconTwoColumns from '$lib/icons/TwoColumns.svelte';
	import IconTwoRows from '$lib/icons/TwoRows.svelte';
	import IconUnderline from '$lib/icons/Underline.svelte';
	import IconUndo from '$lib/icons/Undo.svelte';
	import IconUnlock from '$lib/icons/Unlock.svelte';
	import IconUpload from '$lib/icons/Upload.svelte';
	import IconUser from '$lib/icons/User.svelte';
	import IconUserAdd from '$lib/icons/UserAdd.svelte';
	import IconUserArrowDown from '$lib/icons/UserArrowDown.svelte';
	import IconUserCheck from '$lib/icons/UserCheck.svelte';
	import IconUserCross from '$lib/icons/UserCross.svelte';
	import IconUserRemove from '$lib/icons/UserRemove.svelte';
	import IconVideo from '$lib/icons/Video.svelte';
	import IconVolume from '$lib/icons/Volume.svelte';
	import IconVolume1 from '$lib/icons/Volume1.svelte';
	import IconVolume2 from '$lib/icons/Volume2.svelte';
	import IconVolumeX from '$lib/icons/VolumeX.svelte';
	import IconWarningTriangle from '$lib/icons/WarningTriangle.svelte';
	import IconWifi from '$lib/icons/Wifi.svelte';
	import IconWifiOff from '$lib/icons/WifiOff.svelte';
	import IconZoomIn from '$lib/icons/ZoomIn.svelte';
	import IconZoomOut from '$lib/icons/ZoomOut.svelte';

	let icons = [
		'IconActivity',
		'IconAdd',
		'IconAirplay',
		'IconAlignCenter',
		'IconAlignJustify',
		'IconAlignLeft',
		'IconAlignRight',
		'IconArchive',
		'IconArrowDown',
		'IconArrowLeft',
		'IconArrowLeftDown',
		'IconArrowLeftUp',
		'IconArrowRight',
		'IconArrowRightDown',
		'IconArrowRightUp',
		'IconArrowUp',
		'IconAttachment',
		'IconBackspace',
		'IconBan',
		'IconBarChart',
		'IconBarChartAlt',
		'IconBarChartAlt2',
		'IconBills',
		'IconBluetooth',
		'IconBoard',
		'IconBold',
		'IconBook',
		'IconBookmark',
		'IconBookmarkAlt',
		'IconBookOpen',
		'IconBox',
		'IconBriefcase',
		'IconCalendar',
		'IconCall',
		'IconCamera',
		'IconCheck',
		'IconChevronDoubleDown',
		'IconChevronDoubleLeft',
		'IconChevronDoubleRight',
		'IconChevronDoubleUp',
		'IconChevronDown',
		'IconChevronLeft',
		'IconChevronRight',
		'IconChevronUp',
		'IconCircle',
		'IconCircleAdd',
		'IconCircleArrowDown',
		'IconCircleArrowLeft',
		'IconCircleArrowRight',
		'IconCircleArrowUp',
		'IconCircleCheck',
		'IconCircleError',
		'IconCircleEuro',
		'IconCircleInfo',
		'IconCirclePercent',
		'IconCircleQuestion',
		'IconCircleSubtract',
		'IconCircleWarning',
		'IconClipboard',
		'IconClipboardCheck',
		'IconClipboardEmpty',
		'IconClipboardError',
		'IconClock',
		'IconClockAlt',
		'IconClose',
		'IconCloud',
		'IconCloudDownload',
		'IconCloudDownloadAlt',
		'IconCloudUpload',
		'IconCloudUploadAlt',
		'IconCloudy',
		'IconCode',
		'IconComment',
		'IconCompass',
		'IconComputer',
		'IconCopy',
		'IconCreditCard',
		'IconDatabase',
		'IconDelete',
		'IconDeleteAlt',
		'IconDocument',
		'IconDocumentAdd',
		'IconDocumentCheck',
		'IconDocumentDownload',
		'IconDocumentEmpty',
		'IconDocumentError',
		'IconDocumentMissing',
		'IconDocumentRemove',
		'IconDocumentSmall',
		'IconDownload',
		'IconEdit',
		'IconEditAlt',
		'IconEmail',
		'IconEnter',
		'IconEqualizer',
		'IconExpand',
		'IconExport',
		'IconExternalLink',
		'IconEye',
		'IconFavorite',
		'IconFilter',
		'IconFilterAlt',
		'IconFlag',
		'IconFolder',
		'IconFolderAdd',
		'IconFolderCheck',
		'IconFolderDownload',
		'IconFolderError',
		'IconFolderRemove',
		'IconFullscreen',
		'IconGlobe',
		'IconGrid',
		'IconHeart',
		'IconHome',
		'IconHtml',
		'IconImage',
		'IconInbox',
		'IconInboxAlt',
		'IconItalic',
		'IconKanban',
		'IconLaptop',
		'IconLayers',
		'IconLayout',
		'IconLifebuoy',
		'IconLink',
		'IconList',
		'IconLocation',
		'IconLock',
		'IconLogIn',
		'IconLogOut',
		'IconMedia',
		'IconMegaphone',
		'IconMenu',
		'IconMessage',
		'IconMessageAlt',
		'IconMessageCircle',
		'IconMessageSquare',
		'IconMinimize',
		'IconMonitor',
		'IconMove',
		'IconMultiply',
		'IconNavigationN',
		'IconNavigationNe',
		'IconNote',
		'IconNotification',
		'IconOptionsHorizontal',
		'IconOptionsVertical',
		'IconPaperclip',
		'IconPausePlay',
		'IconPen',
		'IconPercent',
		'IconPhone',
		'IconPieChart',
		'IconPin',
		'IconPlay',
		'IconPrevious',
		'IconPrint',
		'IconRadio',
		'IconRefresh',
		'IconRemove',
		'IconReorder',
		'IconReorderAlt',
		'IconRepeat',
		'IconRss',
		'IconScan',
		'IconSearch',
		'IconSelect',
		'IconSend',
		'IconSendAlt',
		'IconServer',
		'IconSettings',
		'IconShare',
		'IconShareAlt',
		'IconShield',
		'IconShieldCheck',
		'IconShieldOff',
		'IconShuffle',
		'IconShuffleAlt',
		'IconSidebar',
		'IconSliders',
		'IconSort',
		'IconStop',
		'IconSubtract',
		'IconSwitch',
		'IconTable',
		'IconTablet',
		'IconTag',
		'IconTaskList',
		'IconText',
		'IconThreeRows',
		'IconTransfer',
		'IconTrendingDown',
		'IconTrendingUp',
		'IconTwoColumns',
		'IconTwoRows',
		'IconUnderline',
		'IconUndo',
		'IconUnlock',
		'IconUpload',
		'IconUser',
		'IconUserAdd',
		'IconUserArrowDown',
		'IconUserCheck',
		'IconUserCross',
		'IconUserRemove',
		'IconVideo',
		'IconVolume',
		'IconVolume1',
		'IconVolume2',
		'IconVolumeX',
		'IconWarningTriangle',
		'IconWifi',
		'IconWifiOff',
		'IconZoomIn',
		'IconZoomOut',
	];

	function transformIconString(str) {
		if (str.startsWith('Icon')) {
			str = str.slice(4);
		}

		const words = [];
		let wordStart = 0;
		for (let i = 1; i < str.length; i++) {
			if (str[i] === str[i].toUpperCase()) {
				words.push(str.slice(wordStart, i));
				wordStart = i;
			}
		}
		words.push(str.slice(wordStart));

		return words.join(' ').toLowerCase();
	}
</script>

<div class="responds-to-dark">
	<div class="bg-dark-grey">
		<div class="container padding-medium margin-0-auto">
			<div class="input-with-icon">
				<input
					placeholder="Search {iconCount} Obra Icons and Obra Plus Icons..."
					type="text"
				/>
				<IconSearch />
			</div>

			<div class="vertical-container-x-large">
				<ul class="icon-grid">
					{#each icons as icon}
						<li class="icon-item">
							<!-- Want to render the icon here e.g. <svelte:component this={icon} />-->
							{transformIconString(icon)}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
