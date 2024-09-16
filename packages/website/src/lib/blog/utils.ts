import { format } from 'date-fns';

export function formatDate(date: Date) {
	return format(date, 'MMMM do, yyyy');
}

export function isPostPublished(post: { date: string | number | Date }): boolean {
	const gmtMinus6Offset = 3600000 * 6; // 6 hours in milliseconds
	const currentDateGMTMinus6 = new Date(Date.now() - gmtMinus6Offset);
	const publishDateGMTMinus6 = new Date(new Date(post.date).getTime() - gmtMinus6Offset);

	return publishDateGMTMinus6 <= currentDateGMTMinus6;
}
